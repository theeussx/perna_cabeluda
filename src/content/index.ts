/**
 * ============================================================================
 *  PERNA CABELUDA — CONTEÚDO DO SITE
 * ============================================================================
 *  Todo o texto e os dados exibidos no site vivem NESTE arquivo. Para mudar
 *  uma informação, você edita aqui — os componentes apenas leem estes dados.
 *
 *  Dicas rápidas:
 *   - Um texto quebra em vários parágrafos = array de strings ["p1", "p2"].
 *   - "tags" são rótulos pequenos no alto de um cartão (ex.: FATO, RELATO).
 *   - Nunca invente datas, nomes ou citações. Quando houver divergência entre
 *     fontes, apresente a divergência (veja os comentários "divergência").
 *   - Cada seção numérica (01, 02...) tem um bloco próprio aqui embaixo.
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

/** ===================== 02–03 · APARIÇÃO E REVELAÇÃO ===================== */
export const reveal = {
  cornerLeft: "Recife — 1975",
  chapterTag: "II · a aparição",
  cornerRight: "dezembro · 1975",
  gutter: "— dizem que a viram de noite —",
  scrollHint: "o rolar revela",
  /** Fragmentos curtos que aparecem e somem com o scroll. */
  fragments: [
    { text: "Disseram que ela existia." },
    { text: "Uma perna." },
    { text: "Sem corpo." },
    { text: "Sem rosto." },
    { text: "Sem explicação." },
    { text: "Mas com uma coisa em comum…" },
    { text: "Ela sempre aparecia." },
    { text: "ELA NÃO TINHA CORPO.", big: true },
    { text: "Mas tinha uma história." },
  ],
};

