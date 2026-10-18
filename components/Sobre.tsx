import Image from 'next/image'
import { barbearia, fotos } from '@/lib/dados'
import { IconeEstrela, IconeNavalha, IconeTesoura } from './Icones'

const diferenciais = [
  { icone: <IconeTesoura />, titulo: 'Corte na régua', texto: 'Acabamento caprichado, do degradê ao social.' },
  { icone: <IconeNavalha />, titulo: 'Navalha e toalha quente', texto: 'Barba feita do jeito clássico.' },
  { icone: <IconeEstrela />, titulo: 'Atendimento de respeito', texto: 'Horário marcado é horário cumprido.' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      <div className="container sobre">
        <div className="sobre__imagem">
          <Image src={fotos.sobre} alt="Cadeira de barbeiro" fill sizes="(max-width: 860px) 100vw, 45vw" />
          <div className="sobre__selo">
            <strong>{new Date().getFullYear() - barbearia.desde}+</strong>
            <span>anos de casa</span>
          </div>
        </div>
        <div>
          <p className="sobretitulo">Quem somos</p>
          <h2>Mais que um corte, um ritual</h2>
          <p>
            A {barbearia.nome} é o lugar de quem gosta de se cuidar sem complicação. Ambiente confortável, conversa boa
            e profissionais que tratam cada corte e cada barba com atenção aos detalhes.
          </p>
          <p>Seja para o corte do dia a dia ou para aquele evento especial, você sai daqui pronto.</p>
          <ul className="diferenciais">
            {diferenciais.map((d) => (
              <li key={d.titulo}>
                <span className="diferenciais__icone">{d.icone}</span>
                <div>
                  <strong>{d.titulo}</strong>
                  <p>{d.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
