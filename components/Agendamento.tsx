'use client'

import { FormEvent, useState } from 'react'
import { linkWhatsApp, servicos } from '@/lib/dados'
import { IconeWhatsApp } from './Icones'

const horarios = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

const hoje = () => {
  const d = new Date()
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset())
  return d.toISOString().slice(0, 10)
}

export default function Agendamento() {
  const [nome, setNome] = useState('')
  const [servico, setServico] = useState(servicos[0].nome)
  const [data, setData] = useState('')
  const [horario, setHorario] = useState('')
  const [obs, setObs] = useState('')

  const enviar = (e: FormEvent) => {
    e.preventDefault()
    const dataBR = data.split('-').reverse().join('/')
    const mensagem = [
      'Olá! Gostaria de agendar um horário.',
      `Nome: ${nome}`,
      `Serviço: ${servico}`,
      `Data: ${dataBR}`,
      `Horário: ${horario}`,
      obs && `Observação: ${obs}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(linkWhatsApp(mensagem), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="agendamento" className="secao">
      <div className="container agendamento">
        <div>
          <p className="sobretitulo">Agendamento</p>
          <h2>Marque seu horário</h2>
          <p>
            Preencha os dados e envie direto para o nosso WhatsApp. A confirmação do horário é feita por lá.
          </p>
        </div>

        <form className="formulario" onSubmit={enviar}>
          <label>
            Seu nome
            <input value={nome} onChange={(e) => setNome(e.target.value)} required placeholder="Como podemos te chamar?" />
          </label>
          <label>
            Serviço
            <select value={servico} onChange={(e) => setServico(e.target.value)}>
              {servicos.map((s) => (
                <option key={s.nome}>{s.nome}</option>
              ))}
            </select>
          </label>
          <div className="formulario__linha">
            <label>
              Data
              <input type="date" value={data} min={hoje()} onChange={(e) => setData(e.target.value)} required />
            </label>
            <label>
              Horário
              <select value={horario} onChange={(e) => setHorario(e.target.value)} required>
                <option value="" disabled>
                  Escolha
                </option>
                {horarios.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Observação (opcional)
            <textarea value={obs} onChange={(e) => setObs(e.target.value)} rows={3} placeholder="Ex.: degradê baixo, barba só no contorno" />
          </label>
          <button type="submit" className="botao botao--largo">
            <IconeWhatsApp /> Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
