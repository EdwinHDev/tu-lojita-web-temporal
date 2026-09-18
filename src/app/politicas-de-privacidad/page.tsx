import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | Tu Lojita",
  description:
    "Política de Privacidad y Tratamiento de Datos Personales de TuLojita para Compradores, Emprendedores y Empresas.",
};

export default function PoliticasDePrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950">
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
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors group"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
            Volver al inicio
          </Link>
        </div>

        {/* Hero Header */}
        <header className="mb-6 sm:mb-10 bg-white dark:bg-slate-900 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40 mb-3 sm:mb-4">
            <span>Protección y Seguridad Digital</span>
          </div>
          <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight break-words">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            Última actualización: Septiembre de 2026
          </p>
          <p className="mt-3 sm:mt-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            La presente Política de Privacidad describe cómo la Plataforma recopila, utiliza, almacena y protege los datos personales de los Usuarios (Compradores, Emprendedores y Empresas), en estricto cumplimiento de los estándares de protección de datos personales y seguridad digital.
          </p>
        </header>

        {/* Secciones de Privacidad */}
        <div className="space-y-6 sm:space-y-8">
          {/* 1. DATOS RECOPILADOS Y SU FINALIDAD */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              1. Datos Recopilados y Su Finalidad
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {/* A. Datos Generales de Registro */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  A. Datos Generales de Registro
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white">Información solicitada:</strong> Nombre, dirección de correo electrónico, número telefónico y ubicación general para logística.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-white">Finalidad:</strong> Creación de cuenta, autenticación de seguridad y facilitación de la comunicación directa para entregas de productos.
                  </p>
                </div>
              </div>

              {/* B. Datos Sensibles y Documentos de Identidad */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  B. Datos Sensibles y Documentos de Identidad (Módulo de Crédito)
                </h3>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    <strong className="text-slate-900 dark:text-white">Información solicitada:</strong> Fotografía digitalizada del Documento de Identidad (Cédula de Identidad o Pasaporte) del Comprador, así como el Registro de Información Fiscal (RIF) de las Empresas.
                  </p>
                  <p>
                    <strong className="text-slate-900 dark:text-white">Finalidad:</strong> Verificación de la identidad del Comprador al momento de solicitar compras bajo la modalidad de pagos parciales o créditos directos otorgados por un perfil &quot;Empresa&quot;.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* 2. CONSENTIMIENTO Y TRANSFERENCIA DE DATOS A TERCEROS (CRM) */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">
              2. Consentimiento y Transferencia de Datos a Terceros (CRM)
            </h2>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-xs sm:text-sm md:text-base">
                  1. Transferencia Exclusiva a Perfiles &quot;Empresa&quot;
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Al solicitar una compra a crédito o pago parcial, el Comprador otorga su consentimiento expreso para que la Plataforma transmita su Documento de Identidad y datos de contacto directos al módulo de CRM de la Empresa vendedora seleccionada.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1 text-xs sm:text-sm md:text-base">
                  2. Uso Restringido por la Empresa
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  La Empresa receptora asume la condición de custodia de dichos datos y se obliga legalmente a utilizarlos <strong>única y exclusivamente</strong> para la formalización del contrato de venta, emisión de facturas y gestión de cobranza propia.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
                <h3 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-1 text-xs sm:text-sm md:text-base">
                  3. No Comercialización
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                  La Plataforma <strong>no vende, alquila, cede ni comercializa</strong> los datos personales ni documentos de identidad de sus usuarios a agencias de publicidad ni a ningún tercero ajeno a la relación comercial entablada.
                </p>
              </div>
            </div>
          </article>

          {/* 3. SEGURIDAD DE LA INFORMACIÓN */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              3. Seguridad de la Información
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              La Plataforma implementa medidas de seguridad técnicas y organizativas, incluyendo protocolos de cifrado <strong>SSL/TLS</strong> para la transmisión de datos en tránsito, previniendo accesos no autorizados, alteración o filtración de información sensible.
            </p>
          </article>

          {/* 4. DERECHOS DE LOS USUARIOS Y ELIMINACIÓN DE CUENTAS (DERECHOS ARCO) */}
          <article className="bg-white dark:bg-slate-900 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <h2 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              4. Derechos de los Usuarios y Eliminación de Cuentas (Derechos ARCO)
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 leading-relaxed">
              Todo Usuario tiene derecho a acceder, corregir, actualizar o <strong>solicitar la eliminación definitiva</strong> de su cuenta y datos personales de nuestros servidores.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 dark:bg-slate-800/60">
                <h3 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm md:text-base mb-1">
                  Procedimiento para la eliminación de datos
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  El usuario puede solicitar el borrado completo enviando un correo electrónico a la dirección oficial de soporte de la Plataforma o mediante el botón <strong>&quot;Eliminar Cuenta&quot;</strong> ubicado en el menú de configuración de la aplicación móvil.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
                <h3 className="font-semibold text-amber-900 dark:text-amber-300 text-xs sm:text-sm md:text-base mb-1">
                  Excepción
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300/90 leading-relaxed">
                  La eliminación de la cuenta no procederá de forma inmediata en caso de que el Usuario mantenga compromisos de pago pendientes, disputas activas o procesos de cobro abiertos con un perfil Empresa.
                </p>
              </div>
            </div>
          </article>
        </div>

        {/* Bottom Navigation / Links */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center sm:text-left">
          <div>
            <p className="text-xs text-slate-400 mb-0.5">¿Deseas consultar las normas de la plataforma?</p>
            <Link
              href="/terminos-y-condiciones"
              className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Consultar Términos y Condiciones →
            </Link>
          </div>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition-opacity text-center"
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
