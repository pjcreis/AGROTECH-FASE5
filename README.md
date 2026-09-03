# Sistema Orquestrador de Micro-Fazendas Verticais (React)

Versão da Fase 5, reconstruída com React + Vite a partir do projeto da Fase 4.

## Como executar

Requisito: ter o Node.js instalado.

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

   ```
   npm install
   ```

3. Rode o servidor de desenvolvimento:

   ```
   npm run dev
   ```

4. Abra o endereço que aparecer no terminal (por padrão http://localhost:5173).

Para gerar a versão de produção (pasta `dist`), use `npm run build`.

## Estrutura

- `index.html` — arquivo base do Vite, com a `<div id="root">`.
- `src/main.jsx` — renderiza o componente `App` dentro da `div root`.
- `src/App.jsx` — componente principal, que reúne os demais.
- `src/components/` — componentes da aplicação:
  - `Navbar.jsx` e `Footer.jsx` — reutilizados em toda a aplicação.
  - `Home.jsx`, `Sistema.jsx`, `Guia.jsx`, `Painel.jsx`, `Contato.jsx` — as páginas.
- `src/css/estilo.css` — estilos do projeto (CSS externo).
- `src/js/` — lógica de interação de cada página (navegação, formulário, painel e guia).

## Páginas

- **Home** — apresentação do sistema.
- **O Sistema** — funcionalidades e público.
- **Guia de Culturas** — nova funcionalidade da Fase 5. Catálogo de culturas com
  busca por nome e detalhes (ciclo, sol, água, dificuldade e dica).
- **Painel** — registro de plantios, simulação de dias, colheita e histórico.
- **Fale Conosco** — formulário com validações.
