import { barbearia, desenvolvedor, linkWhatsApp } from '@/lib/dados'
import { IconeInstagram, IconeWhatsApp } from './Icones'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__colunas">
        <div className="footer__coluna">
          <strong>Fale com a gente</strong>
          <a href={`mailto:${barbearia.email}`}>{barbearia.email}</a>
          <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer">
            {barbearia.telefoneExibicao}
          </a>
          <div className="footer__redes">
            <a href={barbearia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <IconeInstagram />
            </a>
            <a href={linkWhatsApp()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <IconeWhatsApp />
            </a>
          </div>
        </div>

        <div className="footer__coluna footer__marca">
          <Logo />
          <p>{barbearia.slogan}</p>
        </div>

        <div className="footer__coluna">
          <strong>Navegue</strong>
          <a href="#servicos">Serviços e preços</a>
          <a href="#planos">Planos mensais</a>
          <a href="#agendamento">Agendar horário</a>
          <a href="#contato">Como chegar</a>
        </div>
      </div>
      <div className="footer__direitos">
        <small>
          &copy; {new Date().getFullYear()} {barbearia.nome}. Todos os direitos reservados.
        </small>
        <small className="footer__credito">
          Desenvolvido por{' '}
          <a href={desenvolvedor.site} target="_blank" rel="noopener noreferrer">
            {desenvolvedor.nome}
          </a>
        </small>
      </div>
    </footer>
  )
}
