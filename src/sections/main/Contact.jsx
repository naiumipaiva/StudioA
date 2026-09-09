const Contact = () => {
  return (
    <section className=" px-6 py-12 md:py-16">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-marrome font-black text-2xl md:text-4xl mb-4">
          Pronta(o) para cuidar da sua saúde e bem-estar?
        </h2>

        <p className="text-preto font-medium text-sm md:text-base leading-relaxed mb-8 max-w-xl">
          Venha conhecer o Studio A e descubra como o Pilates pode transformar
          sua rotina com acolhimento, segurança e resultados reais.
        </p>

        <a
          href="https://wa.me/5521994232311"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-verdec hover:bg-verdec/90 text-branco font-bold px-8 py-4 rounded-full shadow-md transition-all text-sm md:text-base"
        >
          Fale conosco no WhatsApp e agende sua aula
        </a>
      </div>
    </section>
  )
}

export default Contact
