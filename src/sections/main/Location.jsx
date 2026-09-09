const Location = () => {
  return (
    <section className=" px-6 py-12 md:py-16">
      <div className="max-w-4xl mx-auto flex flex-col ">
        <h2 className="text-marrome font-black text-2xl md:text-4xl mb-8">
          Visite o Studio A
        </h2>

        {/* Mapa incorporado via Iframe do Google Maps */}
        <div className="w-full h-72 sm:h-96 rounded-3xl overflow-hidden shadow-md mb-8 border border-marrome/10">
          <iframe
            title="Localização Studio A"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.312948624192!2d-43.0560205!3d-22.8997232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x998414578b97d1%3A0x6b825db7df6f5d8!2sR.%20Dr.%20Feliciano%20Sodr%C3%A9%2C%2078%20-%20Sala%201504%20-%20Centro%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024440-440!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="text-preto text-sm md:text-base leading-relaxed mb-3 max-w-xl font-medium">
          Rua Dr. Feliciano Sodré, nº 78 - Sl 1504 - Centro, São Gonçalo - RJ,
          24440-440
        </p>

        <p className="text-marrome font-bold text-base md:text-lg">
          (21) 99423-2311
        </p>
      </div>
    </section>
  )
}

export default Location
