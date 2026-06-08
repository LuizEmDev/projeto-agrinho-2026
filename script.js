/* =========================================================
   Chaves de armazenamento e dados da experiência
   ========================================================= */
const CHAVE_PERCURSO = "agroFortePercurso";
const CHAVE_QUIZ = "agroForteQuiz";
const CHAVE_PREFERENCIAS = "agroFortePreferencias";
const CHAVE_DIAGNOSTICO = "agroForteDiagnostico";

const estadoPadrao = {
  situacaoAtual: 0,
  escolhas: {
    agua: null,
    energia: null,
    solo: null,
    manejo: null
  }
};

const nomesIndicadores = {
  agua: "Água",
  solo: "Solo",
  biodiversidade: "Biodiversidade",
  energia: "Energia",
  producao: "Produção",
  controle: "Controle",
  desperdicio: "Desperdício",
  risco: "Risco"
};

const situacoesDecisao = [
  {
    chave: "agua",
    etapa: "Água",
    contexto: "A previsão indica uma sequência de dias secos.",
    titulo: "Como a irrigação deve ser conduzida?",
    texto: "A lavoura precisa de água, mas aplicar mais do que o necessário aumenta desperdício, custo e pressão sobre rios e reservatórios.",
    opcoes: [
      {
        id: "horario-fixo",
        titulo: "Irrigar por horário fixo",
        descricao: "A aplicação acontece todos os dias no mesmo período, mesmo sem medir a necessidade real do solo.",
        feedback: "A produção pode ser mantida no curto prazo, mas o risco de desperdício de água aumenta.",
        impacto: { agua: -16, producao: 6, desperdicio: 18, risco: 14 }
      },
      {
        id: "gotejamento",
        titulo: "Usar gotejamento",
        descricao: "A água é aplicada de forma mais localizada, reduzindo perdas por evaporação e escorrimento.",
        feedback: "A escolha melhora o aproveitamento da água e reduz desperdícios sem abandonar a produtividade.",
        impacto: { agua: 18, producao: 10, desperdicio: -12, risco: -6 }
      },
      {
        id: "sensores",
        titulo: "Medir umidade antes de irrigar",
        descricao: "Sensores e observação do solo indicam quando irrigar e evitam aplicação desnecessária.",
        feedback: "A decisão combina tecnologia e manejo, reduzindo perdas e melhorando a precisão.",
        impacto: { agua: 26, controle: 16, producao: 12, desperdicio: -18, risco: -12 }
      }
    ]
  },
  {
    chave: "energia",
    etapa: "Energia",
    contexto: "O consumo das bombas e da armazenagem está pesando no custo.",
    titulo: "Como reduzir a pressão energética?",
    texto: "Produzir também exige energia. A forma de usar bombas, máquinas e armazenamento influencia custo e impacto ambiental.",
    opcoes: [
      {
        id: "rede-sem-revisao",
        titulo: "Manter o uso atual sem revisão",
        descricao: "A propriedade continua usando energia da rede, sem ajustar horários, equipamentos ou desperdícios.",
        feedback: "Essa escolha evita mudanças imediatas, mas mantém custos e perdas que poderiam ser reduzidos.",
        impacto: { energia: -10, desperdicio: 8, risco: 6 }
      },
      {
        id: "solar-parcial",
        titulo: "Adotar energia solar em parte do sistema",
        descricao: "A energia solar passa a apoiar bombas, iluminação ou equipamentos, reduzindo dependência externa.",
        feedback: "A energia limpa diminui a pressão ambiental e pode reduzir custos ao longo do tempo.",
        impacto: { energia: 22, desperdicio: -6, risco: -8 }
      },
      {
        id: "uso-planejado",
        titulo: "Revisar horários e eficiência dos equipamentos",
        descricao: "Bombas e máquinas passam a ser usadas com planejamento, manutenção e menor desperdício.",
        feedback: "Mesmo sem trocar tudo, a gestão do uso de energia reduz perdas e melhora o controle.",
        impacto: { energia: 12, controle: 8, desperdicio: -10, risco: -4 }
      }
    ]
  },
  {
    chave: "solo",
    etapa: "Solo",
    contexto: "Após chuvas fortes, aparecem sinais de compactação e erosão.",
    titulo: "Como proteger a base da produção?",
    texto: "O solo é mais do que suporte para a planta. Ele armazena água, abriga vida e sustenta a produtividade nos próximos ciclos.",
    opcoes: [
      {
        id: "preparo-intensivo",
        titulo: "Preparar o solo de forma intensiva",
        descricao: "A área é revolvida com frequência para resolver rapidamente o plantio da próxima safra.",
        feedback: "A resposta pode parecer prática no início, mas aumenta exposição, perda de estrutura e risco de erosão.",
        impacto: { solo: -18, biodiversidade: -14, producao: 5, desperdicio: 8, risco: 15 }
      },
      {
        id: "plantio-direto",
        titulo: "Manter cobertura e plantio direto",
        descricao: "A palhada protege a superfície, melhora infiltração e reduz perda de solo.",
        feedback: "A cobertura ajuda a conservar água, fertilidade e estabilidade produtiva.",
        impacto: { solo: 24, biodiversidade: 14, agua: 8, producao: 8, risco: -10 }
      },
      {
        id: "rotacao-cobertura",
        titulo: "Combinar rotação de culturas e cobertura",
        descricao: "Diferentes culturas são planejadas para proteger o solo e melhorar a matéria orgânica.",
        feedback: "A decisão fortalece o solo e torna o sistema menos dependente de correções emergenciais.",
        impacto: { solo: 26, biodiversidade: 20, agua: 6, producao: 10, risco: -14 }
      }
    ]
  },
  {
    chave: "manejo",
    etapa: "Manejo",
    contexto: "As decisões precisam ficar mais rápidas sem perder responsabilidade.",
    titulo: "Como acompanhar a propriedade ao longo do tempo?",
    texto: "Automação e dados são úteis quando ajudam a observar melhor o campo, corrigir desperdícios e respeitar os limites ambientais.",
    opcoes: [
      {
        id: "manual-sem-registro",
        titulo: "Decidir apenas por observação eventual",
        descricao: "As ações dependem da memória e de visitas sem registro sistemático.",
        feedback: "A experiência do produtor é importante, mas sem registro fica mais difícil perceber perdas repetidas.",
        impacto: { controle: -12, desperdicio: 8, risco: 10 }
      },
      {
        id: "registro-rotina",
        titulo: "Criar rotina de registro e acompanhamento",
        descricao: "Chuva, irrigação, solo e produção passam a ser registrados para orientar decisões.",
        feedback: "O acompanhamento melhora a leitura da propriedade e reduz decisões tomadas tarde demais.",
        impacto: { controle: 12, desperdicio: -6, risco: -6, producao: 5 }
      },
      {
        id: "automacao-responsavel",
        titulo: "Usar monitoramento e automação responsável",
        descricao: "Dados e alertas apoiam irrigação, manejo e uso de recursos sem substituir a responsabilidade humana.",
        feedback: "A automação bem aplicada aumenta precisão e ajuda a produzir com menor desperdício.",
        impacto: { controle: 24, agua: 8, producao: 12, desperdicio: -12, risco: -12 }
      }
    ]
  }
];

