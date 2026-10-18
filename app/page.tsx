import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sobre from '@/components/Sobre'
import Servicos from '@/components/Servicos'
import Espaco from '@/components/Espaco'
import Planos from '@/components/Planos'
import Faixa from '@/components/Faixa'
import Galeria from '@/components/Galeria'
import Produtos from '@/components/Produtos'
import Agendamento from '@/components/Agendamento'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsAppFlutuante from '@/components/WhatsAppFlutuante'
import AvisoDemo from '@/components/AvisoDemo'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Espaco />
        <Planos />
        <Faixa />
        <Galeria />
        <Produtos />
        <Agendamento />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFlutuante />
      <AvisoDemo />
    </>
  )
}
