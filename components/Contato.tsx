import { barbearia, linkWhatsApp } from '@/lib/dados'
import { IconeInstagram, IconeLocal, IconeRelogio, IconeWhatsApp } from './Icones'

export default function Contato() {
  const enderecoCompleto = `${barbearia.endereco}, ${barbearia.cidade}`
  const mapa = `https://www.google.com/maps?q=${encodeURIComponent(enderecoCompleto)}&output=embed`

  return (
    <section id="contato" className="secao secao--escura">
      <div className="container">
        <div className="secao__titulo">
          <p className="sobretitulo">Contato</p>
          <h2>Onde estamos</h2>
        </div>

        <div className="contato">
          <div className="contato__info">
            <div className="contato__bloco">
              <IconeLocal />
              <div>
                <strong>Endereço</strong>
                <p>{barbearia.endereco}</p>
                <p>{barbearia.cidade}</p>
              </div>
            </div>

            <div className="contato__bloco">
              <IconeRelogio />
              <div>
                <strong>Horário de funcionamento</strong>
                <ul className="horarios">
                  {barbearia.horarios.map((h) => (
                    <li key={h.dias}>
                      <span>{h.dias}</span>
                      <span>{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contato__bloco">
              <IconeWhatsApp />
              <div>
                <strong>WhatsApp</strong>
                <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
                  {barbearia.telefoneExibicao}
                </a>
              </div>
            </div>

            <div className="contato__bloco">
              <IconeInstagram />
              <div>
                <strong>Instagram</strong>
                <a href={barbearia.instagram} target="_blank" rel="noopener noreferrer">
                  {barbearia.instagramUsuario}
                </a>
              </div>
            </div>
          </div>

          <iframe
            className="contato__mapa"
            src={mapa}
            title={`Mapa: ${enderecoCompleto}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
