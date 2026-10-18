'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ambiente } from '@/lib/dados'
import { IconeSeta } from './Icones'

// Carrossel de fotos do ambiente: passa sozinho a cada 5s e pausa com o mouse em cima
export default function Espaco() {
  const [atual, setAtual] = useState(0)
  const [pausado, setPausado] = useState(false)
  const total = ambiente.length

  const ir = (i: number) => setAtual((i + total) % total)

  useEffect(() => {
    if (pausado) return
    const t = setInterval(() => setAtual((i) => (i + 1) % total), 5000)
    return () => clearInterval(t)
  }, [pausado, total])

  return (
    <section id="espaco" className="secao espaco">
      <div className="container secao__titulo">
        <p className="sobretitulo">Nosso espaço</p>
        <h2>Estilo, conforto e tradição</h2>
        <p>Um ambiente pensado para você relaxar enquanto cuida do visual.</p>
      </div>

      <div className="carrossel" onMouseEnter={() => setPausado(true)} onMouseLeave={() => setPausado(false)}>
        <div className="carrossel__trilho" style={{ transform: `translateX(calc(-${atual} * var(--slide)))` }}>
          {ambiente.map((f, i) => (
            <div key={f.src} className="carrossel__slide" aria-hidden={i !== atual}>
              <Image src={f.src} alt={f.alt} fill sizes="(max-width: 860px) 100vw, 34vw" />
            </div>
          ))}
        </div>
        <button className="carrossel__seta carrossel__seta--esq" onClick={() => ir(atual - 1)} aria-label="Foto anterior">
          <IconeSeta direcao="esquerda" />
        </button>
        <button className="carrossel__seta carrossel__seta--dir" onClick={() => ir(atual + 1)} aria-label="Próxima foto">
          <IconeSeta />
        </button>
      </div>

      <div className="carrossel__pontos">
        {ambiente.map((f, i) => (
          <button
            key={f.src}
            className={i === atual ? 'ativo' : ''}
            onClick={() => ir(i)}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>

      <div className="centro">
        <a href="#agendamento" className="botao">
          Agendar agora
        </a>
      </div>
    </section>
  )
}
