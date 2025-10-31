export type Article = {
  title: string;
  desc: string;
  img: string;
  href?: string;
};

export function ArticleCard({ title, desc, img, href = "#" }: Article) {
  return (
    <section className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#0e1b0e] text-base font-bold leading-tight">
              {title}
            </p>
            <p className="text-[#4e974e] text-sm leading-normal">{desc}</p>
          </div>
          <a
            href={href}
            className="flex w-fit h-8 px-4 items-center justify-center rounded-lg bg-[#e7f3e7] text-[#0e1b0e] text-sm font-medium"
          >
            Leer artículo
          </a>
        </div>
        <div
          className="w-full aspect-video bg-center bg-no-repeat bg-cover rounded-lg flex-1"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </section>
  );
}
