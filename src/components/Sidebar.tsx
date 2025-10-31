"use client";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7f3e7] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0e1b0e]">
        <div
          className="size-4"
          aria-hidden
        >
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-[#0e1b0e] text-lg font-bold leading-tight tracking-[-0.015em]">
          Kevin EcoDrive Colombia
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <Link
            className="text-[#0e1b0e] text-sm font-medium leading-normal"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-[#0e1b0e] text-sm font-medium leading-normal"
            href="#"
          >
            Artículos
          </Link>
          <Link
            className="text-[#0e1b0e] text-sm font-medium leading-normal"
            href="#"
          >
            Contacto
          </Link>
        </nav>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7f3e7] text-[#0e1b0e] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Buscar</span>
          </button>
          <button
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7f3e7] text-[#0e1b0e] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            aria-label="Abrir búsqueda"
          >
            <div
              className="text-[#0e1b0e]"
              data-icon="MagnifyingGlass"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
                aria-hidden
              >
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
