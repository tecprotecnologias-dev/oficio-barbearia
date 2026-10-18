import { formatarPreco, linkWhatsApp, planos } from '@/lib/dados'

export default function Planos() {
  if (planos.length === 0) return null

  return (
    <section id="planos" className="secao secao--escura">
      <div className="container">
        <div className="secao__titulo">
          <p className="sobretitulo">Clube de assinatura</p>
          <h2>Planos mensais</h2>
          <p>Pague uma vez por mês e venha quantas vezes quiser.</p>
        </div>

        <div className="planos">
          {planos.map((p) => (
            <article key={p.nome} className={`plano ${p.destaque ? 'plano--destaque' : ''}`}>
              {p.destaque && <span className="servico__selo">Mais escolhido</span>}
              <h3>{p.nome}</h3>
              <p className="plano__preco">
                {formatarPreco(p.preco)}
                <span>/mês</span>
              </p>
              <ul>
                {p.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a
                href={linkWhatsApp(`Olá! Tenho interesse no plano mensal ${p.nome}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`botao botao--largo ${p.destaque ? '' : 'botao--contorno'}`}
              >
                Quero este plano
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