const diagnosticoRecursos = {
  agua: {
    titulo: "Água",
    texto:
      "A água precisa entrar na lavoura na quantidade certa. Quando a irrigação segue apenas o costume, sem medir a umidade do solo ou considerar a previsão do tempo, parte desse recurso vira desperdício.",
    sinais: [
      "irrigação feita em horário fixo, mesmo depois de chuva recente",
      "poças, escorrimento ou áreas secas dentro do mesmo talhão",
      "falta de registro sobre volume aplicado e resposta da cultura"
    ],
    consequencia:
      "A propriedade pode gastar mais água e energia para obter o mesmo resultado. Em períodos de estiagem, essa falta de controle reduz a segurança da produção."
  },
  solo: {
    titulo: "Solo",
    texto:
      "O solo é a base da produção. Ele armazena água, nutrientes e vida. Quando fica descoberto, compactado ou manejado sem rotação, perde estrutura e responde pior às variações do clima.",
    sinais: [
      "enxurrada levando terra após chuva forte",
      "camada endurecida dificultando a infiltração da água",
      "baixa cobertura de palhada entre uma safra e outra"
    ],
    consequencia:
      "A fertilidade cai aos poucos, a lavoura sofre mais com seca e chuva intensa, e a produção passa a depender de correções cada vez mais caras."
  },
  energia: {
    titulo: "Energia",
    texto:
      "Bombas, máquinas, resfriamento e armazenagem consomem energia todos os dias. Sem revisão de horários, manutenção e fontes alternativas, o custo cresce junto com o impacto ambiental.",
    sinais: [
      "equipamentos ligados por mais tempo que o necessário",
      "bombas antigas ou sem manutenção frequente",
      "ausência de planejamento para horários de maior consumo"
    ],
    consequencia:
      "O gasto operacional aumenta e deixa menos margem para investir em melhorias. Quando há falhas de energia, a produção e o armazenamento ficam mais vulneráveis."
  },
  biodiversidade: {
    titulo: "Biodiversidade",
    texto:
      "A biodiversidade ajuda a manter equilíbrio no campo. Áreas protegidas, vegetação próxima e variedade de organismos reduzem a pressão de pragas e favorecem serviços naturais, como polinização e controle biológico.",
    sinais: [
      "pouca vegetação nativa perto das áreas produtivas",
      "dependência crescente de controle químico",
      "redução de insetos benéficos e inimigos naturais"
    ],
    consequencia:
      "A lavoura fica mais sensível a desequilíbrios. O manejo tende a ficar mais caro e menos estável, porque a propriedade perde parte da proteção natural."
  },
  producao: {
    titulo: "Produção",
    texto:
      "Produzir mais é importante, mas o ganho precisa continuar nas próximas safras. Quando a produtividade depende de desperdício de água, desgaste do solo ou energia mal utilizada, o resultado fica frágil.",
    sinais: [
      "produtividade boa em uma safra e queda forte na seguinte",
      "aumento de custo para corrigir problemas que se repetem",
      "decisões tomadas tarde, quando o prejuízo já apareceu"
    ],
    consequencia:
      "O aumento de produção pode durar pouco. Sem controle dos recursos, a propriedade entrega resultado imediato, mas perde estabilidade para o futuro."
  }
};

const perguntasQuiz = [
  {
    pergunta: "Por que medir a umidade do solo antes de irrigar pode melhorar a sustentabilidade?",
    opcoes: [
      "Porque elimina toda necessidade de planejamento.",
      "Porque permite aplicar água conforme a necessidade real da cultura.",
      "Porque aumenta o uso de água em todos os períodos.",
      "Porque torna o solo independente da cobertura vegetal."
    ],
    correta: 1,
    explicacao: "Medir antes de irrigar evita aplicação desnecessária e melhora o uso da água."
  },
  {
    pergunta: "Qual prática ajuda a proteger o solo e manter a produção por mais tempo?",
    opcoes: [
      "Revolver o solo continuamente para acelerar qualquer plantio.",
      "Deixar o solo descoberto depois da colheita.",
      "Manter cobertura, rotação de culturas e manejo planejado.",
      "Separar preservação ambiental da produtividade."
    ],
    correta: 2,
    explicacao: "Cobertura e rotação reduzem erosão, melhoram matéria orgânica e favorecem estabilidade."
  },
  {
    pergunta: "Na automação responsável, qual é o papel dos dados?",
    opcoes: [
      "Apoiar decisões mais precisas sobre recursos e manejo.",
      "Substituir qualquer análise humana.",
      "Aumentar o consumo de energia sem necessidade.",
      "Servir apenas para deixar o projeto mais moderno."
    ],
    correta: 0,
    explicacao: "Dados são úteis quando ajudam a decidir melhor e reduzir desperdícios."
  },
  {
    pergunta: "O que diferencia um modelo sustentável de um modelo desequilibrado?",
    opcoes: [
      "O sustentável abandona a produção para preservar.",
      "O desequilibrado sempre produz menos no primeiro ciclo.",
      "O sustentável usa mais recursos naturais para acelerar resultados.",
      "O sustentável busca produtividade com controle, preservação e menor desperdício."
    ],
    correta: 3,
    explicacao: "Sustentabilidade no agro une produção, controle de recursos e cuidado ambiental."
  },
  {
    pergunta: "Qual ideia resume melhor o tema do percurso?",
    opcoes: [
      "Produzir mais deve ignorar limites ambientais.",
      "Produzir melhor exige equilibrar eficiência, tecnologia e preservação.",
      "Sustentabilidade é um assunto separado da produção.",
      "Tecnologia resolve todos os impactos sem planejamento."
    ],
    correta: 1,
    explicacao: "O equilíbrio depende da combinação entre eficiência produtiva, tecnologia e responsabilidade ambiental."
  }
];

