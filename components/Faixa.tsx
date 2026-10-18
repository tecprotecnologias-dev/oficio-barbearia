import Image from 'next/image'
import { fotos, linkWhatsApp } from '@/lib/dados'
import { IconeWhatsApp } from './Icones'

// Faixa com foto de fundo e chamada para o WhatsApp
export default function Faixa() {
  return (
    <section className="faixa">
      <Image src={fotos.faixa} alt="" fill sizes="100vw" className="faixa__imagem" />
      <div className="faixa__sombra" />
      <div className="container faixa__conteudo">
        <h2>Seu horário, do seu jeito</h2>
        <p>Chama no WhatsApp e garanta seu horário em poucos segundos. Sem fila e sem espera.</p>
        <a
          href={linkWhatsApp('Olá! Quero agendar um horário.')}
          target="_blank"
          rel="noopener noreferrer"
          className="botao"
        >
          <IconeWhatsApp /> Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
