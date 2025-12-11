import { useState } from "react";

export default function PixSection() {
  const [copied, setCopied] = useState(false);
  const pixKey = "00020126580014BR.GOV.BCB.PIX0136a7ddfaaa-f1a2-4df0-bc89-fa2e60ad650d5204000053039865802BR5925Carlos Leon de Jesus Borg6006FSA-BA62070503***63041DC3";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Erro ao copiar chave PIX:", error);
    }
  };

  return (
    <section
      className="w-full py-6 md:py-12 relative"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-2">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <circle cx="100" cy="100" r="70" fill="none" stroke="#0D1B2A" />
          <circle cx="1000" cy="400" r="120" fill="none" stroke="#0D1B2A" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-2xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-black mb-2 md:mb-4">
            Presenteie o Meu Futuro via PIX
          </h2>

          <p className="text-sm md:text-lg text-gray-700 font-sans mb-4 md:mb-6">
            Escaneie o QR Code ou copie a chave PIX. Qualquer valor é bem-vindo!
          </p>

          <div className="w-full mb-4 md:mb-6 flex justify-center">
            <div className="w-40 md:w-48 relative">
              <div
                className="border-4 rounded-lg flex items-center justify-center text-center p-1 relative"
                style={{
                  borderColor: "#0D1B2A",
                  backgroundColor: "#f0f4f8",
                  boxShadow: "0 10px 30px rgba(13, 27, 42, 0.15)",
                  aspectRatio: "1 / 1",
                }}
              >
                <div className="absolute -inset-1 border border-black/5 rounded-lg" />
                <div className="flex flex-col items-center gap-2 md:gap-3 relative z-10">
                <img
                  src="./client/src/pix.png"
                  alt="Placeholder para sua foto de formatura"
                  className="w-full h-full"
                />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="mb-3 md:mb-4">
              <label className="block text-xs md:text-sm font-medium text-black mb-2 text-left font-serif">
                PIX Copia e Cola
              </label>
              <input
                type="text"
                readOnly
                value={pixKey}
                className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg bg-white text-black text-xs md:text-base font-sans"
              />
            </div>

            <button
              onClick={handleCopy}
              className="w-full px-4 py-2 md:px-6 md:py-3 bg-black text-white font-sans font-medium text-sm md:text-base rounded-lg transition-all duration-200 hover:bg-gray-900 active:scale-95 border-2 border-black"
            >
              {copied ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Copiado!
                </span>
              ) : (
                "Copiar Chave"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
