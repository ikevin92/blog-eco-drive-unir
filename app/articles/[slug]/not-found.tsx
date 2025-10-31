import { SiteHeader } from "@/src/components/Sidebar";
import { SiteFooter } from "@/src/components/SiteFooter";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fcf8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SiteHeader />
        <section className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 items-center justify-center text-center">
            <h1 className="text-[#0e1b0e] text-[48px] font-bold leading-tight tracking-[-0.015em] mb-4">
              404
            </h1>
            <h2 className="text-[#0e1b0e] text-[24px] font-bold leading-tight tracking-[-0.015em] mb-2">
              Artículo no encontrado
            </h2>
            <p className="text-[#4e974e] text-base font-normal leading-normal mb-8">
              Lo sentimos, el artículo que buscas no existe o ha sido movido.
            </p>
            <div className="flex gap-4">
              <Link
                href="/articles"
                className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#e7f3e7] text-[#0e1b0e] text-sm font-medium hover:bg-[#d1e7d1] transition-colors"
              >
                Ver todos los artículos
              </Link>
              <Link
                href="/"
                className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#4e974e] text-white text-sm font-medium hover:bg-[#3d7a3d] transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