document.addEventListener("DOMContentLoaded", iniciarAplicacao);

/* Inicia recursos comuns e executa a lógica específica da página aberta. */
function iniciarAplicacao() {
  iniciarAcessibilidade();
  inserirEixoEquilibrio();

  const paginaAtual = document.body.dataset.pagina;

  if (paginaAtual === "diagnostico") iniciarDiagnostico();
  if (paginaAtual === "decisoes") iniciarDecisoes();
  if (paginaAtual === "impactos") iniciarImpactos();
  if (paginaAtual === "comparacao") iniciarComparacao();
  if (paginaAtual === "quiz") iniciarQuiz();
  if (paginaAtual === "resultado") iniciarResultado();
}

/* Cria uma assinatura visual minimalista para representar equilíbrio entre produção e recursos. */
function inserirEixoEquilibrio() {
  const tela = document.querySelector(".tela-app");

  if (!tela || tela.querySelector(".eixo-equilibrio")) return;

  const eixo = document.createElement("div");
  const producao = document.createElement("span");
  const linha = document.createElement("i");
  const recursos = document.createElement("span");
  const indicadores = calcularIndicadores();
  const mediaRecursos = (indicadores.agua + indicadores.solo + indicadores.biodiversidade + indicadores.energia) / 4;
  const deslocamento = limitarValor(Math.round((indicadores.producao - mediaRecursos) * 0.45), -18, 18);

  eixo.className = "eixo-equilibrio";
  eixo.setAttribute("aria-hidden", "true");
  eixo.style.setProperty("--deslocamento-eixo", `${deslocamento}px`);
  producao.textContent = "produção";
  recursos.textContent = "recursos naturais";

  eixo.append(producao, linha, recursos);
  tela.prepend(eixo);
}

/* =========================================================
   Armazenamento, cálculo e funções utilitárias
   ========================================================= */
function carregarDados(chave, valorPadrao) {
  try {
    const dadosSalvos = localStorage.getItem(chave);
    return dadosSalvos ? { ...valorPadrao, ...JSON.parse(dadosSalvos) } : { ...valorPadrao };
  } catch {
    return { ...valorPadrao };
  }
}

function salvarDados(chave, dados) {
  try {
    localStorage.setItem(chave, JSON.stringify(dados));
  } catch {
    /* Caso o navegador bloqueie armazenamento local, a navegação continua funcionando sem persistência. */
  }
}

function carregarPercurso() {
  const salvo = carregarDados(CHAVE_PERCURSO, estadoPadrao);

  return {
    situacaoAtual: Number.isInteger(salvo.situacaoAtual) ? salvo.situacaoAtual : 0,
    escolhas: {
      ...estadoPadrao.escolhas,
      ...(salvo.escolhas || {})
    }
  };
}

function salvarPercurso(estado) {
  salvarDados(CHAVE_PERCURSO, estado);
}

function limitarValor(valor, minimo, maximo) {
  return Math.max(minimo, Math.min(maximo, valor));
}

function obterOpcaoPorChave(chave, idOpcao) {
  const situacao = situacoesDecisao.find((item) => item.chave === chave);
  return situacao?.opcoes.find((opcao) => opcao.id === idOpcao) || null;
}

function obterEscolhasDetalhadas() {
  const percurso = carregarPercurso();

  return situacoesDecisao.map((situacao) => {
    const opcao = obterOpcaoPorChave(situacao.chave, percurso.escolhas[situacao.chave]);
    return { situacao, opcao };
  });
}

/* Calcula indicadores simulados a partir das decisões escolhidas pelo usuário. */
function calcularIndicadores() {
  const indicadores = {
    agua: 50,
    solo: 50,
    biodiversidade: 50,
    energia: 50,
    producao: 50,
    controle: 50,
    desperdicio: 50,
    risco: 50
  };

  obterEscolhasDetalhadas().forEach(({ opcao }) => {
    if (!opcao) return;

    Object.entries(opcao.impacto).forEach(([chave, valor]) => {
      indicadores[chave] += valor;
    });
  });

  Object.keys(indicadores).forEach((chave) => {
    indicadores[chave] = Math.round(limitarValor(indicadores[chave], 0, 100));
  });

  indicadores.sustentabilidade = Math.round(
    limitarValor(
      indicadores.agua * 0.17 +
        indicadores.solo * 0.17 +
        indicadores.biodiversidade * 0.14 +
        indicadores.energia * 0.12 +
        indicadores.producao * 0.16 +
        indicadores.controle * 0.14 +
        (100 - indicadores.desperdicio) * 0.06 +
        (100 - indicadores.risco) * 0.04,
      0,
      100
    )
  );

  return indicadores;
}

