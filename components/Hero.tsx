import Image from 'next/image'
import { barbearia, fotos } from '@/lib/dados'

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <Image src={fotos.hero} alt="Interior da barbearia" fill priority sizes="100vw" className="hero__imagem" />
      <div className="hero__sombra" />
      <div className="container hero__conteudo">
        <p className="sobretitulo">Desde {barbearia.desde}</p>
        <h1>
          Corte de respeito,
          <br />
          <span>atendimento de verdade</span>
        </h1>
        <p className="hero__slogan">{barbearia.slogan}</p>
        <div className="hero__botoes">
          <a href="#agendamento" className="botao">
            Agendar agora
          </a>
          <a href="#servicos" className="botao botao--contorno">
            Ver serviços
          </a>
        </div>
      </div>
      <a href="#sobre" className="hero__rolar" aria-label="Rolar para baixo">
        <span />
      </a>
    </section>
  )
}