/** ===================== 04 · ARQUIVO 1975 ===================== */
export const archive = {
  heading: { text: "ARQUIVO 1975" },
  lead: [
    "Quando uma história impossível ganhou as páginas do Recife. Aqui começamos a separar o que foi registrado do que foi apenas dito.",
  ],
  cards: [
    {
      id: "ocorrencia",
      label: "O primeiro registro",
      heading: "Uma “perna fantasma” em Tiúma",
      body: "Entre 10 e 13 de dezembro de 1975, o Diário de Pernambuco publicou notas, sem assinatura, sobre uma suposta aparição na casa de José Luís Borges e do filho Wanderley, na localidade de Tiúma (bairro descrito também como “Usina Tiúma”), em São Lourenço da Mata, Região Metropolitana do Recife.",
      tags: ["FATO", "10–13 dez 1975", "Diário de Pernambuco"],
    },
    {
      id: "nome",
      label: "O nome",
      heading: "“Perna Fantasma” → “Perna Cabeluda”",
      body: "Naquele dezembro a imprensa chamava a aparição de “perna fantasma”. O detalhe do cabelo e o nome “Perna Cabeluda” consolidaram-se entre janeiro e fevereiro de 1976: na crônica de Paulo Fernando Craveiro (21/01/1976) e no texto ficcional de Raimundo Carrero, “Perna Cabeluda chega em Olinda”, na coluna Romance Policial (01/02/1976).",
      tags: ["FATO", "jan–fev 1976", "imprensa"],
    },
    {
      id: "origem",
      label: "Quem criou?",
      heading: "Uma autoria disputada",
      body: "Não há consenso sobre a origem: o radialista Jota Ferreira e o escritor Raimundo Carrero são associados a momentos diferentes da criação e da popularização, e há dúvida sobre a ordem exata entre o rádio e os textos do Diário de Pernambuco. Como não há gravação, parte da história chegou até nós pela memória dos envolvidos.",
      tags: ["DIVERGÊNCIA", "1975–1976", "sem consenso"],
    },
  ],
  note: "A perna fantasma de Tiúma aparece na imprensa em dezembro de 1975 — o primeiro registro jornalístico conhecido da lenda. Não como prova de que a criatura existiu, e sim como prova de que a história já circulava.",
  callout:
    "Dizem que, naqueles dias, famílias de São Lourenço da Mata teriam chamado o padre e procurado médiuns; o pároco da cidade, padre Ludugero, teria se recusado a se envolver. Não há como confirmar — é relato, registrado na própria imprensa da época.",
  calloutTag: "relato",
  legendIntro: "Neste projeto usamos três chaves (e um quadro-guia abaixo) para ler tudo o que vem a seguir.",
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

/** ===================== 05 · COMO UMA HISTÓRIA VIAJA ===================== */
export const travel = {
  heading: { text: "COMO UMA HISTÓRIA VIAJA?" },
  lead: "Toque em cada estação do caminho. É a jornada que a Perna percorreu — do quintal de Tiúma até esta tela — passando pelas tecnologias de cada época.",
  legendOld: "os meios dos anos 1970",
  legendToday: "os meios de hoje",
  stages: [
    { id: "relato", label: "Relato", era: "1970", glyph: "⟦", title: "Uma voz numa noite", body: "Alguém diz que viu; outro escuta, duvida e repete. Antes de qualquer jornal ou tela, a história já existe — na boca, no medo, no desejo de contar." },
    { id: "jornal", label: "Jornal", era: "1970", glyph: "§", title: "A página que registra", body: "Em dezembro de 1975 o Diário de Pernambuco noticia a “perna fantasma” de Tiúma. O papel transforma um rumor local num caso conhecido — discutido, ainda que nunca provado." },
    { id: "radio", label: "Rádio", era: "1970", glyph: "≈", title: "A voz que alcança milhares", body: "Relatos e comentários em programas jornalísticos associados a Jota Ferreira e Geraldo Freire ajudaram a fazer a história atravessar bairros. A voz viaja mais rápido que o pé." },
    { id: "boca", label: "Boca a boca", era: "1970", glyph: "◠", title: "Cada pessoa, uma versão", body: "Recontada de casa em casa, a perna ganha detalhes: tamanho, unhas, pelos, quem ela pegou. O boca a boca não copia a história — a inventa de novo a cada vez." },
    { id: "cordel", label: "Cordel", era: "1970", glyph: "❧", title: "O verso que vira impresso", body: "Pouco depois do caso, a lenda entrou em cordel — por exemplo, nos folhetos do poeta José Soares. Impressa em cordel, a história já não depende de quem a conta; depende de quem a lê." },
    { id: "cultura", label: "Cultura popular", era: "1970", glyph: "♪", title: "Do medo à folia", body: "O pavor vira “grea” — brincadeira. A perna entra em marchinhas, troças e fantasias de carnaval (já em 1976). Assustar deixa de ser a única função; divertir também." },
    { id: "cinema", label: "Cinema", era: "hoje", glyph: "▣", title: "A lenda volta à tela", body: "Em 2025, o filme O Agente Secreto, de Kleber Mendonça Filho, recria a Perna Cabeluda num Recife da ditadura. Meio século depois, o cinema é mais uma tecnologia que mantém a história viva." },
    { id: "internet", label: "Internet", era: "hoje", glyph: "◎", title: "O rumor, agora em rede", body: "O boca a boca virou feed. A lenda circula em vídeos, comentários e posts — o boato de ontem reage com a velocidade de hoje. Continua difícil de verificar. Continua fácil de repetir." },
    { id: "voce", label: "Você", era: "hoje", glyph: "☽", title: "E agora, você", body: "Aqui, neste navegador, a história encontra mais um meio. Se você contar o que leu — a alguém, num post — o ciclo recomeça." },
  ],
  outro: ["A tecnologia muda.", "A história continua."],
};

/** ===================== 06 · JORNAL ===================== */
export const newspaper = {
  heading: { text: "A página", em: "que registrou" },
  lead: "O jornal foi o primeiro grande espelho da lenda. Vire as datas de dezembro de 1975 e observe como uma notícia cresce, alimenta o medo e, depois, se desmente — sem apagar a história que já ficou na cabeça de todo mundo.",
  /** Metadados da página. Adaptado em paráfrase — nunca transcrição literal. */
  masthead: { region: "Recife · Pernambuco · Brasil", name: "DIÁRIO", tagline: "fundado em 1825 · o jornal diário mais antigo em circulação na América Latina", issue: "ano 150" },
  days: [
    {
      id: "d1",
      date: "quarta · 10 dez 1975",
      rubric: "Segundo Caderno · sem assinatura",
      headline: "Perna fantasma surge em moradia de Tiúma",
      deck: "Uma sombra de perna teria passeado pelas paredes de uma casa em Tiúma, São Lourenço da Mata, na Região Metropolitana do Recife. O assunto, segundo o jornal, já se arrastava por uns vinte dias.",
      cols: [
        "São Lourenço da Mata. O Diário de Pernambuco noticiou que uma residência da localidade de Tiúma estaria recebendo, segundo moradores, uma “perna” sem corpo. O caso teria sido relatado primeiro por um rapaz, Wanderley Borges, que vivia ali com o pai, José Luís Borges.",
        "Na versão impressa, o jovem teria visto a “perna” passeando pelas paredes da casa e, assustado, decidido dormir em outro lugar. Dias depois, o próprio pai relataria o mesmo fenômeno.",
        "Vizinhos passaram a acorrer ao local. A reportagem descrevia a entidade como uma perna que andava pela casa, pendurava-se no telhado e, segundo alguns relatos, era capaz de virar outros animais. A vizinhança pedia ajuda ao padre e a médiuns.",
      ],
    },
    {
      id: "d2",
      date: "quinta · 11 dez 1975",
      rubric: "política · nota policial",
      headline: "A perna já era “problema policial”",
      deck: "No dia seguinte, o caso chegava às páginas como caso de polícia, e o pároco de Tiúma, padre Ludugero, teria se recusado a se envolver com o assunto.",
      cols: [
        "A edição de 11 de dezembro tratava a assombração como um “problema policial” a ser resolvido. Assombrados, moradores de São Lourenço da Mata pensavam em pedir socorro às autoridades.",
        "O texto dizia que o padre Ludugero estaria agredindo quem lhe pedisse ajuda espiritual sobre o caso — o que teria revoltado parte dos fiéis. Outros recorreram a médiuns e a um babalorixá da região.",
        "A essa altura, moradores de outros bairros já relatavam ter visto a tal perna, dizendo tratar-se de “um problema de outro mundo”. É o padrão de como uma notícia local vira rumor de cidade.",
      ],
    },
    {
      id: "d3",
      date: "sábado · 13 dez 1975",
      rubric: "nota final · sem assinatura",
      headline: "Perna fantasma é invenção do povo",
      deck: "Poucos dias depois, o próprio jornal arrefecia o caso, sugerindo tratar-se de construção coletiva. A comoção, porém, já tinha nome e história.",
      cols: [
        "Para tentar acalmar os ânimos de Tiúma e dos leitores, o Diário estampou, em 13 de dezembro, a manchete: “Perna fantasma é invenção do povo”.",
        "No texto, um babalorixá conhecido como Pai Edu dizia que 1975 havia sido “muito ruim para quase todas as pessoas”, com “muitos desastres e suicídios”. A fala revela o quanto aquela lenda falava do cotidiano de medo e perdas.",
        "A história, porém, não se apagou com a manchete de negação. Repetida no rádio e nas ruas, ela já pertencia ao imaginário — e voltaria, semanas depois, como crônica, cordel e lenda.",
      ],
    },
  ],
  stamp: "texto adaptado em paráfrase · sem fins de reprodução fiel · não constitui prova de ocorrência sobrenatural",
  disclaimer: "As manchetes e trechos acima são uma paráfrase de registros atribuídos ao Diário de Pernambuco de dezembro de 1975, como citados por reportagens e estudos sobre a lenda. Não são transcrições literais das páginas originais.",
};

/** ===================== 07 · RÁDIO ===================== */
export const radio = {
  heading: { text: "A voz que ninguém gravou" },
  lead: "O rádio ajudou o rumor a correr pela cidade em programas e plantões jornalísticos da época. Não sobreviveu nenhuma gravação daquele período — então aqui você sintoniza uma recriação artística do que teria sido ouvir.",
  disclaimers: {
    tag: "transmissão arquivada · não há gravação real",
    rec: "Em 1975 não há registro sonoro preservado dos programas que ajudaram a espalhar a história. O que ficou são relatos associados ao radialista Jota Ferreira e ao apresentador Geraldo Freire — e o eco que essas vozes deixaram na memória da cidade.",
  },
  idle: "Sintonize o aparelho para escutar a transmissão.",
  fragments: [
    "Moradores afirmam ter visto…",
    "…uma perna caminhar pelas paredes.",
    "O caso virava problema policial.",
    "O padre não quis se envolver.",
    "Dizem que a história é invenção do povo.",
    "Aguardem novas informações.",
  ],
  bodyLabel: "RECIFE · RÁDIO",
  onAir: "on air",
  am: "530 AM",
  fm: "FM 92.7",
  amMax: "1600",
  synth: "sintonia",
  play: "▶ sintonizar",
  stop: "■ silenciar",
  footer: "ondas que viajam mais rápido que o pé",
};

/** ===================== 08 · CORDEL ===================== */
export const cordel = {
  heading: { text: "A lenda que virou verso" },
  lead: "Antes da televisão e da internet, a literatura de cordel imprimia as histórias do povo em folhetos pendurados em cordões. Logo após o caso, a Perna virou tema de cordel — como nos folhetos do poeta José Soares. Abaixo, uma composição original, inspirada nesse estilo — não reproduz nenhuma obra existente.",
  figureCaption: "xilogravura digital inspirada na estética do cordel · composição original",
  verses: [
    { t: "i", lines: ["No Recife de setenta,", "quando a noite ia começar,", "apareceu uma perna", "sem ninguém pra assombrar?", "Caminhava pelas ruas,", "era só pra rastejar."] },
    { t: "ii", lines: ["Não tinha corpo nem rosto,", "nem dono pra reclamar,", "pelos pretos, pé no chão,", "ninguém pode acreditar:", "medo que sai pela boca,", "lenda que fica no ar."] },
    { t: "iii", lines: ["E o povo foi dizendo", "que a história era invenção,", "mas o medo é teimoso", "e mora no coração:", "meio século depois,", "ela ainda vem de montão."] },
  ],
  disclaimer: "Composição original deste projeto, inspirada no cordel pernambucano — sem copiar folheto ou obra protegida de ninguém.",
};

/** ===================== 09 · CONTEXTO HISTÓRICO ===================== */
export const contexto = {
  heading: { text: "Nem só do sobrenatural vivia o medo", em: "sobrenatural" },
  lead: "Aqui a experiência vira, em parte, um documentário. Para entender por que uma perna sem corpo assombrou tanta gente, é preciso lembrar o Recife onde ela nasceu.",
  docs: [
    { kind: "interp.", title: "Uma cidade sob vigilância", body: "Pesquisadores lembram que o Recife dos anos 1970 vivia sob a ditadura militar: a cidade era sede do Quarto Exército, um dos centros de repressão do Nordeste, com censura instalada nas redações. Matérias podiam ser cortadas horas antes do fechamento do jornal." },
    { kind: "interp.", title: "A notícia que precisava existir", body: "Há quem leia a Perna como reflexo desse vazio: com espaços censurados e violências difíceis de noticiar diretamente (por exemplo, contra mulheres), o absurdo ocupava as páginas. O próprio Raimundo Carrero já disse que seu texto nasceu como brincadeira para preencher espaço — e que usava a Perna para tratar de casos que a censura vetava." },
    { kind: "interp.", title: "Medo sem rosto", body: "Para estudiosos, uma perna sem corpo — que invade, ataca e some — era uma imagem pronta para condensar o medo do que rondava à noite sem se deixar identificar. O radialista Jota Ferreira, por exemplo, lia a lenda como punição das “mentes conservadoras” à boêmia e à contracultura da época. São interpretações, não provas." },
  ],
  caution: "Não dizemos que a Perna Cabeluda “foi criada pela ditadura”. Isso seria simplista — e desrespeitaria a criatividade e a brincadeira reais de jornalistas e do povo.",
  caution2: "O que pesquisadores e jornalistas apontam é uma relação: a lenda circulou num ambiente de medo, censura e violência, e pode ter funcionado como imagem desse medo. Uma coisa é o registro, outra é a interpretação, outra é a lenda que permanece.",
  registers: [
    { k: "REGISTRO", d: "o que se documenta, com fonte." },
    { k: "INTERPRETAÇÃO", d: "as leituras possíveis, assumidas como hipóteses." },
    { k: "LENDÁRIO", d: "a história que o povo guardou e segue contando." },
  ],
};

/** ===================== 10 · A PERNA COMO SÍMBOLO ===================== */
export const symbol = {
  heading: { text: "Mais que uma rasteira" },
  lead: "Com o tempo, a Perna deixou de ser só uma assombração que dava rasteiras. Ela passou a carregar significados. Toque numa palavra.",
  words: [
    { w: "MEDO", d: "O que a perna despertava em quem a via de noite. O medo urbano muitas vezes precisa de um rosto — ou, aqui, de um pé." },
    { w: "VIOLÊNCIA", d: "Numa cidade onde certas violências não podiam ser nomeadas, uma agressão sem autor identificável podia virar lenda." },
    { w: "RUMOR", d: "O que nasce sem dono e cresce na boca do povo — difícil de verificar, fácil de repetir. O motor da Perna desde o início." },
    { w: "HUMOR", d: "O medo que vira “grea”, piada, troça e fantasia de carnaval. Assustar era só o primeiro ato da história." },
    { w: "CENSURA", d: "O que não se podia dizer abria espaço para o que se inventava. A lenda circula também nas frestas deixadas pelo silêncio." },
    { w: "MEMÓRIA", d: "Meio século depois, ainda se conta. É a memória que mantém a Perna viva — e é por ela que este site existe." },
    { w: "RECIFE", d: "A cidade que deu o cenário, o medo e a língua. A Perna é, acima de tudo, uma história recifense." },
    { w: "IMAGINAÇÃO", d: "O único corpo completo que a Perna tem. É no imaginário coletivo que uma perna sem corpo ganha tamanho, pelos e nome." },
  ],
};

/** ===================== 11 · MAPA ===================== */
export const mapSection = {
  heading: { text: "Onde a lenda andou" },
  lead: "Um mapa real da capital e da Região Metropolitana, com os pontos culturais associados à circulação da lenda. Use-os como referência geográfica e cultural, e não como prova de ocorrências.",
  mapNote: "cartografia real · pontos culturais",
  compass: { n: "N", arrow: "▲" },
  points: [
    { id: "tiuma", x: 16, y: 27, name: "Tiúma · São Lourenço da Mata", tag: "registro", frag: "Onde a “perna fantasma” teria aparecido em dezembro de 1975, segundo o Diário de Pernambuco. Tiúma é um bairro de São Lourenço da Mata, na Região Metropolitana do Recife. Ponto de registro — não de prova." },
    { id: "olinda", x: 46, y: 11, name: "Olinda", tag: "cultura", frag: "Referência cultural: a crônica ficcional de Raimundo Carrero, em fevereiro de 1976, chamava-se “Perna Cabeluda chega em Olinda”. É ficção jornalística, não ocorrência." },
    { id: "santo", x: 58, y: 25, name: "Santo Amaro", tag: "referência", frag: "Bairro da capital, usado aqui apenas como referência geográfica e cultural do Recife — palco de lendas e da vida popular da cidade." },
    { id: "boa", x: 50, y: 44, name: "Boa Vista", tag: "referência", frag: "Bairro central do Recife. Referência geográfica de uma cidade inteira que circulou a história de boca em boca." },
    { id: "derby", x: 42, y: 38, name: "Derby", tag: "referência", frag: "Bairro central recifense. Marcador meramente geográfico, sem ocorrências atribuídas." },
    { id: "parque", x: 61, y: 40, name: "Parque 13 de Maio", tag: "cinema", frag: "No filme O Agente Secreto (2025), a lenda é associada a este parque do Recife, numa cena noturna. Referência à ficção — a tela reinterpreta a cidade." },
    { id: "recife", x: 55, y: 52, name: "Centro do Recife", tag: "referência", frag: "O coração histórico da capital. Foi onde a história — nascida nos arredores — virou fenômeno de cidade inteira, contada em rádio, jornal e cordel." },
    { id: "restauracao", x: 68, y: 30, name: "Hospital da Restauração", tag: "relato", frag: "Hospital público do Recife citado em relatos do radialista Jota Ferreira, que teria atendido, na urgência, pessoas que atribuíam agressões a uma “perna cabeluda”. Relato, sem verificação." },
  ],
};

/** ===================== 12 · LINHA DO TEMPO ===================== */
export const timeline = {
  heading: { text: "Meio século de uma perna" },
  items: [
    { y: "1970", t: "Recife vive sob a ditadura militar, com censura instalada nas redações. É o ambiente em que a história vai circular.", tag: "contexto" },
    { y: "1975", t: "Em dezembro, o Diário de Pernambuco noticia a “perna fantasma” de Tiúma, em São Lourenço da Mata — o primeiro registro jornalístico conhecido da lenda.", tag: "registro" },
    { y: "1976", t: "Em janeiro, o colunista Paulo Fernando Craveiro fala em “perna cabeluda”; em fevereiro, Raimundo Carrero publica “Perna Cabeluda chega em Olinda” e o cordelista José Soares lança folhetos sobre o caso.", tag: "cultura" },
    { y: "anos seguintes", t: "Pelo relato oral, pelo rádio, pelo cordel e pelo carnaval (troças e marchinhas já em 1976), a perna atravessa a cidade e os estados vizinhos.", tag: "circulação" },
    { y: "1994–1997", t: "A lenda é reapropriada pela cultura pernambucana contemporânea: aparece na letra de Chico Science em “Da Lama ao Caos” (1994) e vira tema de documentário (1997).", tag: "reapropriação" },
    { y: "2025", t: "A lenda volta ao debate público quando o filme O Agente Secreto, de Kleber Mendonça Filho, a recria numa trama sobre o Recife da ditadura.", tag: "cinema" },
    { y: "2026", t: "Meio século depois, a história chega a esta experiência digital — e, se você contar o que leu, segue adiante.", tag: "você" },
  ],
};

/** ===================== 13 · CULTURA POPULAR ===================== */
export const culture = {
  heading: { text: "Quando o pavor vira cultura" },
  lead: "Toda boa lenda acaba virando outra coisa: o medo amolece, o susto vira riso e a história passa a pertencer a quem a conta. Veja as estantes de um arquivo cultural imaginário.",
  quote: "O medo real durou uns dois anos — depois virou “grea”. — leitura atribuída a estudiosos e jornalistas que acompanharam a lenda",
  shelf: [
    { g: "❧", m: "cordel", t: "Verso de feira", d: "Logo após o caso, poetas como José Soares imprimiram a Perna em folhetos — “A Perna Cabeluda de Tiúma e São Lourenço” e “A Perna Cabeluda de Olinda”. A lenda que também vira literatura popular." },
    { g: "♪", m: "música", t: "Marchinha e troça", d: "Já em 1976 a perna virou tema de música e de troça de carnaval do Recife. Assustar, afinal, cansa — e a folia adota tudo." },
    { g: "◐", m: "carnaval", t: "Fantasia e brincante", d: "O medo vira fantasia: blocos e brincantes vestem a perna — a assombração desfila na festa que ela mesma ajudou a animar." },
    { g: "◭", m: "música · mangue", t: "Chico Science", d: "A lenda ressurge na letra de “Banditismo por uma Questão de Classe”, de Chico Science & Nação Zumbi, no disco “Da Lama ao Caos” (1994) — a Perna entra na cultura pop pernambucana." },
    { g: "▣", m: "cinema", t: "A tela grande", d: "Em 2025, um filme a ressuscita para o público de todo o Brasil — a lenda que já era memória volta a ser imagem (veja o capítulo 14)." },
    { g: "◠", m: "memória oral", t: "Quem ainda conta", d: "Na calçada, na sala, na escola: quem viveu os anos 1970 ainda narra a perna com detalhe e um sorriso de quem já se acostumou." },
    { g: "◎", m: "cultura urbana", t: "Do frevo ao feed", d: "Meio século depois, a perna pula dos blocos para vídeos, memes e comentários — mesma lenda, novo boca a boca." },
  ],
};

/** ===================== 14 · CINEMA ===================== */
export const cinema = {
  heading: { text: "Ela voltou para a tela." },
  filmStillCaption: "composição inspirada em um fotograma — não é cena do filme",
  paragraphs: [
    "O cinema é só mais uma tecnologia por onde a história continua viva. Em 2025, o filme O Agente Secreto, de Kleber Mendonça Filho, recria a Perna Cabeluda num Recife do fim da ditadura — o mesmo período em que a lenda nasceu.",
    "Nas entrevistas que o filme provocou, jornalistas e pesquisadores voltaram a explicar a lenda — como código para falar de violência numa época de censura, e como prova da imaginação popular. A Perna voltou a ser notícia, mas agora para um público que não a conhecia.",
  ],
  specs: [
    { k: "filme", v: "O Agente Secreto" },
    { k: "direção", v: "Kleber Mendonça Filho" },
    { k: "recorte", v: "Recife, fim dos anos 1970" },
    { k: "lançamento", v: "cinemas · 2025" },
  ],
  note: "Não é nosso objetivo falar do filme em si, e sim de como ele ilustra esta ideia: uma lenda que atravessa cinco décadas e encontra, em cada geração, um novo meio para continuar.",
  pullTag: "a tela é mais um veículo",
  pull: "A tecnologia muda. A história permanece.",
  image: { src: "/art/leg-action.webp", alt: "Perna Cabeluda em movimento, em uma composição inspirada em um fotograma de cinema" },
};

/** ===================== 15 · VEREDICTO ===================== */
export const verdict = {
  heading: { text: "VOCÊ ACREDITA?" },
  buttons: ["É uma lenda", "Eu não tenho certeza"],
  afterA: "Talvez essa seja a pergunta errada.",
  afterB: "Uma lenda não precisa ser verdadeira para revelar algo sobre quem a conta.",
  afterC_prefix: "Você disse:",
  afterC: "E é exatamente aí que mora a história — não no pé que rasteja, mas no que essa rasteira diz sobre a cidade que a inventou.",
  retry: "↺ responder de novo",
};

/** ===================== 16 · A HISTÓRIA CHEGOU ATÉ VOCÊ ===================== */
export const youarenow = {
  eyebrow: "16 · o último elo",
  titleA: "A história chegou",
  titleB: "até você.",
  chain: ["relato", "jornal", "rádio", "boca a boca", "cordel", "cultura", "cinema", "internet"],
  last: "você",
  body: "Jornal, rádio, cordel, carnaval, cinema, internet. O que nunca muda é a pergunta que cada meio faz a quem escuta: você acredita?",
};

/** ===================== 17 · QUEM FEZ ===================== */
export const participants = {
  chapterNo: "17",
  kicker: "equipe",
  eyebrow: "participantes · quem fez este trabalho",
  heading: { text: "Quem fez esta história", em: "acontecer" },
  lead: [
    "Este projeto é um trabalho escolar do Setembro Literário. Foi feito a nove mãos — pesquisa, texto, design, código e apresentação — para contar como uma lenda do Recife continua viva, meio século depois.",
  ],
  outro: "Se esta página tivesse um décimo elo, seria quem lê. Obrigado por chegar até aqui.",
  /** Edite a lista abaixo com os nomes e funções reais da equipe. */
  people: [
    { name: "Nome do Participante 1", role: "pesquisa" },
    { name: "Nome do Participante 2", role: "texto" },
    { name: "Nome do Participante 3", role: "design" },
    { name: "Nome do Participante 4", role: "programação" },
    { name: "Nome do Participante 5", role: "apresentação" },
    { name: "Nome do Participante 6", role: "pesquisa" },
    { name: "Nome do Participante 7", role: "texto" },
    { name: "Nome do Participante 8", role: "design" },
    { name: "Nome do Participante 9", role: "apresentação" },
  ],
};

/** ===================== FINAL ===================== */
export const finale = {
  lines: [
    { s: 0.02, e: 0.09, text: "1975 → 2026", mono: true },
    { s: 0.1, e: 0.19, text: "Meio século passou.", big: true },
    { s: 0.21, e: 0.3, text: "Os meios mudaram." },
    { s: 0.31, e: 0.4, text: "Os jornais viraram telas." },
    { s: 0.41, e: 0.5, text: "O rádio virou streaming." },
    { s: 0.51, e: 0.6, text: "O boca a boca virou rede social." },
    { s: 0.62, e: 0.72, text: "Mas algumas histórias continuam circulando." },
    { s: 0.76, e: 0.85, text: "Você chegou ao fim.", big: true },
    { s: 0.86, e: 0.95, text: "Ou talvez não.", big: true },
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
        { t: "Diário de Pernambuco", d: "Cobertura de dezembro de 1975 sobre a “perna fantasma” de Tiúma/São Lourenço da Mata, com manchetes como “Perna fantasma surge em moradia de Tiúma” (10/12/1975) e “Perna fantasma é invenção do povo” (13/12/1975). Matérias sem assinatura." },
        { t: "Paulo Fernando Craveiro", d: "Crônica de 21/01/1976 no Diário de Pernambuco que usa a expressão “perna cabeluda”, em meio a referências a enchentes e seca." },
        { t: "Raimundo Carrero", d: "“Perna Cabeluda chega em Olinda”, coluna Romance Policial, Diário de Pernambuco, 01/02/1976 (texto ficcional; autor comenta a origem em entrevistas)." },
        { t: "José Soares", d: "Folhetos de cordel “A Perna Cabeluda de Tiúma e São Lourenço” e “A Perna Cabeluda de Olinda” (1976), registrados em acervos." },
      ],
    },
    {
      h: "Cobertura jornalística contemporânea (2025–2026)",
      note: "Reportagens usadas para reconstituir fatos e relatos. Jornalismo profissional; artigos sobre origens e ditadura.",
      items: [
        { t: "Revista piauí", d: "“Uma assombração no tapete vermelho” (out/2025) — detalha as edições de dez/1975, o papel do rádio e do cinema.", u: "https://piaui.folha.uol.com.br/lenda-perna-cabeluda-agente-secreto/" },
        { t: "Folha de S.Paulo — Ilustrada", d: "“Antes de ‘O Agente Secreto’, ‘perna cabeluda’ assombrou Recife e animou Carnaval” (nov/2025).", u: "https://www1.folha.uol.com.br/ilustrada/2025/11/antes-de-o-agente-secreto-perna-cabeluda-assombrou-recife-e-animou-carnaval.shtml" },
        { t: "O Estado de S. Paulo — Cultura", d: "“O que é a ‘Perna Cabeluda’, lenda urbana do Recife que aparece em ‘O Agente Secreto’?” (nov/2025).", u: "https://www.estadao.com.br/cultura/cinema/" },
        { t: "G1 — Pernambuco", d: "“O que a aparição da lenda da ‘Perna Cabeluda’ em ‘O Agente Secreto’ diz sobre a ditadura” (jan/2026).", u: "https://g1.globo.com/pe/pernambuco/" },
        { t: "Agência Pública", d: "“Perna Cabeluda: como lenda que levou Recife ao Oscar ajudou a retratar a ditadura” (mar/2026).", u: "https://apublica.org/" },
        { t: "Jornal do Commercio (PE)", d: "Matérias sobre lendas urbanas do Recife e a leitura da lenda sobre a ditadura (out–nov/2025).", u: "https://jc.uol.com.br/cultura/" },
        { t: "CNN Brasil", d: "“O Agente Secreto: entenda a lenda urbana da ‘perna cabeluda’” (nov/2025).", u: "https://www.cnnbrasil.com.br/pop/" },
      ],
    },
    {
      h: "Pesquisa e interpretação (como citado)",
      note: "Autores e pesquisadores citados na imprensa; as interpretações são apresentadas como hipóteses, não como provas.",
      items: [
        { t: "João Paulo Reis Braga", d: "Artigo “A Perna Cabeluda: Violência sobrenatural e factual na cidade do Recife” (doutor em Ciências da Religião)." },
        { t: "Manoel Moraes", d: "Pesquisador na Universidade Católica de Pernambuco (UNICAP), citado sobre o clima de repressão no Recife dos anos 1970." },
        { t: "Roberto Beltrão", d: "Jornalista e escritor, estudioso das assombrações do Recife, citado sobre o papel das lendas no imaginário popular." },
        { t: "Universidade Católica de Pernambuco (UNICAP)", d: "Instituição de pesquisa citada em estudos sobre o período e a lenda." },
      ],
    },
    {
      h: "Arte, cinema e cultura",
      note: "Obras citadas como exemplos culturais. As imagens e versos deste site são composições originais do projeto.",
      items: [
        { t: "O Agente Secreto (2025)", d: "Filme de Kleber Mendonça Filho que recria a lenda num Recife do fim da ditadura." },
        { t: "Da Lama ao Caos (1994)", d: "Disco de Chico Science & Nação Zumbi; a lenda é citada na letra de “Banditismo por uma Questão de Classe”." },
        { t: "A Perna Cabiluda (documentário, 1997)", d: "Documentário de 1997 sobre a lenda da Perna Cabeluda e sua presença no imaginário recifense." },
        { t: "Cordel e xilogravura", d: "Referência estética. As ilustrações e versos deste site são originais e não reproduzem obras existentes." },
      ],
    },
  ] as SourceGroup[],
};

