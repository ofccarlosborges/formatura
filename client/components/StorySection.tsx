import StarField from "./StarField";

export default function StorySection() {
  return (
    <section
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0D1B2A 100%)",
      }}
    >
      <StarField />

      <div className="absolute inset-0 opacity-100">
        <div className="hidden md:flex absolute top-10 right-20 w-40 h-40 rounded-full border-2 border-white overflow-hidden">
          <img
            src="./images/foto3.jpg"
            alt="Foto decorativa 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:flex absolute bottom-20 left-20 w-40 h-40 rounded-full border-2 border-white overflow-hidden">
          <img
            src="./images/foto2.jpg"
            alt="Foto decorativa 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-3xl md:text-4xl text-white font-bold font-serif tracking-widest">
              Minha Jornada
            </span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <p className="text-base md:text-lg text-gray-100 font-sans leading-relaxed">
          Oi, eu sou o Carlos! 
          Em 2019 iniciei minha graduação em Bacharelado em Física pela UEFS e felizmente essa etapa da minha vida chegou ao fim e me formei. Agora, inicio uma nova etapa da minha trajetória acadêmica: o ingresso no Mestrado em Astrofísica, área pela qual sou profundamente apaixonado. Este próximo passo envolve não apenas dedicação e pesquisa, mas também custos associados a matrícula, materiais de estudo e atividades científicas que são essenciais para o desenvolvimento do trabalho. A sua contribuição representa um apoio valioso para que eu possa seguir adiante com esse sonho e continuar me aprimorando como pesquisador. Mais do que qualquer ajuda financeira, o seu gesto de carinho e incentivo tem um significado imenso para mim.</p>
        </div>
      </div>
    </section>
  );
}
