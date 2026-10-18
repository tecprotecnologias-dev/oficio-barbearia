# Site de Barbearia

Site de uma página em **Next.js** (App Router + TypeScript), sem banco de dados e sem custo.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Onde editar

| O que                                                | Arquivo                |
| ---------------------------------------------------- | ---------------------- |
| Nome, WhatsApp, e-mail, endereço, horários, Instagram | `lib/dados.ts`        |
| Planos mensais (deixe `[]` para esconder a seção)    | `lib/dados.ts`        |
| Serviços e preços                                    | `lib/dados.ts`         |
| Produtos                                             | `lib/dados.ts`         |
| Fotos (capa, sobre, faixa, espaço, galeria, produtos) | `lib/dados.ts`         |
| Cores do site                                        | `app/globals.css` (topo, `:root`) |
| Textos da seção "Sobre"                              | `components/Sobre.tsx` |

Os valores marcados com `// EXEMPLO` em `lib/dados.ts` precisam ser trocados pelos dados reais.

### Trocar as fotos

As fotos atuais são do Unsplash (uso gratuito), só para preencher.

1. Coloque as fotos reais em `public/fotos/` (ex.: `public/fotos/corte1.jpg`).
2. Em `lib/dados.ts`, troque o endereço da foto por `'/fotos/corte1.jpg'`.

### WhatsApp

Em `lib/dados.ts`, campo `whatsapp`: só números, com 55 + DDD. Ex.: `5521987654321`.
O formulário de agendamento monta a mensagem e abre o WhatsApp com tudo preenchido.

## Publicar de graça (Vercel)

1. Suba esta pasta para um repositório no GitHub.
2. Entre em https://vercel.com com a conta do GitHub.
3. "Add New Project", escolha o repositório e clique em "Deploy".
4. Cada `git push` atualiza o site sozinho.

Domínio próprio (ex.: suabarbearia.com.br) é opcional e é o único item pago (cerca de R$ 40/ano no registro.br).
