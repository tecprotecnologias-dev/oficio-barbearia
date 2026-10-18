import { linkWhatsApp } from '@/lib/dados'
import { IconeWhatsApp } from './Icones'

export default function WhatsAppFlutuante() {
  return (
    <a
      href={linkWhatsApp('Olá! Vim pelo site e quero agendar um horário.')}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-flutuante"
      aria-label="Falar no WhatsApp"
    >
      <IconeWhatsApp tamanho={30} />
    </a>
  )
}
