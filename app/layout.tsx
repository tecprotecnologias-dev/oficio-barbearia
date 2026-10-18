import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { barbearia } from '@/lib/dados'
import './globals.css'

const titulo = Oswald({ weight: ['500', '600'], subsets: ['latin'], variable: '--fonte-titulo' })
const texto = Inter({ subsets: ['latin'], variable: '--fonte-texto' })

export const metadata: Metadata = {
  title: `${barbearia.nome} | Corte, barba e estilo`,
  description: `${barbearia.nome}: cortes masculinos, barba na navalha, planos mensais e produtos. Agende seu horário pelo WhatsApp.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
