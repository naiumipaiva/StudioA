import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MarromLogo from '../assets/studioA-marrom.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className=" px-4 sm:px-6 py-4 transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo do Studio */}
        <div className="flex items-center">
          <img
            src={MarromLogo}
            alt="logo-studioA"
            className="h-15 md:h-24 w-auto"
          />
        </div>

        {/* Botão Hambúrguer (Apenas Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-marrome focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? (
              <CloseRoundedIcon sx={{ fontSize: 32 }} />
            ) : (
              <MenuRoundedIcon sx={{ fontSize: 32 }} />
            )}
          </button>
        </div>

        {/* Menu Desktop (Fica normal e sem ícone de menu em telas grandes) */}
        <div className="hidden md:flex items-center gap-8 text-marrome font-bold text-lg">
          <a
            href="#Home"
            className="py-1.5 px-3 hover:text-verdec transition-colors"
          >
            Página Inicial
          </a>
          <a
            href="#FAQ"
            className="py-1.5 px-3 hover:text-verdec transition-colors"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#Contact"
            className="py-1.5 px-3 hover:text-verdec transition-colors"
          >
            Contato
          </a>
        </div>
      </div>

      {/* Menu Mobile Dropdown (Aparece apenas quando clicado no mobile) */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 text-marrome font-medium pb-4 pt-6 border-t border-marrome/10 mt-4">
          <a
            href="#Home"
            onClick={toggleMenu}
            className="py-1 px-2 hover:bg-black/5 rounded transition-colors"
          >
            Página Inicial
          </a>
          <a
            href="#FAQ"
            onClick={toggleMenu}
            className="py-1 px-2 hover:bg-black/5 rounded transition-colors"
          >
            Perguntas Frequentes
          </a>
          <a
            href="#Contact"
            onClick={toggleMenu}
            className="py-1 px-2 hover:bg-black/5 rounded transition-colors"
          >
            Contato
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
