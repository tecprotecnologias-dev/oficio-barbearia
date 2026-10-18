import { barbearia } from '@/lib/dados'

// Mostra o nome com a parte final (nomeCurto) em dourado
export default function Logo({ onClick }: { onClick?: () => void }) {
  const { nome, nomeCurto } = barbearia
  const inicio = nome.endsWith(nomeCurto) ? nome.slice(0, -nomeCurto.length).trim() : nome

  return (
    <a href="#inicio" className="logo" onClick={onClick}>
      {inicio} {nome.endsWith(nomeCurto) && <span>{nomeCurto}</span>}
    </a>
  )
}