function classificarSistema(indicadores) {
  if (indicadores.sustentabilidade >= 82) return "sistema equilibrado";
  if (indicadores.sustentabilidade >= 66) return "sistema em transição";
  if (indicadores.sustentabilidade >= 50) return "produção com risco";
  return "sistema sob pressão";
}

function contarEscolhasFeitas() {
  const percurso = carregarPercurso();
  return Object.values(percurso.escolhas).filter(Boolean).length;
}

function carregarDiagnostico() {
  const diagnostico = carregarDados(CHAVE_DIAGNOSTICO, { visitados: [] });

  return {
    visitados: Array.isArray(diagnostico.visitados) ? diagnostico.visitados : []
  };
}

function preencherLista(elemento, itens) {
  if (!elemento) return;

  elemento.textContent = "";

  itens.forEach((texto) => {
    const item = document.createElement("li");
    item.textContent = texto;
    elemento.appendChild(item);
  });
}

function definirForca(elemento, quantidade) {
  if (!elemento) return;

  const rotulo = elemento.querySelector(".intensidade-impacto");

  if (quantidade >= 3) {
    elemento.dataset.forca = "alta";
    if (rotulo) rotulo.textContent = "peso alto";
    return;
  }

  if (quantidade === 2) {
    elemento.dataset.forca = "media";
    if (rotulo) rotulo.textContent = "peso médio";
    return;
  }

  elemento.dataset.forca = "baixa";
  if (rotulo) rotulo.textContent = "peso baixo";
}

/* =========================================================
   Acessibilidade integrada ao cabeçalho
   ========================================================= */
function iniciarAcessibilidade() {
  const botaoTema = document.getElementById("botaoTema");
  const botaoFonteMenor = document.getElementById("botaoFonteMenor");
  const botaoFonteMaior = document.getElementById("botaoFonteMaior");
  const preferencias = carregarDados(CHAVE_PREFERENCIAS, { tema: "claro", fonte: 0 });

  aplicarPreferencias(preferencias);

  if (!botaoTema || !botaoFonteMenor || !botaoFonteMaior) return;

  botaoTema.addEventListener("click", () => {
    preferencias.tema = preferencias.tema === "escuro" ? "claro" : "escuro";
    salvarDados(CHAVE_PREFERENCIAS, preferencias);
    aplicarPreferencias(preferencias);
  });

  botaoFonteMenor.addEventListener("click", () => {
    preferencias.fonte = limitarValor(preferencias.fonte - 1, -1, 2);
    salvarDados(CHAVE_PREFERENCIAS, preferencias);
    aplicarPreferencias(preferencias);
  });

  botaoFonteMaior.addEventListener("click", () => {
    preferencias.fonte = limitarValor(preferencias.fonte + 1, -1, 2);
    salvarDados(CHAVE_PREFERENCIAS, preferencias);
    aplicarPreferencias(preferencias);
  });
}

/* Aplica modo claro/escuro e escala de fonte sem recarregar a página. */
function aplicarPreferencias(preferencias) {
  const botaoTema = document.getElementById("botaoTema");
  const temaEscuro = preferencias.tema === "escuro";

  document.body.classList.toggle("modo-escuro", temaEscuro);
  document.body.classList.remove("fonte-menor", "fonte-maior", "fonte-extra");

  if (preferencias.fonte === -1) document.body.classList.add("fonte-menor");
  if (preferencias.fonte === 1) document.body.classList.add("fonte-maior");
  if (preferencias.fonte === 2) document.body.classList.add("fonte-extra");

  if (botaoTema) {
    botaoTema.textContent = temaEscuro ? "Modo claro" : "Contraste";
    botaoTema.setAttribute("aria-pressed", String(temaEscuro));
  }
}

/* =========================================================
   Página de diagnóstico
   ========================================================= */
function iniciarDiagnostico() {
  const botoes = document.querySelectorAll(".item-diagnostico");
  const titulo = document.getElementById("tituloDiagnostico");
  const texto = document.getElementById("textoDiagnostico");
  const contador = document.getElementById("contadorDiagnostico");
  const avancar = document.getElementById("avancarDiagnostico");
  const detalhes = document.getElementById("detalhesDiagnostico");
  const sinais = document.getElementById("sinaisDiagnostico");
  const consequencia = document.getElementById("consequenciaDiagnostico");
  const resumo = document.getElementById("resumoDiagnostico");
  const marcas = document.getElementById("marcasDiagnostico");
  const diagnostico = carregarDiagnostico();
  const totalRecursos = Object.keys(diagnosticoRecursos).length;

  if (!botoes.length || !titulo || !texto || !contador || !avancar || !detalhes || !sinais || !consequencia || !resumo || !marcas) return;

  function atualizarEstadoVisual(recursoAtivo = "") {
    botoes.forEach((botao) => {
      const chave = botao.dataset.recurso;
      botao.classList.toggle("ativo", chave === recursoAtivo);
      botao.classList.toggle("visitado", diagnostico.visitados.includes(chave));
    });

    marcas.textContent = "";

    Object.entries(diagnosticoRecursos).forEach(([chave, dados]) => {
      const marca = document.createElement("span");
      const visitado = diagnostico.visitados.includes(chave);

      marca.className = "marca-diagnostico";
      marca.classList.toggle("visitado", visitado);
      marca.textContent = dados.titulo;
      marcas.appendChild(marca);
    });

    contador.textContent =
      diagnostico.visitados.length === 0
        ? "Nenhum recurso aberto"
        : `${diagnostico.visitados.length} de ${totalRecursos} recursos analisados`;

    const completo = diagnostico.visitados.length >= totalRecursos;
    avancar.classList.toggle("bloqueado", !completo);
    avancar.setAttribute("aria-disabled", String(!completo));
    avancar.textContent = completo ? "Avançar para decisões" : "Analisar todos os recursos";
    resumo.textContent = completo
      ? "Diagnóstico completo. Agora as decisões podem ser tomadas com base nos riscos observados."
      : `Ainda faltam ${totalRecursos - diagnostico.visitados.length} recursos para completar a leitura.`;
  }

  function atualizarDiagnostico(recurso) {
    const dados = diagnosticoRecursos[recurso];

    if (!dados) return;

    if (!diagnostico.visitados.includes(recurso)) {
      diagnostico.visitados.push(recurso);
      salvarDados(CHAVE_DIAGNOSTICO, diagnostico);
    }

    detalhes.hidden = false;
    titulo.textContent = dados.titulo;
    texto.textContent = dados.texto;
    consequencia.textContent = dados.consequencia;
    preencherLista(sinais, dados.sinais);
    atualizarEstadoVisual(recurso);
  }

  botoes.forEach((botao) => {
    botao.addEventListener("click", () => atualizarDiagnostico(botao.dataset.recurso));
  });

  avancar.addEventListener("click", (evento) => {
    if (diagnostico.visitados.length < totalRecursos) {
      evento.preventDefault();
    }
  });

  diagnostico.visitados = diagnostico.visitados.filter((recurso) => diagnosticoRecursos[recurso]);
  salvarDados(CHAVE_DIAGNOSTICO, diagnostico);

  if (diagnostico.visitados.length > 0) {
    atualizarDiagnostico(diagnostico.visitados[diagnostico.visitados.length - 1]);
  } else {
    atualizarEstadoVisual();
  }
}

