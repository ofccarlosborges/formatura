import StarField from "./StarField";
import { MdScience, MdRocketLaunch, MdFavorite } from "react-icons/md";

// Componente para renderizar uma imagem decorativa
const DecorativeImage = ({ src, alt, className = "" }) => (
  <div className={`w-32 h-32 rounded-full border-2 border-white overflow-hidden mx-auto my-6 ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
    />
  </div>
);

// Componente para um ponto da história (Story Point)
// O ícone é passado como um componente React (IconComponent)
const StoryPoint = ({ title, children, IconComponent }) => (
  <div className="relative pb-8 sm:pb-12 last:pb-0">
    {/* Linha vertical divisória (apenas para desktop) */}
    <div className="hidden sm:block absolute top-0 left-0 w-px h-full bg-gray-500 transform -translate-x-1/2" />
    
    {/* Marcador de Ícone */}
    <div className="absolute top-0 left-0 w-8 h-8 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2">
      {/* Renderiza o componente de ícone do react-icons */}
      {IconComponent && <IconComponent className="w-5 h-5 text-black" />}
    </div>
    
    <div className="ml-10 sm:ml-12">
      <h3 className="text-xl md:text-2xl text-white font-bold mb-2 text-left">{title}</h3>
      <div className="text-base md:text-lg text-gray-100 font-sans leading-relaxed space-y-4 text-justify">
        {children}
      </div>
    </div>
  </div>
);

export default function StorySection() {
  return (
    <section
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #0D1B2A 100%)",
      }}
    >
      <StarField />

      {/* Imagens decorativas para mobile (aparecem antes e depois do texto) */}
      <div className="md:hidden relative z-10">
        <DecorativeImage src="./images/foto3.jpg" alt="Foto decorativa 1" />
      </div>

      {/* Imagens decorativas para desktop (posicionamento absoluto) */}
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

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-3xl md:text-4xl text-white font-bold font-serif tracking-widest">
              Uma Breve História
            </span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
        </div>

        {/* Estrutura de Storytelling/Linha do Tempo */}
        <div className="relative pl-4 sm:pl-0">
          <StoryPoint title="1. O Início: Bacharelado em Física" IconComponent={MdScience}>
            <p>
              Olá! Eu sou o Carlos, e a minha trajetória científica começou em 2019, no Bacharelado em Física
              pela Universidade Estadual de Feira de Santana (UEFS). Durante a graduação, minha paixão pela Astrofísica
              se consolidou, levando-me à Iniciação Científica (IC) com bolsa FAPESB.
            </p>
            <p>
              Meu foco na IC foi a <b>Caracterização de propriedades físicas de exoplanetas</b>, um trabalho que me
              permitiu mergulhar na pesquisa de ponta e apresentar resultados em eventos importantes como o 
              XXXVIII Encontro de Física do Norte e Nordeste. Essa experiência foi a fundação sólida para o meu próximo passo.
            </p>
          </StoryPoint>

          <StoryPoint title="2. Além da sala de aula: Um breve currículo" IconComponent={MdRocketLaunch}>
            <p>
              Minha jornada não se limitou ao laboratório. Me dediquei também à popularização da ciência,
              trabalhando em projetos de extensão como o <b>Cometa Nordestino</b> e
              participando do <b>Laboratório de Popularização das Ciências Físicas</b>.
              Acredito que a ciência deve ser acessível a todas as pessoas.
            </p>
            <p>
              Além disso, exerci funções de *epresentação discente no
              Diretório Central dos Estudantes (DCE) e no Diretório Acadêmico de Física (DAFÍS),
              atuando como representante em diversas comissões. Essa atuação me ensinou a 
              importância da organização e do impacto social da academia.
            </p>
          </StoryPoint>

          <StoryPoint title="3. O Próximo Passo: Mestrado" IconComponent={MdFavorite}>
            <p>
              Com a graduação concluída, o próximo passo é o ingresso no Mestrado em Astrofísica.
              Esta é a etapa crucial para aprofundar minha pesquisa e contribuir de forma mais
              significativa para a área, dando continuidade ao meu trabalho com exoplanetas.
            </p>
            <p>
            Esse novo inicio envolve não apenas dedicação e pesquisa, mas também custos associados. 
            A sua contribuição representa um apoio valioso para que eu possa seguir adiante com esse sonho e
            continuar me aprimorando como pesquisador.
            Mais do que qualquer ajuda financeira, seu gesto de carinho e incentivo tem um significado imenso para mim.
            </p>
          </StoryPoint>
        </div>
      </div>

      {/* Imagem decorativa para mobile (aparece depois do texto) */}
      <div className="md:hidden relative z-10">
        <DecorativeImage src="./images/foto2.jpg" alt="Foto decorativa 2" />
      </div>
    </section>
  );
}
