# Next.js 16+ & React 19: Manual Oficial de Buenas Prácticas, Rendimiento y Seguridad
> Proyecto: `tu-lojita-web` | Versión Base: Next.js 16.3+ & React 19.2+

Este documento contiene el manual técnico definitivo para construir, escalar y mantener aplicaciones en Next.js moderno dentro del ecosistema de **Tu-Lojita**. Cada nuevo componente, página, acción o ruta debe alinearse con estos estándares.

---

## Tabla de Contenidos
1. [El Modelo Mental: Server Components vs Client Components](#1-el-modelo-mental-server-components-vs-client-components)
2. [React Compiler & React 19](#2-react-compiler--react-19)
3. [APIs Asíncronas Obligatorias](#3-apis-asíncronas-obligatorias)
4. [Estrategia de Caching y Revalidación (`use cache` & `cacheLife`)](#4-estrategia-de-caching-y-revalidación)
5. [Partial Prerendering (PPR) y Streaming con Suspense](#5-partial-prerendering-ppr-y-streaming-con-suspense)
6. [Mutaciones: Server Actions vs Route Handlers](#6-mutaciones-server-actions-vs-route-handlers)
7. [Arquitectura de Seguridad Blindada (Data Access Layer & Taint APIs)](#7-arquitectura-de-seguridad-blindada)
8. [Optimización de Rendimiento y Core Web Vitals](#8-optimización-de-rendimiento-y-core-web-vitals)
9. [Checklist de Calidad para Pull Requests / Tareas](#9-checklist-de-calidad)

---

## 1. El Modelo Mental: Server Components vs Client Components

### 1.1. Server Components (RSC) por defecto
En Next.js App Router, **todo archivo es un Server Component** a menos que se declare explícitamente `'use client'` al principio del archivo.

- **Ventajas**:
  - Cero JavaScript enviado al navegador para ese componente.
  - Acceso directo a base de datos, filesystem y variables de entorno secretas (`process.env.DATABASE_URL`).
  - No hay saltos de red adicionales (Network Waterfalls) entre el frontend y el backend.

### 1.2. El Límite de Cliente (`'use client'`)
- `'use client'` **NO significa que el componente se ejecute únicamente en el navegador**. Se renderiza primero en el servidor (SSR) para producir HTML estático y luego se hidrata en el navegador.
- **Regla**: Empuja `'use client'` hacia las hojas más pequeñas del árbol. Nunca marques una página entera (`page.tsx`) como `'use client'` si solo un botón o input necesita estado.

```
                  ┌──────────────────────────────┐
                  │   StorePage (RSC)            │
                  │   - Lee BD / API             │
                  │   - 0 KB JS                  │
                  └──────────────┬───────────────┘
                                 │
                 ┌───────────────┴───────────────┐
                 │                               │
  ┌──────────────▼──────────────┐ ┌──────────────▼──────────────┐
  │ ProductList (RSC)           │ │ FilterBar ('use client')    │
  │ - Genera HTML de productos  │ │ - Maneja estado visual      │
  │ - 0 KB JS                   │ │ - Solo JS necesario         │
  └─────────────────────────────┘ └─────────────────────────────┘
```

### 1.3. Composición Server-into-Client
Si un componente cliente necesita envolver contenido del servidor (por ejemplo, un Modal o Tabs), pásalo como `children` o props:

```tsx
// ✅ Correcto: ServerHeavyList sigue siendo 0 KB de bundle para el cliente
<ClientModal>
  <ServerHeavyList />
</ClientModal>
```

---

## 2. React Compiler & React 19

En este proyecto tenemos activado:
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
};
```

### Reglas:
1. **NO usar `useMemo`, `useCallback` ni `React.memo`**:
   El React Compiler analiza las dependencias del código en tiempo de compilación y optimiza automáticamente las re-evaluaciones y re-renders. Usar memoización manual es redundante y agrega ruido al código.
2. **Nuevos Hooks de React 19**:
   - `useActionState`: Maneja el estado, errores y estado pendiente (`isPending`) de Server Actions en formularios.
   - `useOptimistic`: Permite reflejar cambios en la UI de inmediato mientras el servidor procesa la mutación.
   - `use()`: Permite desenvolver Promises y Contextos condicionalmente dentro del render.

---

## 3. APIs Asíncronas Obligatorias

A partir de Next.js 15 y consolidado en Next.js 16, **todas las APIs dependientes de la petición son asíncronas**. Ya no se accede sincrónicamente a `params`, `searchParams`, `cookies()` o `headers()`.

```tsx
// src/app/(store)/[slug]/page.tsx
interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function StorePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { categoria } = await searchParams;
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  return <div>Tienda: {slug}</div>;
}
```

---

## 4. Estrategia de Caching y Revalidación

Next.js 16 abandonó el modelo de caching implícito y oscuro. **Todo `fetch` es `no-store` por defecto.**

### 4.1. La Directiva `'use cache'` y `cacheLife`
Para cachear de forma intencional:
```typescript
import { cacheLife, cacheTag } from 'next/cache';

export async function getStoreProducts(storeId: string) {
  'use cache';
  cacheLife('hours'); // Perfiles: 'seconds', 'minutes', 'hours', 'days', 'max'
  cacheTag(`store-${storeId}-products`);

  return await db.product.findMany({ where: { storeId } });
}
```

### 4.2. Patrón "Read Outside, Cache Inside"
Nunca accedas a `cookies()` o `headers()` dentro de un bloque `'use cache'`, ya que invalidarías el propósito del cache. Extrae el valor afuera y pásalo como argumento primitivo:

```tsx
// ✅ Correcto:
export default async function Page() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value ?? 'light';
  return <CachedBanner theme={theme} />;
}

async function CachedBanner({ theme }: { theme: string }) {
  'use cache';
  cacheLife('days');
  return <div className={`banner-${theme}`}>...</div>;
}
```

### 4.3. Revalidación
- Revalidar por Tag tras una mutación:
  ```typescript
  import { revalidateTag } from 'next/cache';
  revalidateTag(`store-${storeId}-products`);
  ```
- Revalidar por Ruta:
  ```typescript
  import { revalidatePath } from 'next/cache';
  revalidatePath('/[slug]', 'page');
  ```

---

## 5. Partial Prerendering (PPR) y Streaming con Suspense

El objetivo es entregar el Shell visual de la página en **0 ms** desde el Edge/CDN, y hacer streaming de los datos pesados sobre la misma conexión HTTP/2.

```tsx
import { Suspense } from 'react';
import { StoreHeaderSkeleton, ProductGridSkeleton } from '@/components/skeletons';

export default function StoreView() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Shell Estático: Carga instantánea */}
      <nav className="border-b bg-white p-4">
        <h1 className="text-xl font-bold">Tu-Lojita</h1>
      </nav>

      {/* 2. Sección Dinámica con Streaming */}
      <main className="container mx-auto p-4">
        <Suspense fallback={<ProductGridSkeleton />}>
          <DynamicProductList />
        </Suspense>
      </main>
    </div>
  );
}
```

---

## 6. Mutaciones: Server Actions vs Route Handlers

### 6.1. Server Actions (`'use server'`)
Son la opción principal para mutaciones desencadenadas desde la UI de la aplicación web.
- **Seguridad**: Cada Server Action es un endpoint POST público. Siempre verifica sesión y roles.
- **Validación**: Siempre parsea los argumentos con Zod o Valibot.

```typescript
'use server';

import { z } from 'zod';
import { revalidateTag } from 'next/cache';
import { verifyAuth } from '@/lib/dal';

const OrderItemSchema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
});

export async function createOrderAction(prevState: any, formData: FormData) {
  // 1. Autenticación y Autorización
  const user = await verifyAuth();

  // 2. Validación de Entrada
  const result = OrderItemSchema.safeParse({
    productId: formData.get('productId'),
    quantity: Number(formData.get('quantity')),
  });

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  // 3. Ejecución en Base de Datos / Backend
  await db.order.create({
    data: {
      userId: user.id,
      ...result.data,
    },
  });

  // 4. Invalidación de Cache
  revalidateTag(`user-${user.id}-orders`);

  return { success: true };
}
```

### 6.2. Route Handlers (`route.ts`)
Úsalos exclusivamente para:
- Webhooks de terceros (pasarelas de pago, Stripe, notificaciones externas).
- Endpoints consumidos por clientes externos (aplicaciones móviles, scripts).
- Descarga de streams binarios (PDFs, exportación a Excel).

---

## 7. Arquitectura de Seguridad Blindada

### 7.1. Data Access Layer (DAL) y `server-only`
El acceso a datos debe estar encapsulado en un módulo dedicado (ej. `src/lib/dal.ts` o `src/data/*`) protegido con el paquete `server-only`.

```bash
npm install server-only
```

```typescript
// src/lib/dal.ts
import 'server-only';
import { cookies } from 'next/headers';
import { cache } from 'react';

// cache() de React asegura que si 5 componentes llaman a verifySession(), 
// la base de datos se consulta exactamente UNA sola vez por petición.
export const verifySession = cache(async () => {
  const token = (await cookies()).get('session')?.value;
  if (!token) return null;

  const session = await validateSessionToken(token);
  return session;
});
```

### 7.2. Falso Sentido de Seguridad con `layout.tsx` y `middleware.ts`
> **ALERTA CRÍTICA**: Los layouts no se re-ejecutan durante navegaciones internas si el layout ya estaba en pantalla. El middleware de Next.js corre en Edge y no debe ser la única barrera de seguridad de datos. **Cada Server Action y cada consulta de datos en `page.tsx` debe validar su propia sesión a través del DAL.**

### 7.3. Taint APIs de React 19
Evita que contraseñas, hashes o API Keys privadas se envíen accidentalmente en las props de un Client Component:

```typescript
import { experimental_taintUniqueValue, experimental_taintObjectReference } from 'react';

export async function getUserPrivateProfile(userId: string) {
  const user = await db.user.findUnique({ where: { id: userId } });
  
  // Si alguien pasa 'user' a un Client Component, React lanzará un error fatal en desarrollo y build:
  experimental_taintObjectReference('Prohibido enviar el objeto de usuario crudo al cliente', user);
  experimental_taintUniqueValue('Prohibido filtrar hash de contraseña', user, user.passwordHash);

  return user;
}
```

---

## 8. Optimización de Rendimiento y Core Web Vitals

1. **`next/image`**:
   - Nunca uses la etiqueta `<img>` estándar.
   - Si la imagen es el elemento principal (LCP) que se ve arriba del pliegue, agrega la prop `priority`.
   - Al usar `fill`, especifica siempre el atributo `sizes` (ej. `sizes="(max-width: 768px) 100vw, 33vw"`).
2. **`next/font`**:
   - Carga todas las fuentes mediante `@next/font` o fuentes locales para asegurar 0 peticiones de red externas en runtime y eliminar el Cumulative Layout Shift (CLS = 0).
3. **`next/dynamic`**:
   - Carga diferida de componentes pesados exclusivos de cliente (ej. escáneres de códigos de barra, editores de texto, gráficas SVG interactivas):
   ```tsx
   const BarcodeScanner = dynamic(() => import('@/components/BarcodeScanner'), {
     ssr: false,
     loading: () => <ScannerSkeleton />,
   });
   ```

---

## 9. Checklist de Calidad

Antes de enviar código a producción o dar una tarea por completada:
- [ ] ¿El componente es Server Component por defecto?
- [ ] ¿Los componentes con `'use client'` están en las hojas más externas?
- [ ] ¿Se usaron `await params` y `await searchParams` asíncronos?
- [ ] ¿Se prescindió de `useMemo` y `useCallback` gracias al React Compiler?
- [ ] ¿Las funciones de acceso a datos tienen `import 'server-only'`?
- [ ] ¿Cada Server Action valida sesión y esquema con Zod?
- [ ] ¿Las cargas pesadas usan `<Suspense>` con Skeletons?
- [ ] ¿Las imágenes usan `next/image` con `sizes` o dimensiones fijas?
