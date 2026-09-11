/**
 * ============================================================================
 *  PERNA CABELUDA — CONTEÚDO DO SITE  (versão enxuta)
 * ============================================================================
 *  Todo o texto e os dados exibidos no site vivem NESTE arquivo. Para mudar
 *  uma informação, você edita aqui — os componentes apenas leem estes dados.
 *
 *  O site foi resumido para 8 seções (ver src/App.tsx):
 *    01 entrada · aparição · 03 arquivo 1975 · 04 como uma história viaja ·
 *    05 contexto · 06 cinema · 07 você acredita? · 08 equipe · final/fontes
 *  As seções que saíram (jornal, rádio, cordel e cultura) seguem contadas,
 *  resumidas, dentro de "Como uma história viaja?" (travel.stages).
 *
 *  Dicas rápidas:
 *   - Um texto quebra em vários parágrafos = array de strings ["p1", "p2"].
 *   - "tags" são rótulos pequenos no alto de um cartão (ex.: FATO, RELATO).
 *   - Nunca invente datas, nomes ou citações. Quando houver divergência entre
 *     fontes, apresente a divergência.
 * ============================================================================
 */

export type Em = { text: string; em?: string }; // "em" = trecho destacado

export type SourceItem = { t: string; d: string; u?: string };
export type SourceGroup = { h: string; note: string; items: SourceItem[] };

/** ============================ METADADOS ============================ */
export const meta = {
  documentTitle: "Perna Cabeluda — Uma história que Recife nunca conseguiu esquecer",
  browserTab: "Perna Cabeluda · Recife",
  /** Frase central. Cada item vira uma linha no encerramento. */
  conceptLines: ["As tecnologias mudam.", "As histórias permanecem."],
  footerLine: "recife · pernambuco · 1975 → 2026",
  cornerLabel: "Perna Cabeluda · Recife",
};

/** ============================ 01 · ENTRADA ============================ */
export const entrance = {
  preKicker: "uma lenda urbana do Recife",
  city: "RECIFE",
  year: "1975",
  question: "Você conhece essa história?",
  scrollHint: "role para continuar",
};

/** ===================== 02 · APARIÇÃO ===================== */
export const reveal = {
  cornerLeft: "Recife — 1975",
  chapterTag: "II · a aparição",
  cornerRight: "dezembro · 1975",
  gutter: "— dizem que a viram de noite —",
  scrollHint: "o rolar revela",
  /** Fragmentos curtos que aparecem e somem com o scroll. */
  fragments: [
    { text: "Disseram que ela existia." },
    { text: "Uma perna. Sem corpo." },
    { text: "Sem rosto. Sem explicação." },
    { text: "ELA NÃO TINHA CORPO.", big: true },
    { text: "Mas tinha uma história." },
  ],
};

/** ===================== 03 · ARQUIVO 1975 ===================== */
export const archive = {
  heading: { text: "ARQUIVO 1975" },
  lead: [
    "Quando uma história impossível ganhou as páginas do Recife. Aqui separamos o que foi registrado do que foi apenas dito.",
  ],
  cards: [
    {
      id: "ocorrencia",
      label: "O primeiro registro",
      heading: "Uma “perna fantasma” em Tiúma",
      body: "Entre 10 e 13 de dezembro de 1975, o Diário de Pernambuco publicou notas, sem assinatura, sobre uma suposta aparição na casa de José Luís Borges e do filho Wanderley, em Tiúma, em São Lourenço da Mata, Região Metropolitana do Recife.",
      tags: ["FATO", "10–13 dez 1975", "Diário de Pernambuco"],
    },
    {
      id: "nome",
      label: "O nome",
      heading: "“Perna Fantasma” → “Perna Cabeluda”",
      body: "Naquele dezembro a imprensa chamava a aparição de “perna fantasma”. O nome “Perna Cabeluda” consolidou-se entre janeiro e fevereiro de 1976, na crônica de Paulo Fernando Craveiro (21/01/1976) e no texto ficcional de Raimundo Carrero, “Perna Cabeluda chega em Olinda” (01/02/1976).",
      tags: ["FATO", "jan–fev 1976", "imprensa"],
    },
    {
      id: "origem",
      label: "Quem criou?",
      heading: "Uma autoria disputada",
      body: "Não há consenso sobre a origem: o radialista Jota Ferreira e o escritor Raimundo Carrero são associados a momentos diferentes da criação e da popularização, e há dúvida sobre a ordem exata entre o rádio e os textos do jornal. Como não há gravação, parte da história chegou até nós pela memória dos envolvidos.",
      tags: ["DIVERGÊNCIA", "1975–1976", "sem consenso"],
    },
  ],
  note: "A perna fantasma de Tiúma aparece na imprensa em dezembro de 1975 — o primeiro registro jornalístico conhecido da lenda. Não como prova de que a criatura existiu, e sim como prova de que a história já circulava.",
  callout:
    "Dizem que famílias de São Lourenço da Mata teriam chamado o padre e procurado médiuns; o pároco, padre Ludugero, teria se recusado a se envolver. Não há como confirmar — é relato, registrado na própria imprensa da época.",
  calloutTag: "relato",
};

