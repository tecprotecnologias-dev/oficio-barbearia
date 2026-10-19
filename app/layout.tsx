import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { barbearia } from '@/lib/dados'
import './globals.css'

const titulo = Oswald({ weight: ['500', '600'], subsets: ['latin'], variable: '--fonte-titulo' })
const texto = Inter({ subsets: ['latin'], variable: '--fonte-texto' })

const tituloPagina = `${barbearia.nome} | Corte, barba e estilo`
const descricao = `${barbearia.nome}: cortes masculinos, barba na navalha, planos mensais e produtos. Agende seu horário pelo WhatsApp.`

export const metadata: Metadata = {
  metadataBase: new URL('https://barbearia.tecprotecnologias.com.br'),
  title: tituloPagina,
  description: descricao,
  // Imagem que aparece quando o link é compartilhado (WhatsApp, Instagram, Facebook)
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: barbearia.nome,
    title: tituloPagina,
    description: descricao,
    images: [{ url: '/compartilhar.jpg', width: 1200, height: 630, alt: barbearia.nome }],
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  )
}
