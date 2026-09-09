const Hero = () => {
  return (
    <section className="px-4 py-4 md:px-8 md:py-6 max-w-6xl mx-auto">
      <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-md flex flex-col justify-between p-6 md:p-10">
        {/* Imagem de fundo com filtro */}
        <img
          src="https://images.unsplash.com/photo-1552196527-bffef41ef674?q=80&w=1326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="imagem de pilates"
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
        />

        {/* Camada opcional leve para destacar o texto se necessário (pode remover se a foto já estiver ideal) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Título */}
        <div className="relative z-10 max-w-lg">
          <h1 className="text-verdec font-black text-4xl md:text-4xl leading-snug ">
            Pilates que respeita a sua jornada e seu ritmo
          </h1>
        </div>

        {/* Botão Fale Conosco */}
        <div className="relative z-10 flex justify-end">
          <a
            href="https://wa.me/5521994232311"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verdec hover:bg-verdec/90 text-branco font-bold px-6 py-3 rounded-full shadow-md transition-all text-lg md:text-2xl md:px-12 "
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
