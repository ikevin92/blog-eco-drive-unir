import { SiteHeader } from "@/src/components/Sidebar";
import { SiteFooter } from "@/src/components/SiteFooter";
import { getAllSlugs, getArticleBySlug } from "@/src/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generar todos los paths estáticos
export function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generar metadata dinámicamente
export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: `${article.title} | Kevin EcoDrive Colombia`,
    description: article.desc,
    openGraph: {
      title: article.title,
      description: article.desc,
      images: [article.mainImage],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  console.log("Rendering article page for slug:", slug);
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fcf8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <SiteHeader />
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#0e1b0e] tracking-light text-[32px] font-bold leading-tight">
                  {article.title}
                </p>
                <p className="text-[#4e974e] text-sm font-normal leading-normal">
                  {article.desc}
                </p>
                <div className="flex gap-4 text-[#4e974e] text-sm">
                  <span>Por {article.author}</span>
                  <span>•</span>
                  <span>
                    {new Date(article.date).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="flex w-full grow bg-[#f8fcf8] py-3">
              <div className="w-full gap-1 overflow-hidden bg-[#f8fcf8] aspect-[3/2] flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage: `url("${article.mainImage}")`,
                  }}
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="article-content">
              {/* Introduction */}
              <p className="text-[#0e1b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
                {article.content.intro}
              </p>

              {/* Sections */}
              {article.content.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-[#0e1b0e] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                    {section.title}
                  </h3>
                  <p className="text-[#0e1b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
                    {section.content}
                  </p>
                  {section.image && (
                    <div className="flex w-full grow bg-[#f8fcf8] p-4">
                      <div className="w-full gap-1 overflow-hidden bg-[#f8fcf8] aspect-[3/2] rounded-lg flex">
                        <div
                          className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                          style={{
                            backgroundImage: `url("${section.image}")`,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              {article.content.conclusion && (
                <p className="text-[#0e1b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
                  {article.content.conclusion}
                </p>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center p-4 mt-8 border-t border-[#e7f3e7]">
              <Link
                href="/articles"
                className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#e7f3e7] text-[#0e1b0e] text-sm font-medium hover:bg-[#d1e7d1] transition-colors"
              >
                ← Volver a artículos
              </Link>
              <Link
                href="/"
                className="flex h-10 px-6 items-center justify-center rounded-lg bg-[#4e974e] text-white text-sm font-medium hover:bg-[#3d7a3d] transition-colors"
              >
                Inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
