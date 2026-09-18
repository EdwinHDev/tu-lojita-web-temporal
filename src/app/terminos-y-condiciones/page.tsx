import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Tu Lojita",
  description:
    "Términos y Condiciones de Uso de la Plataforma TuLojita. Conoce el funcionamiento del Marketplace, soluciones para Emprendedores, Empresas y Compradores.",
};

export default function TerminosYCondicionesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Header */}
      <div className="container mx-auto pt-3 sm:pt-5 px-3 sm:px-4">
        <Navbar />
      </div>

      {/* Main Container */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-12 max-w-4xl flex-grow">
        {/* Back Link */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1 font-bold">←</span>
            Volver al inicio
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-6 sm:mb-10 bg-white dark:bg-slate-900 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 mb-3 sm:mb-4">
            <span>Ecosistema TuLojita</span>
          </div>
          <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white mb-3 sm:mb-4 leading-tight break-words">
            Términos y Condiciones de Uso de la Plataforma
          </h1>
          <p className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400">
            Versión vigente: 16 de septiembre de 2026
          </p>
        </header>

        {/* Resumen de Términos y Condiciones */}
        <section className="mb-6 sm:mb-8 bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 shrink-0"></span>
            Resumen de Términos y Condiciones
          </h2>
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed mb-5 sm:mb-6 font-medium">
            TuLojita es una plataforma de solución tecnológica que ofrece servicios de directorio comercial, vitrina digital y herramientas de gestión de ventas.
          </p>

          <div className="space-y-3 sm:space-y-4">
            <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base mb-1">
                El Marketplace
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                Es el entorno digital donde las Personas Usuarias (Compradores, Emprendedores y Empresas) pueden conectar para acordar la compra y venta de bienes y servicios.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base mb-1">
                Soluciones para Emprendedores
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                La aplicación móvil para Emprendedores es la herramienta simplificada para publicar productos y acordar ventas de contado de forma directa.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base mb-1">
                Soluciones para Empresas y CRM
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                La aplicación móvil y web para Empresas es la herramienta que permite a comercios verificados gestionar inventarios, organizar su catálogo y estructurar ventas a crédito o pagos parciales con sus clientes.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-800">
              <h3 className="font-bold text-amber-950 dark:text-amber-200 text-sm sm:text-base mb-1">
                Independencia Operativa
              </h3>
              <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed">
                La plataforma <strong>no es un banco, pasarela de pago ni agente financiero</strong>. No recaudamos ni custodiamos dinero de las transacciones entre usuarios.
              </p>
            </div>

            <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base mb-1">
                Aceptación y Responsabilidad
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                Para operar en el Ecosistema, toda Persona Usuaria debe aceptar estos Términos y Condiciones y la Política de Privacidad. Cada usuario es responsable de la veracidad de sus datos y del resguardo de sus credenciales de acceso.
              </p>
            </div>
          </div>
        </section>

        {/* Secciones Completas */}
        <div className="space-y-6 sm:space-y-8">
          {/* 1. EL ECOSISTEMA TECNOLÓGICO Y SUS SERVICIOS */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              1. El Ecosistema Tecnológico y sus Servicios
            </h2>
            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed mb-5 sm:mb-6">
              Los servicios ofrecidos a través del sitio web y sus aplicaciones móviles asociadas (en adelante, el &quot;Sitio&quot; o la &quot;Plataforma&quot;) están diseñados para conformar un entorno tecnológico unificado (en adelante, el &quot;Ecosistema&quot;) que permite a las personas y empresas interactuar, publicar y comercializar productos bajo las siguientes modalidades:
            </p>

            {/* A. Naturaleza del Servicio */}
            <div className="mb-6 pl-3 sm:pl-4 border-l-2 border-indigo-500 space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                A. Naturaleza del Servicio e Intermediación Neutral
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                La Plataforma consiste exclusivamente en un canal tecnológico de directorio, vitrina digital y comunicación interactiva que facilita el contacto entre vendedores independientes y potenciales compradores.
              </p>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800">
                <h4 className="font-bold text-rose-950 dark:text-rose-200 text-xs sm:text-sm mb-2">
                  Exención de Funciones Financieras:
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-rose-950 dark:text-rose-100 leading-relaxed">
                  <li>La Plataforma <strong>no es un banco, entidad financiera, prestamista, ni agente de pago o custodia (escrow)</strong>.</li>
                  <li>La Plataforma no procesa, recibe, cobra ni retiene dinero derivado de las transacciones entre los Usuarios.</li>
                  <li>Todos los acuerdos económicos (pagos de contado, transferencias directas, Pago Móvil, cuotas de financiamiento o entregas de efectivo) se acuerdan y ejecutan de forma 100% directa y privada entre el Vendedor y el Comprador.</li>
                  <li>La Plataforma no asume responsabilidad alguna por impagos, fraudes, transferencias erróneas o disputas monetarias entre las partes.</li>
                </ul>
              </div>
            </div>

            {/* B. Clasificación y Reglas por Roles */}
            <div className="pl-3 sm:pl-4 border-l-2 border-indigo-500 space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                B. Clasificación y Reglas por Roles de Usuario
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl sm:rounded-2xl">
                  <h4 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2">
                    1. Rol &quot;Emprendedor&quot; (Ventas al Contado / Perfil Simplificado)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <li>Perfil diseñado para la publicación de productos y gestión de ventas de contado.</li>
                    <li><strong>Acceso a Datos:</strong> El Emprendedor únicamente tendrá acceso al nombre, número telefónico y dirección proporcionada por el Comprador para la coordinación de la entrega.</li>
                    <li><strong>Restricción Expresa:</strong> El Emprendedor no tiene acceso al módulo de financiamiento, ventas a crédito, pagos parciales ni a la captura de documentos de identidad de los compradores.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl sm:rounded-2xl">
                  <h4 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2">
                    2. Rol &quot;Empresa&quot; (Perfil Verificado)
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <li>Requiere la validación previa del Registro de Información Fiscal (RIF) de persona jurídica o Firma Personal del titular.</li>
                    <li>Habilita el acceso al módulo de configuración de esquemas de pago parcial / crédito y la gestión de clientes en CRM.</li>
                    <li><strong>Responsabilidad Fiscal:</strong> Cada Empresa es la única responsable de emitir las facturas correspondientes, cumplir con las normativas tributarias y responder legalmente por los productos o servicios ofrecidos.</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl sm:rounded-2xl">
                  <h4 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2">
                    3. Rol &quot;Comprador&quot;
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    <li>Usuario que navega, consulta e inicia contacto para adquirir productos o servicios.</li>
                    <li>Reconoce que negocia de forma directa con terceros independientes (Emprendedores o Empresas) y se compromete a verificar las condiciones del producto antes de realizar cualquier pago.</li>
                  </ul>
                </div>
              </div>
            </div>
          </article>

          {/* 2. MÓDULO DE PAGOS PARCIALES, CRÉDITO Y PENALIZACIONES */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              2. Módulo de Pagos Parciales, Crédito y Penalizaciones
            </h2>

            <div className="space-y-3 sm:space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed">
              <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1">
                  1. Autonomía del Crédito
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  La opción de solicitar o conceder ventas a crédito o pagos parciales es una herramienta técnica de cálculo entre la Empresa y el Comprador. La Plataforma no otorga créditos ni garantiza el cobro de los mismos.
                </p>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1">
                  2. Transparencia en Recargos y Mora
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 mb-2">
                  Antes de confirmar una compra a crédito, la aplicación mostrará desglosado:
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200 ml-1 sm:ml-2">
                  <li>El monto de la primera cuota o inicial.</li>
                  <li>El porcentaje de recargo por financiamiento fijado por la Empresa.</li>
                  <li>La tasa o porcentaje de multa por mora aplicable en caso de retraso en los pagos.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-950 dark:text-white text-xs sm:text-sm md:text-base mb-1">
                  3. Gestión de Cobro
                </h3>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  La Plataforma no ejecuta labores de cobranza judicial ni extrajudicial. La gestión de cobro ante eventuales morosidades es responsabilidad exclusiva de la Empresa vendedora.
                </p>
              </div>
            </div>
          </article>

          {/* 3. PROPIEDAD INTELECTUAL Y CONDUCTA */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              3. Propiedad Intelectual y Conducta
            </h2>

            <ul className="space-y-3 sm:space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed text-xs sm:text-sm md:text-base">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0"></span>
                <p>
                  <strong className="text-slate-950 dark:text-white">Licencia de Contenido:</strong> El Vendedor conserva la titularidad sobre las imágenes y descripciones publicadas, pero otorga a la Plataforma una licencia no exclusiva para mostrarlas dentro del sitio web y la aplicación móvil.
                </p>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0"></span>
                <p>
                  <strong className="text-slate-950 dark:text-white">Prohibición de Bienes Ilegales:</strong> Queda estrictamente prohibido publicar productos de procedencia ilícita, armas, sustancias reguladas o material violento.
                </p>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0"></span>
                <p>
                  <strong className="text-slate-950 dark:text-white">Suspensión de Cuentas:</strong> La Plataforma se reserva el derecho de suspender o eliminar de forma definitiva la cuenta de cualquier Usuario que incurra en reportes de fraude, suplantación de identidad o incumplimiento de estos términos.
                </p>
              </li>
            </ul>
          </article>

          {/* 4. TARIFAS, COMISIONES Y RENDICIÓN DE CUENTAS */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 sm:mb-4">
              4. Tarifas, Comisiones y Rendición de Cuentas
            </h2>

            {/* A. Comisión por Venta */}
            <div className="mb-5 sm:mb-6 space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                A. Comisión por Venta (Cargo por Servicio de Intermediación)
              </h3>
              <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 ml-1 sm:ml-2">
                <li>
                  <strong className="text-slate-950 dark:text-white">Concepto:</strong> Por cada transacción o venta concretada a través del Ecosistema, el Vendedor (Emprendedor o Empresa) se obliga a pagar a la Plataforma una tarifa porcentual o fija denominada Comisión por Servicio de Intermediación.
                </li>
                <li>
                  <strong className="text-slate-950 dark:text-white">Naturaleza del Cobro:</strong> Esta comisión corresponde exclusivamente al costo del uso de la infraestructura tecnológica y la conexión con el Comprador. No constituye ningún tipo de impuesto, tributo nacional ni retención fiscal.
                </li>
              </ul>
            </div>

            {/* B. Mecanismo de Declaración y Pago */}
            <div className="mb-5 sm:mb-6 space-y-2 sm:space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                B. Mecanismo de Declaración y Pago de Comisiones
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium">
                Dado que los pagos de los Compradores son recibidos directamente por el Vendedor:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200 ml-1 sm:ml-2">
                <li>
                  <strong className="text-slate-950 dark:text-white">Registro de Ventas:</strong> Toda venta o acuerdo de crédito generado en la Plataforma quedará registrado en el panel del Vendedor.
                </li>
                <li>
                  <strong className="text-slate-950 dark:text-white">Obligación de Rendición:</strong> El Vendedor se compromete a reportar y validar las ventas concretadas dentro de los plazos establecidos por el Ecosistema.
                </li>
                <li>
                  <strong className="text-slate-950 dark:text-white">Plazo de Pago de la Comisión:</strong> La Plataforma emitirá periódicamente (semanal o mensualmente) una relación de comisiones acumuladas. El Vendedor dispondrá de un plazo de días continuos estipulado en el panel para transferir el monto total de las comisiones adeudadas a las cuentas oficiales de la Plataforma.
                </li>
              </ol>
            </div>

            {/* C. Consecuencias por Infracción */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white">
                C. Consecuencias por Infracción o Falta de Pago de Comisiones
              </h3>
              <div className="space-y-2.5 sm:space-y-3">
                <div className="p-4 rounded-xl sm:rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-xs sm:text-sm">
                  <strong className="text-rose-950 dark:text-rose-200 font-bold">Suspensión por Morosidad:</strong>{" "}
                  <span className="text-rose-950 dark:text-rose-100">
                    El incumplimiento en el pago de las comisiones en el plazo estipulado generará la suspensión automática de la cuenta del Vendedor, inhabilitando la publicación de nuevos productos y el acceso a las herramientas del CRM.
                  </span>
                </div>
                <div className="p-4 rounded-xl sm:rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-300 dark:border-rose-800 text-xs sm:text-sm">
                  <strong className="text-rose-950 dark:text-rose-200 font-bold">Prohibición de Cancelaciones Fraudulentas:</strong>{" "}
                  <span className="text-rose-950 dark:text-rose-100">
                    Queda estrictamente prohibido marcar una venta como &quot;no concretada&quot; o &quot;cancelada&quot; dentro de la app si la transacción económica realmente se realizó, con el fin de evadir la comisión. Detectar esta conducta dará lugar al cierre definitivo de la cuenta y la pérdida de reputación en la Plataforma.
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Navigation / Links */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 text-center sm:text-left">
          <div>
            <p className="text-xs text-slate-600 dark:text-slate-300 mb-0.5 font-medium">¿Deseas conocer cómo protegemos tu información?</p>
            <Link
              href="/politicas-de-privacidad"
              className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400 hover:underline"
            >
              Consultar Política de Privacidad →
            </Link>
          </div>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity text-center shadow-xs"
          >
            Volver a Tu Lojita
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer className="pt-6 sm:pt-8 pb-6 sm:pb-8" />
    </div>
  );
}
