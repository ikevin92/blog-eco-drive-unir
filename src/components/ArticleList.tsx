import { ARTICLES } from "../data/articles";
import { ArticleCard } from "./ArticleCard";

export function ArticlesList() {
  return (
    <>
      <h2 className="text-[#0e1b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Artículos Recientes
      </h2>
      {ARTICLES.map((article) => (
        <ArticleCard
          key={article.slug}
          title={article.title}
          desc={article.desc}
          img={article.img}
          slug={article.slug}
        />
      ))}
    </>
  );
}