/* =========================================================
   Página de decisões
   ========================================================= */
function iniciarDecisoes() {
  const estado = carregarPercurso();
  estado.situacaoAtual = limitarValor(estado.situacaoAtual, 0, situacoesDecisao.length - 1);
  salvarPercurso(estado);
  renderizarSituacao(estado);
}

/* Renderiza a situação atual e seus botões de escolha. */
function renderizarSituacao(estado) {
  const situacao = situacoesDecisao[estado.situacaoAtual];
  const contexto = document.getElementById("contextoSituacao");
  const titulo = document.getElementById("tituloSituacao");
  const texto = document.getElementById("textoSituacao");
  const opcoes = document.getElementById("opcoesDecisao");
  const feedback = document.getElementById("feedbackDecisao");
  const anterior = document.getElementById("botaoSituacaoAnterior");
  const proxima = document.getElementById("botaoSituacaoProxima");
  const situacaoAtual = document.getElementById("situacaoAtual");
  const leituraOpcao = document.getElementById("leituraOpcao");

  if (!situacao || !contexto || !titulo || !texto || !opcoes || !feedback || !anterior || !proxima || !situacaoAtual || !leituraOpcao) return;

  contexto.textContent = situacao.contexto;
  titulo.textContent = situacao.titulo;
  texto.textContent = situacao.texto;
  situacaoAtual.textContent = `Situação ${estado.situacaoAtual + 1} de ${situacoesDecisao.length}`;
  opcoes.textContent = "";

  const escolhaAtual = estado.escolhas[situacao.chave];
  const opcaoEscolhida = obterOpcaoPorChave(situacao.chave, escolhaAtual);
  feedback.textContent = opcaoEscolhida ? opcaoEscolhida.feedback : "Escolha uma alternativa para registrar a decisão.";
  atualizarLeituraOpcao(leituraOpcao, situacao, opcaoEscolhida);

  situacao.opcoes.forEach((opcao) => {
    const botao = document.createElement("button");
    const nome = document.createElement("strong");
    const descricao = document.createElement("span");

    botao.type = "button";
    botao.className = "opcao-decisao";
    botao.classList.toggle("selecionada", escolhaAtual === opcao.id);
    nome.textContent = opcao.titulo;
    descricao.textContent = opcao.descricao;

    botao.append(nome, descricao);
    botao.addEventListener("click", () => {
      estado.escolhas[situacao.chave] = opcao.id;
      salvarPercurso(estado);
      renderizarSituacao(estado);
    });

    opcoes.appendChild(botao);
  });

  const botaoAnteriorLimpo = anterior.cloneNode(true);
  const botaoProximaLimpo = proxima.cloneNode(true);

  anterior.replaceWith(botaoAnteriorLimpo);
  proxima.replaceWith(botaoProximaLimpo);

  botaoAnteriorLimpo.disabled = estado.situacaoAtual === 0;
  botaoProximaLimpo.textContent = estado.situacaoAtual === situacoesDecisao.length - 1 ? "Concluir decisões" : "Próxima situação";

  botaoAnteriorLimpo.addEventListener("click", () => {
    estado.situacaoAtual = limitarValor(estado.situacaoAtual - 1, 0, situacoesDecisao.length - 1);
    salvarPercurso(estado);
    renderizarSituacao(estado);
  });

  botaoProximaLimpo.addEventListener("click", () => {
    if (!estado.escolhas[situacao.chave]) {
      feedback.textContent = "Escolha uma alternativa antes de avançar.";
      return;
    }

    if (estado.situacaoAtual === situacoesDecisao.length - 1) {
      window.location.href = "impactos.html";
      return;
    }

    estado.situacaoAtual += 1;
    salvarPercurso(estado);
    renderizarSituacao(estado);
  });

  atualizarTrilhaDecisoes(estado);
  atualizarRegistroDecisoes(estado);
}

/* Mostra, dentro da decisão atual, quais critérios são afetados pela escolha. */
function atualizarLeituraOpcao(elemento, situacao, opcaoEscolhida) {
  elemento.textContent = "";

  const titulo = document.createElement("strong");
  const lista = document.createElement("div");

  lista.className = "lista-criterios";

  if (!opcaoEscolhida) {
    const criterios = new Set();

    situacao.opcoes.forEach((opcao) => {
      Object.keys(opcao.impacto).forEach((chave) => criterios.add(chave));
    });

    titulo.textContent = "Critérios observados nesta situação";

    criterios.forEach((chave) => {
      const item = document.createElement("span");
      item.className = "criterio-decisao";
      item.textContent = nomesIndicadores[chave] || chave;
      lista.appendChild(item);
    });
  } else {
    titulo.textContent = "Efeito registrado pela sua escolha";

    Object.entries(opcaoEscolhida.impacto).forEach(([chave, valor]) => {
      const item = document.createElement("span");
      const direcao = obterDirecaoImpacto(chave, valor);

      item.className = `criterio-decisao ${valor >= 0 ? "positivo" : "negativo"}`;
      item.textContent = `${nomesIndicadores[chave] || chave}: ${direcao}`;
      lista.appendChild(item);
    });
  }

  elemento.append(titulo, lista);
}

