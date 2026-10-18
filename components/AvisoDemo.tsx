'use client'

import { useEffect, useState } from 'react'
import { desenvolvedor } from '@/lib/dados'

// Esta é uma demonstração: em vez de abrir o WhatsApp ou o e-mail de exemplo,
// os botões de contato mostram este aviso com o link para a TecPro.
export const EVENTO_AVISO_DEMO = 'aviso-demo'

export const abrirAvisoDemo = () => window.dispatchEvent(new Event(EVENTO_AVISO_DEMO))

export default function AvisoDemo() {
  const [aberto, setAberto] = useState(false)

  useEffect(() => {
    const abrir = () => setAberto(true)
    // Intercepta qualquer link de WhatsApp ou e-mail da página
    const aoClicar = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a')
      if (!link) return
      const href = link.getAttribute('href') ?? ''
      if (href.startsWith('https://wa.me/') || href.startsWith('mailto:')) {
        e.preventDefault()
        abrir()
      }
    }
    const aoTeclar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false)

    window.addEventListener(EVENTO_AVISO_DEMO, abrir)
    document.addEventListener('click', aoClicar, true)
    document.addEventListener('keydown', aoTeclar)
    return () => {
      window.removeEventListener(EVENTO_AVISO_DEMO, abrir)
      document.removeEventListener('click', aoClicar, true)
      document.removeEventListener('keydown', aoTeclar)
    }
  }, [])

  if (!aberto) return null

  return (
    <div className="aviso-demo" role="dialog" aria-modal="true" aria-labelledby="aviso-demo-titulo" onClick={() => setAberto(false)}>
      <div className="aviso-demo__caixa" onClick={(e) => e.stopPropagation()}>
        <p className="sobretitulo">Site de demonstração</p>
        <h2 id="aviso-demo-titulo">Gostou deste site?</h2>
        <p>
          A Ofício Barbearia é um modelo criado pela {desenvolvedor.nome}. No site da sua barbearia, este botão abre
          o seu WhatsApp e o cliente agenda direto com você.
        </p>
        <div className="aviso-demo__botoes">
          <a href={`${desenvolvedor.site}/modelos/barbearia/`} target="_blank" rel="noopener" className="botao">
            Quero um site assim
          </a>
          <button type="button" className="botao botao--contorno" onClick={() => setAberto(false)}>
            Continuar vendo
          </button>
        </div>
      </div>
    </div>
  )
}
