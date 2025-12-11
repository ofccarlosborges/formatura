import StarField from "./StarField";

export default function HeroSection() {
  return (
    <section
      className="w-full star-field relative py-6 md:py-12"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #1a2f47 100%)",
        minHeight: "auto",
      }}
    >
      <StarField />

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-full max-w-xs mb-4 md:mb-6">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-lg blur-2xl opacity-50"
                style={{ backgroundColor: "#0D1B2A" }}
              />
              <img
                src="./client/src/foto.jpeg"
                alt="Placeholder para sua foto de formatura"
                className="w-full h-auto rounded-lg object-cover relative z-10 border-2 border-white"
              />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            O Próximo Capítulo:
          </h1>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 md:mb-5 leading-tight">
            Mestrado
          </h1>

          <p className="text-base md:text-lg text-gray-200 font-sans max-w-md">
            Comemore este ciclo e apoie o meu sonho da Pós-Graduação.
          </p>
        </div>
      </div>
    </section>
  );
}