/** Chaves editoriais FATO / RELATO / LENDA / INTERPRETAÇÃO */
export const legend = {
  heading: "Quatro chaves de leitura",
  items: [
    {
      k: "FATO",
      d: "A existência de registros — matérias de jornal, crônicas, cordéis e pesquisas que documentam a lenda e sua época.",
    },
    {
      k: "RELATO",
      d: "Histórias atribuídas a moradores e testemunhas — o que “dizem que aconteceu”, sem verificação possível.",
    },
    {
      k: "LENDA",
      d: "A criatura em si: uma perna sem corpo que dava rasteiras. Apresentada aqui como imaginário, não como realidade.",
    },
    {
      k: "INTERPRETAÇÃO",
      d: "Leituras acadêmicas e culturais sobre o que a lenda pode ter significado — hipóteses, não provas.",
    },
  ],
};

/** ===================== 04 · COMO UMA HISTÓRIA VIAJA ===================== */
export const travel = {
  heading: { text: "COMO UMA HISTÓRIA VIAJA?" },
  lead: "Toque em cada estação do caminho — do quintal de Tiúma até esta tela — e veja por quais meios a Perna passou.",
  legendOld: "os meios dos anos 1970",
  legendToday: "os meios de hoje",
  stages: [
    {
      id: "relato",
      label: "Relato",
      era: "1970",
      glyph: "⟦",
      title: "Uma voz numa noite",
      body: "Alguém diz que viu; outro escuta, duvida e repete. Antes de qualquer jornal ou tela, a história já existe — na boca, no medo, no desejo de contar.",
    },
    {
      id: "jornal",
      label: "Jornal",
      era: "1970",
      glyph: "§",
      title: "A página que registra",
      body: "Em dezembro de 1975 o Diário de Pernambuco estampa “Perna fantasma surge em moradia de Tiúma” (10/12) — e três dias depois, “Perna fantasma é invenção do povo”. O papel transforma um rumor local num caso discutido, ainda que nunca provado.",
    },
    {
      id: "radio",
      label: "Rádio",
      era: "1970",
      glyph: "≈",
      title: "A voz que alcança milhares",
      body: "Programas e plantões jornalísticos — associados ao radialista Jota Ferreira e ao apresentador Geraldo Freire — levaram o caso para além do bairro. Nenhuma gravação da época sobreviveu: o que ficou foram relatos e memória.",
    },
    {
      id: "cordel",
      label: "Cordel",
      era: "1970",
      glyph: "❧",
      title: "O verso que vira impresso",
      body: "Logo depois do caso, a lenda entrou em folhetos de cordel, como os do poeta José Soares (“A Perna Cabeluda de Tiúma e São Lourenço”). Impressa, a história já não depende de quem a conta — depende de quem a lê.",
    },
    {
      id: "cultura",
      label: "Cultura popular",
      era: "1970",
      glyph: "♪",
      title: "Do medo à folia",
      body: "O pavor vira “grea” — brincadeira. Já em 1976 a perna aparece em marchinhas, troças e fantasias de carnaval. Assustar deixa de ser a única função; divertir também.",
    },
    {
      id: "cinema",
      label: "Cinema",
      era: "hoje",
      glyph: "▣",
      title: "A lenda volta à tela",
      body: "Em 2025, o filme O Agente Secreto, de Kleber Mendonça Filho, recria a Perna Cabeluda num Recife da ditadura. Meio século depois, o cinema é mais um meio que mantém a história viva.",
    },
    {
      id: "internet",
      label: "Internet",
      era: "hoje",
      glyph: "◎",
      title: "O rumor, agora em rede",
      body: "O boca a boca virou feed: vídeos, memes e comentários. Continua difícil de verificar. Continua fácil de repetir.",
    },
    {
      id: "voce",
      label: "Você",
      era: "hoje",
      glyph: "☽",
      title: "E agora, você",
      body: "Aqui, neste navegador, a história encontra mais um meio. Se você contar o que leu — a alguém, num post — o ciclo recomeça.",
    },
  ],
  outro: ["A tecnologia muda.", "A história continua."],
};