function obterDirecaoImpacto(chave, valor) {
  const indicadorInverso = chave === "desperdicio" || chave === "risco";

  if (valor === 0) return "sem mudança";
  if (indicadorInverso) return valor < 0 ? "reduz" : "aumenta";
  return valor > 0 ? "melhora" : "piora";
}

function atualizarTrilhaDecisoes(estado) {
  const itens = document.querySelectorAll("#listaSituacoes li");

  itens.forEach((item, indice) => {
    const situacao = situacoesDecisao[indice];
    item.classList.toggle("ativo", indice === estado.situacaoAtual);
    item.classList.toggle("concluido", Boolean(estado.escolhas[situacao.chave]));
  });
}

function atualizarRegistroDecisoes(estado) {
  const registro = document.getElementById("registroDecisoes");

  if (!registro) return;

  registro.textContent = "";

  situacoesDecisao.forEach((situacao) => {
    const opcao = obterOpcaoPorChave(situacao.chave, estado.escolhas[situacao.chave]);
    const item = document.createElement("p");
    const titulo = document.createElement("strong");
    const texto = document.createElement("span");

    item.className = "registro-item";
    titulo.textContent = situacao.etapa;
    texto.textContent = opcao ? opcao.titulo : "decisão ainda não registrada";

    item.append(titulo, texto);
    registro.appendChild(item);
  });
}

/* =========================================================
   Página de impactos
   ========================================================= */
function iniciarImpactos() {
  const indicadores = calcularIndicadores();
  const impactos = montarImpactos(indicadores);
  const titulo = document.getElementById("tituloImpacto");
  const texto = document.getElementById("textoImpacto");

  preencherLista(document.getElementById("listaGanhos"), impactos.ganhos);
  preencherLista(document.getElementById("listaPerdas"), impactos.perdas);
  preencherLista(document.getElementById("listaRiscos"), impactos.riscos);
  preencherLista(document.getElementById("listaMelhorias"), impactos.melhorias);
  atualizarCadeiaImpactos(document.getElementById("cadeiaImpactos"));

  definirForca(document.querySelector(".ganhos"), impactos.ganhos.length);
  definirForca(document.querySelector(".perdas"), impactos.perdas.length);
  definirForca(document.querySelector(".riscos"), impactos.riscos.length);
  definirForca(document.querySelector(".melhorias"), impactos.melhorias.length);

  if (titulo && texto) {
    titulo.textContent = `Leitura geral: ${classificarSistema(indicadores)}`;
    texto.textContent =
      `Foram registradas ${contarEscolhasFeitas()} de ${situacoesDecisao.length} decisões. ` +
      "As consequências mostram que a sustentabilidade depende da combinação entre uso de água, conservação do solo, energia, biodiversidade e acompanhamento técnico.";
  }
}

function atualizarCadeiaImpactos(elemento) {
  if (!elemento) return;

  elemento.textContent = "";

  obterEscolhasDetalhadas().forEach(({ situacao, opcao }) => {
    const item = document.createElement("p");
    const titulo = document.createElement("strong");
    const texto = document.createElement("span");

    item.className = "elo-impacto";
    item.classList.toggle("registrado", Boolean(opcao));
    titulo.textContent = situacao.etapa;
    texto.textContent = opcao
      ? `${opcao.titulo}: ${opcao.feedback}`
      : "decisão ainda não registrada; volte uma etapa para completar a leitura.";

    item.append(titulo, texto);
    elemento.appendChild(item);
  });
}

function montarImpactos(indicadores) {
  const ganhos = [];
  const perdas = [];
  const riscos = [];
  const melhorias = [];

  if (indicadores.agua >= 65) ganhos.push("A água tende a ser usada com mais critério e menor desperdício.");
  else perdas.push("A água ainda é aplicada com baixa precisão.");

  if (indicadores.solo >= 65) ganhos.push("O solo fica mais protegido contra erosão e perda de matéria orgânica.");
  else riscos.push("O solo permanece vulnerável à compactação, erosão e menor infiltração.");

  if (indicadores.biodiversidade >= 65) ganhos.push("A biodiversidade contribui para maior estabilidade do ambiente produtivo.");
  else perdas.push("A simplificação do ambiente reduz a proteção natural do sistema.");

  if (indicadores.energia >= 65) ganhos.push("A energia passa a ter menor peso ambiental e operacional.");
  else melhorias.push("Rever energia, horários e equipamentos pode reduzir custos e impactos.");

  if (indicadores.controle >= 65) ganhos.push("O acompanhamento técnico ajuda a corrigir problemas antes que eles cresçam.");
  else melhorias.push("Registrar dados de chuva, solo e irrigação melhoraria a tomada de decisão.");

  if (indicadores.desperdicio >= 58) perdas.push("O desperdício ainda transforma recurso natural em custo de produção.");
  else ganhos.push("Menos recursos são perdidos no caminho entre planejamento e produção.");

  if (indicadores.risco >= 58) riscos.push("O sistema fica mais sensível a estiagens, aumento de custo e perda de produtividade.");
  else ganhos.push("A propriedade fica menos dependente de correções emergenciais.");

  if (ganhos.length === 0) ganhos.push("Há espaço para construir ganhos com escolhas mais integradas.");
  if (perdas.length === 0) perdas.push("As perdas principais foram reduzidas pelas decisões registradas.");
  if (riscos.length === 0) riscos.push("Os riscos mais graves foram atenuados, mas ainda exigem acompanhamento.");
  if (melhorias.length === 0) melhorias.push("Manter monitoramento frequente evita que boas decisões percam efeito.");

  return { ganhos, perdas, riscos, melhorias };
}

