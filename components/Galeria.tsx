'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { barbearia, galeria } from '@/lib/dados'
import { IconeFechar, IconeInstagram, IconeSeta } from './Icones'

export default function Galeria() {
  const [atual, setAtual] = useState<number | null>(null)

  const fechar = useCallback(() => setAtual(null), [])
  const mover = useCallback(
    (passo: number) => setAtual((i) => (i === null ? i : (i + passo + galeria.length) % galeria.length)),
    []
  )

  useEffect(() => {
    if (atual === null) return
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', aoTeclar)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', aoTeclar)
    }
  }, [atual, fechar, mover])

  return (
    <section id="galeria" className="secao">
      <div className="container">
        <div className="secao__titulo">
          <p className="sobretitulo">Galeria</p>
          <h2>Trabalhos da casa</h2>
        </div>

        <div className="galeria">
          {galeria.map((f, i) => (
            <button key={f.src} className="galeria__item" onClick={() => setAtual(i)} aria-label={`Ampliar: ${f.alt}`}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 600px) 50vw, 25vw" />
            </button>
          ))}
        </div>

        <div className="centro">
          <a href={barbearia.instagram} target="_blank" rel="noopener noreferrer" className="botao botao--contorno">
            <IconeInstagram /> Ver mais no Instagram
          </a>
        </div>
      </div>

      {atual !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={galeria[atual].alt} onClick={fechar}>
          <button className="lightbox__fechar" onClick={fechar} aria-label="Fechar">
            <IconeFechar />
          </button>
          <button
            className="lightbox__seta lightbox__seta--esq"
            onClick={(e) => {
              e.stopPropagation()
              mover(-1)
            }}
            aria-label="Foto anterior"
          >
            <IconeSeta direcao="esquerda" />
          </button>
          <div className="lightbox__imagem" onClick={(e) => e.stopPropagation()}>
            <Image src={galeria[atual].src} alt={galeria[atual].alt} fill sizes="90vw" />
          </div>
          <button
            className="lightbox__seta lightbox__seta--dir"
            onClick={(e) => {
              e.stopPropagation()
              mover(1)
            }}
            aria-label="Próxima foto"
          >
            <IconeSeta />
          </button>
        </div>
      )}
    </section>
  )
}
