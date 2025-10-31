import { ArticlesList } from "@/src/components/ArticleList";
import { Hero } from "@/src/components/Hero";
import { SiteHeader } from "@/src/components/Sidebar";
import { SiteFooter } from "../src/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <Hero />
          <ArticlesList />
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
