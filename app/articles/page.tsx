import { ArticlesList } from "@/src/components/ArticleList";
import { SiteHeader } from "@/src/components/Sidebar";
import { SiteFooter } from "@/src/components/SiteFooter";
import Link from "next/link";

export default function ArticlesIndexPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fcf8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SiteHeader />
        <section className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex items-center justify-between p-4">
              <h1 className="text-[#0e1b0e] text-[32px] font-bold leading-tight tracking-[-0.015em]">
                Todos los Artículos
              </h1>
              <Link
                href="/"
                className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#4e974e] text-white text-sm font-medium hover:bg-[#3d7a3d] transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
            <ArticlesList />
          </div>
        </section>
      </div>
      <SiteFooter />
    </div>
  );
}
