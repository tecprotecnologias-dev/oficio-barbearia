import { formatarPreco, linkWhatsApp, servicos } from '@/lib/dados'

export default function Servicos() {
  return (
    <section id="servicos" className="secao secao--escura">
      <div className="container">
        <div className="secao__titulo">
          <p className="sobretitulo">Serviços</p>
          <h2>Tabela de preços</h2>
        </div>
        <div className="servicos">
          {servicos.map((s) => (
            <article key={s.nome} className={`servico ${s.destaque ? 'servico--destaque' : ''}`}>
              {s.destaque && <span className="servico__selo">Mais pedido</span>}
              <div className="servico__topo">
                <h3>{s.nome}</h3>
                <span className="servico__preco">{formatarPreco(s.preco)}</span>
              </div>
              <p>{s.descricao}</p>
              <div className="servico__rodape">
                <span>{s.duracao}</span>
                <a
                  href={linkWhatsApp(`Olá! Quero agendar: ${s.nome}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