/** Acesso rápido a todos os títulos de seção (para o sumário, se usado). */
export const chapters = [
  { no: "01", kicker: "entrada", title: "RECIFE · 1975" },
  { no: "02–03", kicker: "aparição e revelação", title: "ela aparece" },
  { no: "04", kicker: "arquivo", title: "ARQUIVO 1975" },
  { no: "05", kicker: "narrativa", title: "COMO UMA HISTÓRIA VIAJA?" },
  { no: "06", kicker: "jornal", title: "a página que registrou" },
  { no: "07", kicker: "rádio", title: "a voz que ninguém gravou" },
  { no: "08", kicker: "cordel", title: "a lenda que virou verso" },
  { no: "09", kicker: "contexto", title: "o que existia por trás da lenda" },
  { no: "10", kicker: "símbolo", title: "mais que uma rasteira" },
  { no: "11", kicker: "mapa", title: "onde a lenda andou" },
  { no: "12", kicker: "linha do tempo", title: "meio século de uma perna" },
  { no: "13", kicker: "cultura popular", title: "quando o pavor vira cultura" },
  { no: "14", kicker: "cinema", title: "ela voltou para a tela" },
  { no: "15", kicker: "veredito", title: "VOCÊ ACREDITA?" },
  { no: "16", kicker: "você", title: "a história chegou até você" },
  { no: "17", kicker: "equipe", title: "quem fez esta história acontecer" },
  { no: "final", kicker: "final", title: "1975 → 2026" },
];
