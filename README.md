# Perna Cabeluda — uma experiência digital

Projeto experimental e imersivo para o **Setembro Literário** (apresentação escolar).

A experiência transforma a navegação em narrativa: de "uma história assustadora" a
"uma história sobre memória" — mostrando como a **Perna Cabeluda**, lenda urbana do
Recife nascida nos anos 1970 (jornal, rádio, boca a boca, cordel, carnaval), continua
viva através das tecnologias atuais (cinema, internet, experiências digitais).

> **As tecnologias mudam. As histórias permanecem.**

> ✂️ **Versão resumida.** O site foi enxugado para **8 seções**, para ficar direto ao
> ponto (antes eram 18). Os meios de 1975 — jornal, rádio, cordel e cultura popular —
> agora aparecem **resumidos em estações clicáveis** dentro da seção
> *Como uma história viaja?*. Saíram: símbolo, mapa, linha do tempo e a seção
> "a história chegou até você". Guia da equipe atualizado em `GUIA_APRESENTACAO.md`.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (scroll-driven storytelling, reveal, parallax)
- Lenis (smooth scrolling)

## Comandos

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # build de produção (tsc + vite)
npm run preview  # serve o build
```

## Estrutura

```
src/
  App.tsx                     — monta as seções na ordem narrativa (8 seções)
  content/index.ts            — ⭐ TODOS OS TEXTOS E DADOS DO SITE (edite aqui!)
  components/                 — só leem os dados de content/ (quase nunca editar)
    Entrance.tsx              — 01 · RECIFE 1975, "você conhece essa história?"
    PernaReveal.tsx           — 02 · a aparição (reveal por scroll)
    Archive.tsx               — 03 · ARQUIVO 1975 + FATO/RELATO/LENDA/INTERPRETAÇÃO
    Travel.tsx                — 04 · como uma história viaja (8 estações clicáveis:
                                     relato, jornal, rádio, cordel, cultura,
                                     cinema, internet, você)
    Contexto.tsx              — 05 · o que existia por trás da lenda
    Cinema.tsx                — 06 · "ela voltou para a tela"
    Verdict.tsx               — 07 · "você acredita?"
    Participants.tsx          — 08 · quem fez esta história acontecer
    Finale.tsx                — final · esvaziamento, 1975→2026, a sombra que passa
    Ending.tsx                — título final + FONTES/ARQUIVO
    Legend.tsx                — FATO / RELATO / LENDA / INTERPRETAÇÃO
    Film.tsx                  — grão de filme (canvas procedural, sem assets)
    AudioContext.tsx          — áudio ambiente (Web Audio, só após interação)
    Chrome.tsx                — barra de progresso + botões SOM e PARTICIPANTES
  styles/index.css            — design tokens, tipografia, utilitários
```

## Tipografia e legibilidade (projetor)

O site foi calibrado para ser lido **de longe, num projetor**:

- **Tamanho-base** em `src/styles/index.css` (`--base-font`): 17px em telas
  pequenas, 18px a partir de 1280px e 19px a partir de 1600px. Como todo o site
  usa `rem`, mudar esse valor escala tudo de uma vez.
- **Fontes servidas localmente** via `@fontsource` (importadas no topo de
  `index.css`) — não dependem do Google Fonts nem de internet no dia.
- **Pesos**: Cormorant Garamond em 500 (o 400 é fino demais em projeção) e IBM Plex Mono em 500.
- **Contraste**: o cinza `stone` passou de `#5C5C50` (2.9:1) para `#A39C86`
  (7.3:1); o vermelho `bloodsoft` de `#A63A2B` para `#C4503F` (4.4:1).
  Nenhum texto fica abaixo de ~0.72rem (≈13–14px).

Se a sala for muito grande ou o projetor fraco, aumente `--base-font` (ex.: 20–21px)
ou use o zoom do navegador (Ctrl e +): o layout foi testado até 1280×720.

**Nada no site depende de internet** durante a apresentação (as fontes são locais e
não há mais mapa online).

Assets (`public/art/*.webp`) são ilustrações originais geradas para este projeto;
versos de cordel e composições são originais, sem reproduzir obras protegidas.

### Como editar o conteúdo (futuro)

Todo o texto, dados, títulos e listas ficam em **`src/content/index.ts`**, organizado
por seção (entrance, reveal, archive, legend, travel, contexto, cinema, verdict,
participants, finale, ending). Os componentes apenas leem essas constantes —
**não é preciso mexer em JSX/CSS** para alterar frases, datas, cartões ou fontes.

- Um texto com vários parágrafos é um *array* de strings.
- `heading: { text, em }` — o trecho `em` aparece destacado em vermelho-escuro.
- `travel.stages` é a fileira de estações da seção 04: cada item tem `label`
  (o botão), `era` ("1970" ou "hoje"), `title` e `body`. Para acrescentar ou
  remover um meio, basta editar essa lista.
- Atualize sempre as fontes em `ending.groups` ao mudar fatos.
- Nunca invente datas, nomes ou citações; em caso de divergência entre fontes,
  apresente a divergência (como em `archive.cards[].tags`).

## Notas editoriais importantes

- O conteúdo **histórico não prova a existência da criatura**. Distinguimos sempre
  **FATO** (registros), **RELATO**, **LENDA** e **INTERPRETAÇÃO**.
- Não afirmamos que "a Perna foi criada pela ditadura" — apresentamos a relação com o
  clima de medo/censura como **leitura de pesquisadores**.
- Citações e depoimentos de jornalistas/pesquisadores são **parafraseados e atribuídos**
  a partir de cobertura jornalística e acadêmica secundária (listada em FONTES), nunca
  inventados.
- Áudio só inicia após interação do usuário. Tudo respeita `prefers-reduced-motion`.
