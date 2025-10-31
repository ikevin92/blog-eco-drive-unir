import { Article } from "../components/ArticleCard";

export interface FullArticle extends Article {
  content: {
    intro: string;
    sections: {
      title: string;
      content: string;
      image?: string;
    }[];
    conclusion?: string;
  };
  date: string;
  author: string;
  mainImage: string;
}

export const ARTICLES: FullArticle[] = [
  {
    title: "Top 5 Carros Híbridos Más Vendidos en Colombia 2025",
    desc: "Descubre los modelos híbridos que lideran el mercado colombiano en 2025, combinando eficiencia, rendimiento y tecnología avanzada para una conducción más sostenible.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDniLQoaWemmPmPnYOHW6ETVZePsStiQne5FUstzMoy1HWWZ_GAWbVS1cxLfojG7Hdd_-P54GUCc5TtPU_c37gGPv0O3P8fIrqftFNxjH6I-YxAg1CGdAc1i-IBHSdq1OjpTBVfkAHfMArwiD84PtJ-J-eb79ZVmOHmvtKmejVPllggCEkSWZPX3K0eGDUFzq6AbQSIfy0wHuTHQRUK7lQ1M9HaJtAjPqeBTK6FsstyZU2E8FE9aG4pDbxUPkIgvKFIAOidOjAwLg",
    slug: "top-5-carros-hibridos-mas-vendidos-colombia-2025",
    date: "2025-10-31",
    author: "Kevin Echeverri",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDDniLQoaWemmPmPnYOHW6ETVZePsStiQne5FUstzMoy1HWWZ_GAWbVS1cxLfojG7Hdd_-P54GUCc5TtPU_c37gGPv0O3P8fIrqftFNxjH6I-YxAg1CGdAc1i-IBHSdq1OjpTBVfkAHfMArwiD84PtJ-J-eb79ZVmOHmvtKmejVPllggCEkSWZPX3K0eGDUFzq6AbQSIfy0wHuTHQRUK7lQ1M9HaJtAjPqeBTK6FsstyZU2E8FE9aG4pDbxUPkIgvKFIAOidOjAwLg",
    content: {
      intro:
        "En 2025, el mercado automotriz colombiano ha experimentado una transformación significativa, con un creciente interés en vehículos híbridos. Estos modelos, que combinan un motor de combustión interna con uno o más motores eléctricos, ofrecen una excelente eficiencia de combustible y reducen las emisiones contaminantes. A continuación, presentamos los cinco carros híbridos más vendidos en Colombia este año:",
      sections: [
        {
          title: "1. Modelo A Híbrido",
          content:
            "El Modelo A Híbrido se ha consolidado como el líder del mercado, gracias a su diseño elegante, tecnología avanzada y excelente rendimiento. Su sistema híbrido optimizado ofrece un consumo de combustible excepcional, ideal para la conducción urbana y en carretera.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAxYzYT8ZNxdiyYneBNe4U7k2W-Sp8nwIN69FdW2alqUVn3QFrxaFiTGncI7o6vH_k626hkNAjt7KJt2LdOtEjIkN0-v6c2-rkvlOTBm511UoTKMQStvGAus8Fb4hu-bC1VoPKvGJHqoMMFmzT64JsUmkOUBrjiLv_kP1-vjosUt6JCi49bZAuL4Vyj7Gf9q3zKKW_lQh2CB0BjEpq-ISz1mI8M8N-ouW9I8cK6cuhV5bB2fmOcSohqDy0h4KVve16opxGAABdOuzM",
        },
        {
          title: "2. Modelo B Híbrido",
          content:
            "El Modelo B Híbrido destaca por su versatilidad y espacio interior, lo que lo convierte en una opción popular para familias. Su sistema híbrido proporciona una conducción suave y eficiente, con una buena autonomía en modo eléctrico.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBzcs4HHpvM1mWqXz_29RETy3Ti4vLAhXCW9D2L6b9hn28hHiZFcp21ugq7SceAgUUJkTmi1OETstXNarWj7fbCVlzCDxuQ1RHBLVPvfpW2APoTf9Yd2NKhLdXsw_E94sQrJKc_4lJE1SzRVzb2q1e2dhWnhdhOS7kG5mk525Co7ErMx3j0yab3_nKzn0uxEV8IBn4JT84FtUZXOJ1LUrInXhNnYbI6wW-rWxHzDhDdr7AW5s4xbwSd1MLc6pbaB_x4xnh0_TcX2cM",
        },
        {
          title: "3. Modelo C Híbrido",
          content:
            "El Modelo C Híbrido combina un diseño deportivo con un rendimiento dinámico. Su sistema híbrido ofrece una aceleración rápida y una conducción emocionante, sin comprometer la eficiencia de combustible.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCJxIjbT3ap853XSagdLGlbdlb6VhAPLLjj0vhoJMvO4-98CIQHd-nX1Zq1Ez-JLhRpOKCu3ekyEOPsuBrSyx2IfV8UEVD0k81YMvzUPNGzLaGlkCKN_QSZDC_GZ9nN60fkXK5Iy4tM5U-4G68SdqErjCocdNL4gAjHkmq8HPgiT5g9jJzfqcioR7K5sW3GoE537fOpfXb0q0sR2R4hecIhAtitH2Pi9VTvVbRQdbeJz1PvWbQNa1eNLgOdlXXD9n8PR-7UmuydXF8",
        },
        {
          title: "4. Modelo D Híbrido",
          content:
            "El Modelo D Híbrido es conocido por su robustez y capacidad todoterreno. Su sistema híbrido proporciona una potencia adicional para superar terrenos difíciles, manteniendo un consumo de combustible razonable.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB1kZ_0kBFu5PxJbnLaAPrL0-FTNVs42KypwDWAO2IGIq9_NUm2lZ2J8COKKWwpSuNo9FbqnlnqN5oq9i9wZch6iOy9B_DK5ykpl-P0dnYUAQENLk1XspYLZl5j5bHk8R8NOw2TkJf7O-67PW0BuGe9nEBE_pxGU9uuQPaf1uM0Frw4wWUwWWHYQwWz7bdiy80Fu1O-zfJbA5fLOALkZP4i3P63p_9POMieedMOfqYpjC0VYrmTEJu6Ee8Lky-xE2UnTiF1_HHJjHk",
        },
        {
          title: "5. Modelo E Híbrido",
          content:
            "El Modelo E Híbrido ofrece una excelente relación calidad-precio, con un equipamiento completo y un sistema híbrido eficiente. Es una opción atractiva para aquellos que buscan un vehículo híbrido asequible y confiable.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBoHe5wc-j51Ta07cUCh53Nha5wSYIHU-7yqSMIZObPl3C_ABPk9s33CmV6MgkreqjzX5mIYpk8WMrL2CsblbOjuNrY7B1Px0JFpj_-kANBEjnxJQkACWQSGacSgKYiXP7WOhhiCFaKSxmfjB-Pz-QiOPuAECnsjAwN7kJaIqI2Alq5ihbuUZqvuObQ9BzMPYIbpJ6sxP6fvKqSBcp05F9F1h3qJdyyWT6F2ayVmmpTmvWZPyx4TicAZhZ55DI9FNZBAPBwGjOgA_U",
        },
      ],
      conclusion:
        "Estos cinco modelos representan la vanguardia de la tecnología híbrida en Colombia, ofreciendo a los conductores una alternativa más sostenible y eficiente para sus desplazamientos diarios. Con una variedad de estilos y características, hay un vehículo híbrido para cada necesidad y preferencia.",
    },
  },
  {
    title: "Guía Completa para Elegir tu Híbrido Ideal",
    desc: "Analizamos los factores clave que debes considerar al seleccionar un vehículo híbrido, desde el consumo de combustible hasta el rendimiento y la tecnología.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAknzowi8GTfk6brFlbVF-XF2CFnbfwX_xUKFBvD846491H-veJlHhgv_qf2-AWmVidkBkrpDH62eUWBEO9oIc5O6Mdce4_8V61O73WcxecpfT8uSi8TuUKH-tLy4_nR-tqrNGgcv_WxQ_ieItEfLatklXo2Fql2RwIRiylIKW-cjzN1fpMyVaXFq8CsocoULRpLsJqNKk1bt-UOnwgBUDVN14R1_t7eu6Z4tUgUMdue8rLYWTi4KT_rk_8Vvf6u57EAk0sFC8Qys4",
    slug: "guia-completa-elegir-hibrido-ideal",
    date: "2025-10-30",
    author: "Kevin Echeverri",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAknzowi8GTfk6brFlbVF-XF2CFnbfwX_xUKFBvD846491H-veJlHhgv_qf2-AWmVidkBkrpDH62eUWBEO9oIc5O6Mdce4_8V61O73WcxecpfT8uSi8TuUKH-tLy4_nR-tqrNGgcv_WxQ_ieItEfLatklXo2Fql2RwIRiylIKW-cjzN1fpMyVaXFq8CsocoULRpLsJqNKk1bt-UOnwgBUDVN14R1_t7eu6Z4tUgUMdue8rLYWTi4KT_rk_8Vvf6u57EAk0sFC8Qys4",
    content: {
      intro:
        "Elegir el vehículo híbrido perfecto puede ser una tarea compleja con tantas opciones disponibles en el mercado. Esta guía te ayudará a navegar por los aspectos más importantes a considerar.",
      sections: [
        {
          title: "Tipos de Vehículos Híbridos",
          content:
            "Existen diferentes tipos de híbridos: híbridos tradicionales, híbridos enchufables y híbridos suaves. Cada uno tiene sus propias ventajas según tu estilo de conducción.",
        },
        {
          title: "Consumo de Combustible",
          content:
            "Analiza el consumo real en ciudad y carretera. Los híbridos son especialmente eficientes en tráfico urbano donde pueden aprovechar mejor la regeneración de energía.",
        },
      ],
    },
  },
  {
    title: "Comparativa: Modelos Híbridos Líderes en el Mercado",
    desc: "Comparamos los modelos híbridos más populares disponibles en Colombia, destacando sus características, ventajas y desventajas para ayudarte a tomar la mejor decisión.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYwOdM-8HcwRc_Tt1WMNPq6ViiE-hFDxMZJhNBKKXSrQi99pOelTXDco2VZg37Lm9UuqnZwDW47hDnV-EkerZ7CTE5c18ps9tWJmG3YBLUAyxkChMAivGUN67c6nV_yK5taVd-uD-_SumTjl3ouPAkuFVTWs66TYEuziNvgf5l4pcbe8YnpYIaNccQuAUH7SoIalsn_prw834RMco18iLGhNb6MjSzH78hllOVp4PH96K37VLqzEYdkTN-Eg0jdl25D_6ptKRZ8ag",
    slug: "comparativa-modelos-hibridos-lideres-mercado",
    date: "2025-10-29",
    author: "Kevin Echeverri",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYwOdM-8HcwRc_Tt1WMNPq6ViiE-hFDxMZJhNBKKXSrQi99pOelTXDco2VZg37Lm9UuqnZwDW47hDnV-EkerZ7CTE5c18ps9tWJmG3YBLUAyxkChMAivGUN67c6nV_yK5taVd-uD-_SumTjl3ouPAkuFVTWs66TYEuziNvgf5l4pcbe8YnpYIaNccQuAUH7SoIalsn_prw834RMco18iLGhNb6MjSzH78hllOVp4PH96K37VLqzEYdkTN-Eg0jdl25D_6ptKRZ8ag",
    content: {
      intro:
        "En esta comparativa detallada, analizamos las características más importantes de los modelos híbridos líderes en el mercado colombiano.",
      sections: [
        {
          title: "Criterios de Evaluación",
          content:
            "Evaluamos cada modelo basándose en eficiencia, precio, tecnología, espacio interior y confiabilidad a largo plazo.",
        },
      ],
    },
  },
  {
    title: "El Futuro de la Movilidad Sostenible en Colombia",
    desc: "Exploramos las tendencias y avances en tecnología híbrida y eléctrica, y su impacto en el futuro del transporte en el país.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCD1_kSJh8FJLiQ5vWNY5AXO9ZyXPkjGG7tNC40nbhFMuk_wW5hdrhIDvgtiuihgNP8NWt73xU3SdHCD2ffZshOV2O8yAri28xMI2MpC4xXexUb9MTSWT-JIt-Uuuso6AzlqLD02xkVxnFHbWGcpgzPySkyMgNJwhWSDQ_s7N4uI5r-Waf5-0peCqwTwOIy7WgGMc1vR_OR0edIKOpQC5TJ3maeOMUG74N3apGHIEfccuvNOCv363wW94tFX6lxjzU1k4lWw7oUURw",
    slug: "futuro-movilidad-sostenible-colombia",
    date: "2025-10-28",
    author: "Kevin Echeverri",
    mainImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCD1_kSJh8FJLiQ5vWNY5AXO9ZyXPkjGG7tNC40nbhFMuk_wW5hdrhIDvgtiuihgNP8NWt73xU3SdHCD2ffZshOV2O8yAri28xMI2MpC4xXexUb9MTSWT-JIt-Uuuso6AzlqLD02xkVxnFHbWGcpgzPySkyMgNJwhWSDQ_s7N4uI5r-Waf5-0peCqwTwOIy7WgGMc1vR_OR0edIKOpQC5TJ3maeOMUG74N3apGHIEfccuvNOCv363wW94tFX6lxjzU1k4lWw7oUURw",
    content: {
      intro:
        "El futuro del transporte en Colombia está cambiando rápidamente hacia alternativas más sostenibles. Descubre qué nos depara el futuro.",
      sections: [
        {
          title: "Tendencias Tecnológicas",
          content:
            "Las últimas innovaciones en baterías, sistemas híbridos y infraestructura de carga están transformando el panorama automotriz.",
        },
      ],
    },
  },
];

// Funciones utilitarias
export function getArticleBySlug(slug: string): FullArticle | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getAllSlugs(): string[] {
  return ARTICLES.map((article) => article.slug);
}
