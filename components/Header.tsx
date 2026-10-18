'use client'

import { useEffect, useState } from 'react'
import { IconeFechar, IconeMenu } from './Icones'
import Logo from './Logo'

const links = [
  { href: '#sobre', texto: 'Quem somos' },
  { href: '#servicos', texto: 'Serviços' },
  { href: '#espaco', texto: 'Espaço' },
  { href: '#planos', texto: 'Planos' },
  { href: '#galeria', texto: 'Galeria' },
  { href: '#contato', texto: 'Contato' },
]

export default function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 40)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const fechar = () => setAberto(false)

  return (
    <header className={`header ${rolou ? 'header--rolou' : ''}`}>
      <div className="container header__conteudo">
        <Logo onClick={fechar} />

        <nav className={`nav ${aberto ? 'nav--aberto' : ''}`} aria-label="Menu principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={fechar}>
              {l.texto}
            </a>
          ))}
          <a href="#agendamento" className="botao botao--pequeno" onClick={fechar}>
            Agendar
          </a>
        </nav>

        <button
          className="menu-botao"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          {aberto ? <IconeFechar /> : <IconeMenu />}
        </button>
      </div>
    </header>
  )
}
