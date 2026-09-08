# Perna Cabeluda — uma experiência digital

Projeto experimental e imersivo para o **Setembro Literário** (apresentação escolar).

A experiência transforma a navegação em narrativa: de "uma história assustadora" a
"uma história sobre memória" — mostrando como a **Perna Cabeluda**, lenda urbana do
Recife nascida nos anos 1970 (jornal, rádio, boca a boca, cordel, carnaval), continua
viva através das tecnologias atuais (cinema, internet, experiências digitais).

> **As tecnologias mudam. As histórias permanecem.**

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
  App.tsx                     — monta as seções na ordem narrativa
  components/
    Entrance.tsx              — 01 · RECIFE 1975, "você conhece essa história?"
    PernaReveal.tsx           — 02–03 · aparição (reveal por scroll) e revelação
    Archive.tsx               — 04 · ARQUIVO 1975 + FATO/RELATO/LENDA/INTERPRETAÇÃO
    Travel.tsx                — 05 · como uma história viaja (cadeia interativa)
    Newspaper.tsx             — 06 · o jornal (dez/1975)
    Radio.tsx                 — 07 · rádio (recriação artística)
    Cordel.tsx                — 08 · cordel original
    Contexto.tsx              — 09 · o que existia por trás da lenda
    Symbol.tsx                — 10 · a perna como símbolo
    Map.tsx                   — 11 · mapa estilizado do Recife
    Timeline.tsx              — 12 · linha do tempo
    Culture.tsx               — 13 · cultura popular
    Cinema.tsx                — 14 · "ela voltou para a tela"
    Verdict.tsx               — 15 · "você acredita?"
    YouAreNow.tsx             — 16 · a história chegou até você
    Finale.tsx                — final · esvaziamento, 1975→2026, a sombra que passa
    Ending.tsx                — título final + FONTES/ARQUIVO
    Legend.tsx                — FATO / RELATO / LENDA / INTERPRETAÇÃO
    Film.tsx                  — grão de filme (canvas procedural, sem assets)
    AudioContext.tsx          — áudio ambiente (Web Audio, só após interação)
    Chrome.tsx                — barra de progresso + botão SOM on/off
  styles/index.css            — design tokens, tipografia, utilitários
```

Assets (`public/art/*.webp`) são ilustrações originais geradas para este projeto;
versos de cordel e composições são originais, sem reproduzir obras protegidas.

## Notas editoriais importantes

- O conteúdo **histórico não prova a existência da criatura**. Distinguimos sempre
  **FATO** (registros), **RELATO**, **LENDA** e **INTERPRETAÇÃO**.
- Não afirmamos que "a Perna foi criada pela ditadura" — apresentamos a relação com o
  clima de medo/censura como **leitura de pesquisadores**.
- Citações e depoimentos de jornalistas/pesquisadores são **parafraseados e atribuídos**
  a partir de cobertura jornalística e acadêmica secundária (listada em FONTES), nunca
  inventados.
- Áudio só inicia após interação do usuário. Tudo respeita `prefers-reduced-motion`.
