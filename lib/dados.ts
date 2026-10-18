// ==========================================================
// DADOS DA BARBEARIA
// Tudo que aparece no site vem daqui. Troque os valores de
// exemplo (marcados com "EXEMPLO") pelos dados reais do cliente.
// ==========================================================

const foto = (id: string, largura = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${largura}&q=75&auto=format&fit=crop`

export const barbearia = {
  // Nome fictício do modelo de demonstração da TecPro.
  nome: 'Ofício Barbearia',
  nomeCurto: 'Barbearia', // parte do nome que fica dourada no logo
  slogan: 'Tradição na tesoura, estilo no espelho.', // EXEMPLO
  desde: 2018, // ano de abertura. EXEMPLO

  // WhatsApp só com números: 55 + DDD + número. EXEMPLO
  whatsapp: '5521999999999',
  telefoneExibicao: '(21) 99999-9999', // EXEMPLO
  email: 'contato@suabarbearia.com.br', // EXEMPLO

  instagram: 'https://www.instagram.com/', // EXEMPLO
  instagramUsuario: '@suabarbearia', // EXEMPLO

  endereco: 'Rua Exemplo, 123 - Centro', // EXEMPLO
  cidade: 'Rio de Janeiro - RJ', // EXEMPLO

  horarios: [
    { dias: 'Segunda', horas: 'Fechado' }, // EXEMPLO
    { dias: 'Terça a Sexta', horas: '09h às 20h' }, // EXEMPLO
    { dias: 'Sábado', horas: '08h às 18h' }, // EXEMPLO
    { dias: 'Domingo', horas: 'Fechado' }, // EXEMPLO
  ],
}

// Crédito no rodapé. Sem telefone: o contato da TecPro é pelo site.
export const desenvolvedor = {
  nome: 'TecPro Tecnologias',
  site: 'https://tecprotecnologias.com.br',
}

export type Servico = {
  nome: string
  descricao: string
  preco: number
  duracao: string
  destaque?: boolean
}

// Preços de EXEMPLO
export const servicos: Servico[] = [
  { nome: 'Corte', descricao: 'Corte masculino com acabamento na navalha.', preco: 40, duracao: '40 min', destaque: true },
  { nome: 'Barba', descricao: 'Barba modelada com toalha quente e navalha.', preco: 30, duracao: '30 min' },
  { nome: 'Corte + Barba', descricao: 'O combo completo para sair renovado.', preco: 60, duracao: '1h', destaque: true },
  { nome: 'Degradê / Fade', descricao: 'Do zero ao topo, transição limpa.', preco: 45, duracao: '45 min' },
  { nome: 'Pezinho', descricao: 'Acabamento do contorno entre um corte e outro.', preco: 15, duracao: '15 min' },
  { nome: 'Sobrancelha', descricao: 'Limpeza e alinhamento na navalha.', preco: 15, duracao: '10 min' },
  { nome: 'Pigmentação', descricao: 'Disfarça falhas na barba e no cabelo.', preco: 25, duracao: '20 min' },
  { nome: 'Corte Infantil', descricao: 'Até 12 anos, com paciência e cuidado.', preco: 35, duracao: '30 min' },
]

export type Plano = {
  nome: string
  preco: number
  itens: string[]
  destaque?: boolean
}

// Planos mensais de EXEMPLO. Para tirar a seção, deixe a lista vazia: []
export const planos: Plano[] = [
  { nome: 'Corte', preco: 99, itens: ['Cortes ilimitados no mês', 'Agendamento prioritário', 'Válido de terça a quinta'] },
  {
    nome: 'Corte + Barba',
    preco: 149,
    itens: ['Cortes e barbas ilimitados', 'Agendamento prioritário', 'Válido todos os dias', '10% de desconto em produtos'],
    destaque: true,
  },
  { nome: 'Barba', preco: 79, itens: ['Barbas ilimitadas no mês', 'Toalha quente em todas', 'Válido de terça a quinta'] },
]

// Fotos da internet (Unsplash, uso gratuito) - trocar por fotos reais da barbearia.
// Para usar fotos próprias: coloque o arquivo em /public/fotos e use '/fotos/nome.jpg'
export const fotos = {
  hero: foto('1585747860715-2ba37e788b70', 1920),
  sobre: foto('1610475680335-dafab5475150', 900),
  faixa: foto('1519500528352-2d1460418d41', 1920),
  produtos: foto('1621607512214-68297480165e', 900),
}

// Carrossel "Nosso espaço"
export const ambiente = [
  { src: foto('1600948836101-f9ffda59d250', 1000), alt: 'Bancadas com espelhos redondos' },
  { src: foto('1512690459411-b9245aed614b', 1000), alt: 'Cadeira de barbeiro clássica' },
  { src: foto('1633681926022-84c23e8cb2d6', 1000), alt: 'Salão iluminado com espelhos' },
  { src: foto('1560066984-138dadb4c035', 1000), alt: 'Salão com janelas amplas' },
  { src: foto('1585747860715-2ba37e788b70', 1000), alt: 'Cadeiras de barbeiro e parede de tijolos' },
]

export const galeria = [
  { src: foto('1599351431202-1e0f0137899a', 800), alt: 'Acabamento de degradê com navalha' },
  { src: foto('1622296089863-eb7fc530daa8', 800), alt: 'Corte degradê com topete' },
  { src: foto('1532710093739-9470acff878f', 800), alt: 'Barba feita com espuma' },
  { src: foto('1647140655214-e4a2d914971f', 800), alt: 'Corte na tesoura com pente' },
  { src: foto('1493256338651-d82f7acb2b38', 800), alt: 'Acabamento na máquina' },
  { src: foto('1596728325488-58c87691e9af', 800), alt: 'Barba na navalha' },
  { src: foto('1622286342621-4bd786c2447c', 800), alt: 'Corte com textura no topo' },
  { src: foto('1590540179852-2110a54f813a', 800), alt: 'Penteado com pente de madeira' },
]

// Produtos de EXEMPLO
export const produtos = [
  { nome: 'Pomada modeladora', descricao: 'Efeito seco ou brilho, fixação forte.' },
  { nome: 'Óleo para barba', descricao: 'Hidrata, amacia e perfuma.' },
  { nome: 'Balm pós-barba', descricao: 'Acalma a pele depois da navalha.' },
  { nome: 'Shampoo para barba', descricao: 'Limpeza sem ressecar os fios.' },
]

export const linkWhatsApp = (mensagem = ''): string =>
  `https://wa.me/${barbearia.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`

export const formatarPreco = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 0 })
