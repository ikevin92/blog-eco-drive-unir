import { ArticleCard, type Article } from "./ArticleCard";

const ARTICLES: Article[] = [
  {
    title: "Guía Completa para Elegir tu Híbrido Ideal",
    desc: "Analizamos los factores clave que debes considerar al seleccionar un vehículo híbrido, desde el consumo de combustible hasta el rendimiento y la tecnología.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAknzowi8GTfk6brFlbVF-XF2CFnbfwX_xUKFBvD846491H-veJlHhgv_qf2-AWmVidkBkrpDH62eUWBEO9oIc5O6Mdce4_8V61O73WcxecpfT8uSi8TuUKH-tLy4_nR-tqrNGgcv_WxQ_ieItEfLatklXo2Fql2RwIRiylIKW-cjzN1fpMyVaXFq8CsocoULRpLsJqNKk1bt-UOnwgBUDVN14R1_t7eu6Z4tUgUMdue8rLYWTi4KT_rk_8Vvf6u57EAk0sFC8Qys4",
  },
  {
    title: "Comparativa: Modelos Híbridos Líderes en el Mercado",
    desc: "Comparamos los modelos híbridos más populares disponibles en Colombia, destacando sus características, ventajas y desventajas para ayudarte a tomar la mejor decisión.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYwOdM-8HcwRc_Tt1WMNPq6ViiE-hFDxMZJhNBKKXSrQi99pOelTXDco2VZg37Lm9UuqnZwDW47hDnV-EkerZ7CTE5c18ps9tWJmG3YBLUAyxkChMAivGUN67c6nV_yK5taVd-uD-_SumTjl3ouPAkuFVTWs66TYEuziNvgf5l4pcbe8YnpYIaNccQuAUH7SoIalsn_prw834RMco18iLGhNb6MjSzH78hllOVp4PH96K37VLqzEYdkTN-Eg0jdl25D_6ptKRZ8ag",
  },
  {
    title: "El Futuro de la Movilidad Sostenible en Colombia",
    desc: "Exploramos las tendencias y avances en tecnología híbrida y eléctrica, y su impacto en el futuro del transporte en el país.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD1_kSJh8FJLiQ5vWNY5AXO9ZyXPkjGG7tNC40nbhFMuk_wW5hdrhIDvgtiuihgNP8NWt73xU3SdHCD2ffZshOV2O8yAri28xMI2MpC4xXexUb9MTSWT-JIt-Uuuso6AzlqLD02xkVxnFHbWGcpgzPySkyMgNJwhWSDQ_s7N4uI5r-Waf5-0peCqwTwOIy7WgGMc1vR_OR0edIKOpQC5TJ3maeOMUG74N3apGHIEfccuvNOCv363wW94tFX6lxjzU1k4lWw7oUURw",
  },
];

export function ArticlesList() {
  return (
    <>
      <h2 className="text-[#0e1b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Artículos Recientes
      </h2>
      {ARTICLES.map((a, i) => (
        <ArticleCard
          key={i}
          {...a}
        />
      ))}
    </>
  );
}
