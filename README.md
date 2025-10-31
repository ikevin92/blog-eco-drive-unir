# 🚗 Kevin EcoDrive Colombia

Un blog moderno sobre vehículos híbridos y movilidad sostenible en Colombia, desarrollado con las últimas tecnologías web.

## 📖 Descripción

**Kevin EcoDrive Colombia** es un blog especializado en vehículos híbridos que ofrece información actualizada sobre:

- ✅ **Reseñas de vehículos híbridos** disponibles en Colombia
- ✅ **Comparativas detalladas** entre diferentes modelos
- ✅ **Guías de compra** para elegir el híbrido ideal
- ✅ **Análisis de mercado** y tendencias de movilidad sostenible
- ✅ **Noticias** sobre tecnología automotriz eco-friendly

## 🚀 Tecnologías Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework de React con App Router
- **[React 19](https://react.dev/)** - Biblioteca de interfaz de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework de CSS utilitario
- **[pnpm](https://pnpm.io/)** - Gestor de paquetes rápido y eficiente

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js 18.17 o superior** ([Descargar aquí](https://nodejs.org/))
- **pnpm** (recomendado) o npm
- Un editor de código como [VS Code](https://code.visualstudio.com/)

### Verificar versión de Node.js

```bash
node --version
# Debe mostrar v18.17.0 o superior
```

### Instalar pnpm (si no lo tienes)

```bash
npm install -g pnpm
```

## 🛠️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd blog-kevin-app
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Ejecutar en modo desarrollo

```bash
pnpm dev
```

### 4. Abrir en el navegador

Visita [http://localhost:3000](http://localhost:3000) para ver el blog en funcionamiento.

## 📁 Estructura del Proyecto

```
blog-kevin-app/
├── app/                          # App Router de Next.js 16
│   ├── articles/                 # Páginas de artículos
│   │   ├── [slug]/              # Páginas dinámicas por slug
│   │   │   ├── page.tsx         # Vista individual de artículo
│   │   │   └── not-found.tsx    # Página 404 personalizada
│   │   └── page.tsx             # Lista de todos los artículos
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal
│   └── page.tsx                 # Página de inicio
├── src/
│   ├── components/              # Componentes reutilizables
│   │   ├── ArticleCard.tsx      # Tarjeta de artículo
│   │   ├── ArticleList.tsx      # Lista de artículos
│   │   ├── Hero.tsx             # Sección hero
│   │   ├── Sidebar.tsx          # Header/navegación
│   │   └── SiteFooter.tsx       # Footer del sitio
│   └── data/
│       └── articles.ts          # Base de datos de artículos
├── public/                      # Archivos estáticos
├── package.json                 # Dependencias y scripts
└── README.md                    # Este archivo
```

## 🎯 Funcionalidades

### ✨ Páginas Dinámicas

- **URLs amigables** con slugs únicos (`/articles/guia-completa-elegir-hibrido-ideal`)
- **Generación estática** para mejor rendimiento
- **Metadatos SEO** optimizados para cada artículo

### 🎨 Diseño Responsivo

- **Interfaz moderna** con Tailwind CSS 4
- **Diseño adaptable** para móviles, tablets y escritorio
- **Paleta de colores eco-friendly** en tonos verdes

### 🔍 SEO Optimizado

- **Meta tags dinámicos** para cada artículo
- **Open Graph** para redes sociales
- **URLs semánticas** y amigables

## 📝 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo

# Producción
pnpm build        # Construye la aplicación para producción
pnpm start        # Inicia servidor de producción

# Calidad de código
pnpm lint         # Ejecuta ESLint para verificar código
```

## 📄 Gestión de Contenido

### Agregar un nuevo artículo

1. Abre el archivo `src/data/articles.ts`
2. Agrega un nuevo objeto al array `ARTICLES`:

```typescript
{
  title: "Título del nuevo artículo",
  desc: "Descripción breve del artículo",
  img: "URL_de_la_imagen_principal",
  slug: "titulo-del-nuevo-articulo", // URL amigable
  date: "2025-11-01",
  author: "Kevin Echeverri",
  mainImage: "URL_de_la_imagen_principal",
  content: {
    intro: "Introducción del artículo...",
    sections: [
      {
        title: "Sección 1",
        content: "Contenido de la sección...",
        image: "URL_opcional_de_imagen"
      }
    ],
    conclusion: "Conclusión del artículo..."
  }
}
```

3. El artículo estará automáticamente disponible en `/articles/titulo-del-nuevo-articulo`

## 🌍 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a [Vercel](https://vercel.com)
2. Configura las variables de entorno si es necesario
3. Despliega automáticamente con cada push

### Otros proveedores

El proyecto es compatible con cualquier plataforma que soporte Node.js:

- **Netlify**
- **Railway**
- **Render**
- **AWS**
- **DigitalOcean**

## 👨‍💻 Autor

**Kevin Echeverri**
Especialista en vehículos híbridos y movilidad sostenible en Colombia.

## 📧 Contacto

Para sugerencias, colaboraciones o consultas sobre el proyecto, puedes contactarme a través de:

- 📧 Email: [tu-email@ejemplo.com]
- 🐙 GitHub: [tu-usuario-github]
- 🔗 LinkedIn: [tu-perfil-linkedin]

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

⭐ **¡Dale una estrella al proyecto si te resultó útil!**