/* =========================================================
   Página de comparação
   ========================================================= */
function iniciarComparacao() {
  const textoComparacao = document.getElementById("textoComparacao");
  const listaComparacao = document.getElementById("listaComparacao");
  const indicadores = calcularIndicadores();
  const escolhas = obterEscolhasDetalhadas();
  const aproximacoes = [];

  escolhas.forEach(({ situacao, opcao }) => {
    if (!opcao) {
      aproximacoes.push(`${situacao.etapa}: decisão não registrada.`);
      return;
    }

    const riscoAlto = (opcao.impacto.risco || 0) > 0 || (opcao.impacto.desperdicio || 0) > 0;
    const direcao = riscoAlto ? "aproxima o sistema do modelo desequilibrado" : "aproxima o sistema do modelo sustentável";
    aproximacoes.push(`${situacao.etapa}: ${opcao.titulo.toLowerCase()} ${direcao}.`);
  });

  if (textoComparacao) {
    textoComparacao.textContent =
      `Sua propriedade foi classificada como ${classificarSistema(indicadores)}. ` +
      "A comparação mostra que o resultado não vem de uma decisão isolada, mas do padrão criado pelas escolhas ao longo do percurso.";
  }

  preencherLista(listaComparacao, aproximacoes);
}

/* =========================================================
   Quiz educativo
   ========================================================= */
function iniciarQuiz() {
  const pergunta = document.getElementById("perguntaQuiz");
  const opcoes = document.getElementById("opcoesQuiz");
  const feedback = document.getElementById("feedbackQuiz");
  const proxima = document.getElementById("proximaPergunta");
  const andamento = document.getElementById("andamentoQuiz");
  const pontuacao = document.getElementById("pontuacaoQuiz");
  const contexto = document.getElementById("contextoQuiz");

  if (!pergunta || !opcoes || !feedback || !proxima || !andamento || !pontuacao) return;

  const estadoQuiz = carregarDados(CHAVE_QUIZ, {
    indice: 0,
    pontos: 0,
    respondida: false,
    finalizado: false
  });

  if (contexto) {
    contexto.textContent = `Até aqui, ${contarEscolhasFeitas()} decisões foram registradas. Use essa leitura para responder.`;
  }

  renderizarPerguntaQuiz(estadoQuiz, pergunta, opcoes, feedback, proxima, andamento, pontuacao);

  proxima.addEventListener("click", () => {
    if (estadoQuiz.finalizado) {
      window.location.href = "resultado.html";
      return;
    }

    if (estadoQuiz.indice >= perguntasQuiz.length - 1) {
      estadoQuiz.finalizado = true;
      estadoQuiz.respondida = false;
      salvarDados(CHAVE_QUIZ, estadoQuiz);
      renderizarPerguntaQuiz(estadoQuiz, pergunta, opcoes, feedback, proxima, andamento, pontuacao);
      return;
    }

    estadoQuiz.indice += 1;
    estadoQuiz.respondida = false;
    salvarDados(CHAVE_QUIZ, estadoQuiz);
    renderizarPerguntaQuiz(estadoQuiz, pergunta, opcoes, feedback, proxima, andamento, pontuacao);
  });
}

function renderizarPerguntaQuiz(estadoQuiz, pergunta, opcoes, feedback, proxima, andamento, pontuacao) {
  opcoes.textContent = "";
  pontuacao.textContent = `${estadoQuiz.pontos} pontos`;

  if (estadoQuiz.finalizado) {
    pergunta.textContent = "Quiz concluído";
    andamento.textContent = `${perguntasQuiz.length} de ${perguntasQuiz.length} perguntas`;
    feedback.textContent = "Sua pontuação será considerada no relatório final.";
    proxima.textContent = "Ver relatório";
    proxima.disabled = false;
    return;
  }

  const item = perguntasQuiz[estadoQuiz.indice];

  pergunta.textContent = item.pergunta;
  andamento.textContent = `Pergunta ${estadoQuiz.indice + 1} de ${perguntasQuiz.length}`;
  feedback.textContent = "";
  proxima.textContent = estadoQuiz.indice === perguntasQuiz.length - 1 ? "Finalizar quiz" : "Próxima";
  proxima.disabled = true;

  item.opcoes.forEach((textoOpcao, indiceOpcao) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "opcao-quiz";
    botao.textContent = textoOpcao;

    botao.addEventListener("click", () => {
      responderPerguntaQuiz(indiceOpcao, estadoQuiz, item, opcoes, feedback, proxima, pontuacao);
    });

    opcoes.appendChild(botao);
  });
}

function responderPerguntaQuiz(indiceOpcao, estadoQuiz, item, opcoes, feedback, proxima, pontuacao) {
  if (estadoQuiz.respondida) return;

  const acertou = indiceOpcao === item.correta;
  estadoQuiz.respondida = true;

  if (acertou) estadoQuiz.pontos += 20;

  Array.from(opcoes.children).forEach((botao, indiceBotao) => {
    botao.disabled = true;

    if (indiceBotao === item.correta) botao.classList.add("correta");
    if (indiceBotao === indiceOpcao && !acertou) botao.classList.add("errada");
  });

  feedback.textContent = acertou ? `Correto. ${item.explicacao}` : `Ainda não. ${item.explicacao}`;
  pontuacao.textContent = `${estadoQuiz.pontos} pontos`;
  proxima.disabled = false;
  salvarDados(CHAVE_QUIZ, estadoQuiz);
}

/* =========================================================
   Página de resultado
   ========================================================= */
