import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function HomePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col justify-between bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Navigation Header */}
      <div className="container mx-auto pt-3 sm:pt-5 px-3 sm:px-4">
        <Navbar />

        <div className="min-h-[calc(100dvh-180px)] sm:min-h-[calc(100dvh-200px)] flex flex-col justify-center items-center py-6 sm:py-12">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 sm:px-12 md:px-16 py-10 sm:py-16 md:py-20 rounded-3xl sm:rounded-4xl shadow-xl text-center border border-white/20 dark:border-slate-800">
            <h1 className="text-4xl min-[480px]:text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white mb-3 sm:mb-4 break-words">
              Próximamente
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Estamos trabajando para poder ofrecerte este servicio muy pronto
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer className="pb-4 sm:pb-6 pt-0" />
    </div>
  );
}
