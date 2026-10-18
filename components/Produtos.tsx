import Image from 'next/image'
import { fotos, linkWhatsApp, produtos } from '@/lib/dados'
import { IconeWhatsApp } from './Icones'

export default function Produtos() {
  return (
    <section id="produtos" className="secao secao--escura">
      <div className="container produtos">
        <div>
          <p className="sobretitulo">Produtos</p>
          <h2>Leve o cuidado pra casa</h2>
          <p>Produtos selecionados para manter o corte e a barba alinhados até a próxima visita.</p>
          <ul className="produtos__lista">
            {produtos.map((p) => (
              <li key={p.nome}>
                <strong>{p.nome}</strong>
                <span>{p.descricao}</span>
              </li>
            ))}
          </ul>
          <a
            href={linkWhatsApp('Olá! Quero saber dos produtos disponíveis.')}
            target="_blank"
            rel="noopener noreferrer"
            className="botao"
          >
            <IconeWhatsApp /> Consultar produtos
          </a>
        </div>
        <div className="produtos__imagem">
          <Image src={fotos.produtos} alt="Produtos e ferramentas de barbearia" fill sizes="(max-width: 860px) 100vw, 45vw" />
        </div>
      </div>
    </section>
  )
}
