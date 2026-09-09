import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import BrancoLogo from '../assets/studioA-branco.svg'

const Footer = () => {
  return (
    <footer className="bg-marrome text-branco px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Coluna 1: Logo e Navegação */}
        <div className="flex flex-col">
          {/* Logo */}
          <div className="mb-8">
            <img src={BrancoLogo} alt="logo-studioA" className="h-12 w-auto" />
          </div>

          {/* Navegação */}
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-3 pb-2 border-b border-branco/20">
              Navegação
            </h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-6 pt-2 font-medium">
              <a
                href="#Home"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Página Inicial
              </a>
              <a
                href="#Gallery"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Galeria de Fotos
              </a>
              <a
                href="#Key"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Diferenciais
              </a>
              <a
                href="#Location"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Mapa
              </a>
              <a
                href="#Reviews"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Depoimentos
              </a>
              <a
                href="#Contact"
                className="text-sm md:text-base hover:opacity-80 transition-opacity"
              >
                Contato
              </a>
              <a
                href="#FAQ"
                className="text-sm md:text-base hover:opacity-80 transition-opacity col-span-2"
              >
                Perguntas Frequentes
              </a>
            </div>
          </div>
        </div>

        {/* Coluna 2: Redes Sociais */}
        <div className="flex flex-col pt-0 md:pt-20">
          <div className="w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-6 pb-2 border-b border-branco/20">
              Redes Sociais
            </h3>
            <div className="flex items-center gap-6 pt-2 ">
              <a
                href="https://wa.me/5521994232311"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-branco/40 flex items-center justify-center hover:bg-branco/10 transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon fontSize="medium" />
              </a>
              <a
                href="https://instagram.com/_studioapilates"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-branco/40 flex items-center justify-center hover:bg-branco/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon fontSize="medium" />
              </a>
              <a
                href="https://www.facebook.com/1536967186587071?ref=PROFILE_EDIT_xav_ig_profile_page_web"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-branco/40 flex items-center justify-center hover:bg-branco/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="medium" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