function iniciarResultado() {
  const indicadores = calcularIndicadores();
  const quiz = carregarDados(CHAVE_QUIZ, { pontos: 0, finalizado: false });
  const pontuacaoQuiz = quiz.finalizado ? quiz.pontos : 0;
  const indiceFinal = Math.round(indicadores.sustentabilidade * 0.86 + pontuacaoQuiz * 0.14);
  const perfil = obterPerfilFinal(indiceFinal);

  preencherTexto("perfilResultado", perfil.titulo);
  preencherTexto("textoResultado", perfil.texto);
  preencherTexto("resultadoAgua", `${indicadores.agua}/100`);
  preencherTexto("resultadoSolo", `${indicadores.solo}/100`);
  preencherTexto("resultadoEnergia", `${indicadores.energia}/100`);
  preencherTexto("resultadoQuiz", quiz.finalizado ? `${pontuacaoQuiz}/100` : "não concluído");
  preencherTexto("analiseResultado", gerarAnalise(indicadores, pontuacaoQuiz));
  preencherLista(document.getElementById("pontosFortesResultado"), gerarPontosFortes(indicadores));
  preencherLista(document.getElementById("pontosFracosResultado"), gerarPontosFracos(indicadores));
  preencherLista(document.getElementById("recomendacoesResultado"), gerarRecomendacoes(indicadores, pontuacaoQuiz, quiz.finalizado));

  const reiniciar = document.getElementById("reiniciarPercurso");

  if (reiniciar) {
    reiniciar.addEventListener("click", () => {
      localStorage.removeItem(CHAVE_PERCURSO);
      localStorage.removeItem(CHAVE_QUIZ);
      window.location.href = "index.html";
    });
  }
}

function preencherTexto(id, texto) {
  const elemento = document.getElementById(id);
  if (elemento) elemento.textContent = texto;
}

function obterPerfilFinal(indiceFinal) {
  if (indiceFinal >= 84) {
    return {
      titulo: "Relatório: equilíbrio consistente",
      texto: "As decisões formam um sistema com boa relação entre produtividade, conservação e controle de recursos."
    };
  }

  if (indiceFinal >= 68) {
    return {
      titulo: "Relatório: equilíbrio em construção",
      texto: "O percurso indica avanços importantes, mas algumas escolhas ainda podem gerar desperdício ou risco ambiental."
    };
  }

  if (indiceFinal >= 50) {
    return {
      titulo: "Relatório: produção com risco",
      texto: "A produção pode acontecer, porém parte do resultado depende de recursos usados com baixa eficiência."
    };
  }

  return {
    titulo: "Relatório: sistema sob pressão",
    texto: "As escolhas atuais deixam a propriedade vulnerável e exigem mudanças para manter a produção no futuro."
  };
}

function gerarAnalise(indicadores, pontuacaoQuiz) {
  return (
    `O índice simulado de sustentabilidade é ${indicadores.sustentabilidade}/100. ` +
    `A leitura considera água, solo, biodiversidade, energia, produção, controle, desperdício e risco. ` +
    `A pontuação do quiz foi ${pontuacaoQuiz}/100, usada apenas como apoio para indicar compreensão do percurso.`
  );
}

function gerarPontosFortes(indicadores) {
  const pontos = [];

  if (indicadores.agua >= 65) pontos.push("Uso de água mais controlado.");
  if (indicadores.solo >= 65) pontos.push("Solo com melhor proteção e estabilidade.");
  if (indicadores.biodiversidade >= 65) pontos.push("Biodiversidade mais integrada à produção.");
  if (indicadores.energia >= 65) pontos.push("Energia com menor pressão ambiental.");
  if (indicadores.controle >= 65) pontos.push("Decisões com melhor acompanhamento técnico.");
  if (indicadores.producao >= 65) pontos.push("Produção favorecida por manejo mais planejado.");

  return pontos.length ? pontos : ["Ainda não há ponto forte consolidado. O percurso precisa de decisões mais integradas."];
}

function gerarPontosFracos(indicadores) {
  const pontos = [];

  if (indicadores.agua < 65) pontos.push("Uso de água ainda pouco preciso.");
  if (indicadores.solo < 65) pontos.push("Solo com proteção insuficiente.");
  if (indicadores.biodiversidade < 65) pontos.push("Biodiversidade com participação limitada no sistema.");
  if (indicadores.energia < 65) pontos.push("Energia ainda pode gerar custo e impacto elevados.");
  if (indicadores.controle < 65) pontos.push("Acompanhamento técnico abaixo do ideal.");
  if (indicadores.desperdicio >= 58) pontos.push("Desperdício permanece como risco produtivo e ambiental.");
  if (indicadores.risco >= 58) pontos.push("O sistema segue sensível a estiagens, custos e perda de estabilidade.");

  return pontos.length ? pontos : ["Os principais pontos fracos foram reduzidos, mas precisam de acompanhamento constante."];
}

function gerarRecomendacoes(indicadores, pontuacaoQuiz, quizFinalizado) {
  const recomendacoes = [];

  if (indicadores.agua < 70) recomendacoes.push("Medir a irrigação e evitar rotina fixa.");
  if (indicadores.solo < 70) recomendacoes.push("Ampliar cobertura do solo e rotação de culturas.");
  if (indicadores.energia < 70) recomendacoes.push("Revisar consumo e considerar energia renovável.");
  if (indicadores.controle < 70) recomendacoes.push("Registrar chuva, solo, irrigação e produtividade.");
  if (indicadores.biodiversidade < 70) recomendacoes.push("Preservar áreas naturais e diversificar o manejo.");
  if (quizFinalizado && pontuacaoQuiz < 60) {
    recomendacoes.push("Revisar diagnóstico, impactos e comparação para consolidar a lógica do equilíbrio.");
  }

  if (recomendacoes.length === 0) {
    recomendacoes.push("Manter monitoramento frequente, pois sustentabilidade depende de revisão contínua das decisões.");
  }

  return recomendacoes;
}
