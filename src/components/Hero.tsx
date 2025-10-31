export function Hero() {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(https://lh3.googleusercontent.com/aida-public/AB6AXuAW8iICJMlwB665f849Z2-9ZCXPBGAeQTLeKId7lZkXhx8yp1t6b561I0GJz7Degyu8G9aqtMHpPU2pXlk__hNP5hatfIaZbthmbd1nKo8spZHo74fR7zlEsDEXiTM9CTc_UoGHO-ekwyPvItGmK5QloC98lW1XpOOXwa9y5PbhYVYHpowjsGAvRbCLWSUwtSgBIX3YkiQCAifDFeHm6RpORtawKu7DWF8-xcCiPeWgLovf9dQs0rCfcaJ81WvJoUUhi_SoCTeD_Fw)",
          }}
        >
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
              Descubre los Vehículos Híbridos Más Eficientes en Colombia para
              2025
            </h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              Explora las opciones más innovadoras y ecológicas que liderarán el
              mercado automotriz colombiano en el próximo año.
            </h2>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#17cf17] text-[#0e1b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
            <span className="truncate">Leer más</span>
          </button>
        </div>
      </div>
    </div>
  );
}