/** ===================== 05 · CONTEXTO HISTÓRICO ===================== */
export const contexto = {
  heading: { text: "Nem só do sobrenatural vivia o medo", em: "sobrenatural" },
  lead: "Para entender por que uma perna sem corpo assombrou tanta gente, é preciso lembrar o Recife onde ela nasceu.",
  docs: [
    {
      kind: "interp.",
      title: "Uma cidade sob vigilância",
      body: "O Recife dos anos 1970 vivia sob a ditadura militar: a cidade era sede do Quarto Exército, um dos centros de repressão do Nordeste, com censura instalada nas redações. Matérias podiam ser cortadas horas antes do fechamento do jornal.",
    },
    {
      kind: "interp.",
      title: "A notícia que precisava existir",
      body: "Há quem leia a Perna como reflexo desse vazio: com espaços censurados e violências difíceis de noticiar diretamente, o absurdo ocupava as páginas. O próprio Raimundo Carrero já disse que seu texto nasceu como brincadeira para preencher espaço — e que usava a Perna para tratar de casos que a censura vetava.",
    },
    {
      kind: "interp.",
      title: "Medo sem rosto",
      body: "Uma perna sem corpo — que invade, ataca e some — era uma imagem pronta para condensar o medo do que rondava à noite sem se deixar identificar. São interpretações de pesquisadores, não provas.",
    },
  ],
  caution: "Não dizemos que a Perna Cabeluda “foi criada pela ditadura”. Isso seria simplista — e desrespeitaria a criatividade e a brincadeira reais de jornalistas e do povo.",
  caution2: "O que pesquisadores e jornalistas apontam é uma relação: a lenda circulou num ambiente de medo, censura e violência, e pode ter funcionado como imagem desse medo. Uma coisa é o registro, outra é a interpretação, outra é a lenda que permanece.",
};

/** ===================== 06 · CINEMA ===================== */
export const cinema = {
  heading: { text: "Ela voltou para a tela." },
  filmStillCaption: "composição inspirada em um fotograma — não é cena do filme",
  paragraphs: [
    "O cinema é só mais uma tecnologia por onde a história continua viva. Em 2025, o filme O Agente Secreto, de Kleber Mendonça Filho, recria a Perna Cabeluda num Recife do fim da ditadura — o mesmo período em que a lenda nasceu.",
    "Nas entrevistas que o filme provocou, jornalistas e pesquisadores voltaram a explicar a lenda — como código para falar de violência numa época de censura, e como prova da imaginação popular. A Perna voltou a ser notícia, agora para um público que não a conhecia.",
  ],
  specs: [
    { k: "filme", v: "O Agente Secreto" },
    { k: "direção", v: "Kleber Mendonça Filho" },
    { k: "recorte", v: "Recife, fim dos anos 1970" },
    { k: "lançamento", v: "cinemas · 2025" },
  ],
  pullTag: "a tela é mais um veículo",
  pull: "A tecnologia muda. A história permanece.",
  image: {
    src: "/art/leg-action.webp",
    alt: "Perna Cabeluda em movimento, em uma composição inspirada em um fotograma de cinema",
  },
};

/** ===================== 07 · VEREDICTO ===================== */
export const verdict = {
  heading: { text: "VOCÊ ACREDITA?" },
  buttons: ["É uma lenda", "Eu não tenho certeza"],
  afterA: "Talvez essa seja a pergunta errada.",
  afterB: "Uma lenda não precisa ser verdadeira para revelar algo sobre quem a conta.",
  afterC_prefix: "Você disse:",
  afterC:
    "E é exatamente aí que mora a história — não no pé que rasteja, mas no que essa rasteira diz sobre a cidade que a inventou.",
  retry: "↺ responder de novo",
};

/** ===================== 08 · QUEM FEZ ===================== */
export const participants = {
  chapterNo: "08",
  kicker: "equipe",
  eyebrow: "participantes · quem fez este trabalho",
  heading: { text: "Quem fez esta história", em: "acontecer" },
  lead: [
    "Este projeto é um trabalho escolar do Setembro Literário. Foi feito a oito mãos — pesquisa, texto, design, código e apresentação — para contar como uma lenda do Recife continua viva, meio século depois.",
  ],
  outro: "Se esta página tivesse mais um elo, seria quem lê. Obrigado por chegar até aqui.",

  /** Edite a lista abaixo com os nomes e funções reais da equipe. */
  people: [
    { name: "Mateus Henrique", role: "Desenvolvedor" },
    { name: "Arthur Felipe", role: "Apresentador · contexto histórico" },
    { name: "Braga", role: "Apresentador · a lenda que virou verso" },
    { name: "Erison Carlos", role: "Apresentador · como uma história viaja" },
    { name: "Luiz Henrique", role: "Apresentador · quando o pavor vira cultura" },
    { name: "Lucas Henrique", role: "Apresentador · a voz que ninguém gravou" },
    { name: "Davi Guedes", role: "Apresentador · a página que registrou" },
    { name: "Miquel Vinicius", role: "Apresentador · ela voltou para a tela" },
  ],
};

/** ===================== FINAL ===================== */
export const finale = {
  lines: [
    { s: 0.03, e: 0.13, text: "1975 → 2026", mono: true },
    { s: 0.15, e: 0.26, text: "Meio século passou.", big: true },
    { s: 0.28, e: 0.4, text: "Os jornais viraram telas." },
    { s: 0.41, e: 0.53, text: "O rádio virou streaming." },
    { s: 0.54, e: 0.67, text: "O boca a boca virou rede social." },
    { s: 0.68, e: 0.8, text: "Mas algumas histórias continuam circulando." },
    { s: 0.82, e: 0.91, text: "Você chegou ao fim." },
    { s: 0.9, e: 0.98, text: "Ou talvez não." },
  ],
};

/** ===================== TÍTULO FINAL + FONTES ===================== */
export const ending = {
  eyebrow: "fim · ou continuação",
  title: "PERNA CABELUDA",
  subtitle: "Uma história que Recife nunca conseguiu esquecer.",
  credits: [
    "Projeto — Setembro Literário",
    "Tecnologia + Literatura + Cultura Pernambucana",
    "Perna Cabeluda · experiência digital · 2026",
  ],
  sourcesIntro: [
    "Como ler estas fontes: este é um projeto escolar e educativo. Usamos cobertura jornalística e acadêmica secundária, cruzada entre veículos — e não a Wikipédia como fonte principal. Quando um texto foi adaptado ou parafraseado, avisamos na própria página. Nada aqui pretende provar a existência da criatura, e nenhum depoimento, citação ou data foi inventado.",
  ],
  groups: [
    {
      h: "Registro histórico (citado)",
      note: "Registros de 1975–1976, como reproduzidos e citados pela imprensa e por estudos posteriores.",
      items: [
        {
          t: "Diário de Pernambuco",
          d: "Cobertura de dezembro de 1975 sobre a “perna fantasma” de Tiúma/São Lourenço da Mata, com manchetes como “Perna fantasma surge em moradia de Tiúma” (10/12/1975) e “Perna fantasma é invenção do povo” (13/12/1975). Matérias sem assinatura.",
        },
        {
          t: "Paulo Fernando Craveiro",
          d: "Crônica de 21/01/1976 no Diário de Pernambuco que usa a expressão “perna cabeluda”, em meio a referências a enchentes e seca.",
        },
        {
          t: "Raimundo Carrero",
          d: "“Perna Cabeluda chega em Olinda”, coluna Romance Policial, Diário de Pernambuco, 01/02/1976 (texto ficcional; autor comenta a origem em entrevistas).",
        },
        {
          t: "José Soares",
          d: "Folhetos de cordel “A Perna Cabeluda de Tiúma e São Lourenço” e “A Perna Cabeluda de Olinda” (1976), registrados em acervos.",
        },
      ],
    },
    {
      h: "Cobertura jornalística contemporânea (2025–2026)",
      note: "Reportagens usadas para reconstituir fatos e relatos. Jornalismo profissional; artigos sobre origens e ditadura.",
      items: [
        {
          t: "Revista piauí",
          d: "“Uma assombração no tapete vermelho” (out/2025) — detalha as edições de dez/1975, o papel do rádio e do cinema.",
          u: "https://piaui.folha.uol.com.br/lenda-perna-cabeluda-agente-secreto/",
        },
        {
          t: "Folha de S.Paulo — Ilustrada",
          d: "“Antes de ‘O Agente Secreto’, ‘perna cabeluda’ assombrou Recife e animou Carnaval” (nov/2025).",
          u: "https://www1.folha.uol.com.br/ilustrada/2025/11/antes-de-o-agente-secreto-perna-cabeluda-assombrou-recife-e-animou-carnaval.shtml",
        },
        {
          t: "O Estado de S. Paulo — Cultura",
          d: "“O que é a ‘Perna Cabeluda’, lenda urbana do Recife que aparece em ‘O Agente Secreto’?” (nov/2025).",
          u: "https://www.estadao.com.br/cultura/cinema/",
        },
        {
          t: "G1 — Pernambuco",
          d: "“O que a aparição da lenda da ‘Perna Cabeluda’ em ‘O Agente Secreto’ diz sobre a ditadura” (jan/2026).",
          u: "https://g1.globo.com/pe/pernambuco/",
        },
        {
          t: "Agência Pública",
          d: "“Perna Cabeluda: como lenda que levou Recife ao Oscar ajudou a retratar a ditadura” (mar/2026).",
          u: "https://apublica.org/",
        },
        {
          t: "Jornal do Commercio (PE)",
          d: "Matérias sobre lendas urbanas do Recife e a leitura da lenda sobre a ditadura (out–nov/2025).",
          u: "https://jc.uol.com.br/cultura/",
        },
        {
          t: "CNN Brasil",
          d: "“O Agente Secreto: entenda a lenda urbana da ‘perna cabeluda’” (nov/2025).",
          u: "https://www.cnnbrasil.com.br/pop/",
        },
      ],
    },
    {
      h: "Pesquisa e interpretação (como citado)",
      note: "Autores e pesquisadores citados na imprensa; as interpretações são apresentadas como hipóteses, não como provas.",
      items: [
        {
          t: "João Paulo Reis Braga",
          d: "Artigo “A Perna Cabeluda: Violência sobrenatural e factual na cidade do Recife” (doutor em Ciências da Religião).",
        },
        {
          t: "Manoel Moraes",
          d: "Pesquisador na Universidade Católica de Pernambuco (UNICAP), citado sobre o clima de repressão no Recife dos anos 1970.",
        },
        {
          t: "Roberto Beltrão",
          d: "Jornalista e escritor, estudioso das assombrações do Recife, citado sobre o papel das lendas no imaginário popular.",
        },
        {
          t: "Universidade Católica de Pernambuco (UNICAP)",
          d: "Instituição de pesquisa citada em estudos sobre o período e a lenda.",
        },
      ],
    },
    {
      h: "Arte, cinema e cultura",
      note: "Obras citadas como exemplos culturais. As imagens e versos deste site são composições originais do projeto.",
      items: [
        {
          t: "O Agente Secreto (2025)",
          d: "Filme de Kleber Mendonça Filho que recria a lenda num Recife do fim da ditadura.",
        },
        {
          t: "Da Lama ao Caos (1994)",
          d: "Disco de Chico Science & Nação Zumbi; a lenda é citada na letra de “Banditismo por uma Questão de Classe”.",
        },
        {
          t: "A Perna Cabiluda (documentário, 1997)",
          d: "Documentário de 1997 sobre a lenda da Perna Cabeluda e sua presença no imaginário recifense.",
        },
        {
          t: "Cordel e xilogravura",
          d: "Referência estética. As ilustrações e versos deste site são originais e não reproduzem obras existentes.",
        },
      ],
    },
  ] as SourceGroup[],
};
