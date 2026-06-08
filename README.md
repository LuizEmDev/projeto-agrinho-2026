# Agro forte, futuro sustentável

Projeto educativo desenvolvido para o **Concurso Agrinho 2026**, na **Categoria Programação**, **Subcategoria 3: Programação Front-End com HTML, CSS e JavaScript**.

## Tema oficial

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente**

## Proposta

O projeto é uma experiência interativa guiada. Ele não foi estruturado como landing page, site institucional, dashboard ou sistema administrativo.

O visitante percorre telas curtas, toma decisões e recebe um relatório final. A ideia central é mostrar que sustentabilidade no campo não significa produzir menos, mas produzir com mais planejamento, controle dos recursos naturais e responsabilidade ambiental.

## Tecnologias utilizadas

O projeto usa apenas:

- HTML5;
- CSS3;
- JavaScript puro.

Não foram utilizados frameworks, bibliotecas externas, Bootstrap, Tailwind, React, Vue, jQuery, templates prontos, imagens de banco de imagens ou imagens geradas por IA.

## Arquitetura das telas

- `index.html`: entrada da experiência, com pergunta central e termo de análise da jornada.
- `diagnostico.html`: mesa de análise com água, solo, energia, biodiversidade e produção.
- `decisoes.html`: situações de manejo apresentadas uma por vez.
- `impactos.html`: consequências das escolhas em ganhos, perdas, riscos, melhorias e cadeia de impactos.
- `comparacao.html`: comparação entre cenário desequilibrado e cenário sustentável.
- `quiz.html`: quiz integrado à jornada, com pontuação e feedback.
- `resultado.html`: relatório final com análise, pontos fortes, pontos fracos e recomendações.
- `conclusao.html`: fechamento sobre equilíbrio entre produção, tecnologia e preservação.
- `styles.css`: identidade visual, layout em telas, responsividade e acessibilidade.
- `script.js`: interações, cálculo de impacto, armazenamento local, quiz e relatório.

## Funcionalidades em JavaScript

O JavaScript manipula o DOM para:

- alternar modo claro e escuro;
- aumentar e diminuir o tamanho da fonte;
- liberar a etapa de decisões apenas após abrir todos os recursos do diagnóstico;
- apresentar uma decisão por vez;
- mostrar os critérios afetados por cada decisão;
- salvar escolhas no `localStorage`;
- calcular indicadores simulados de água, solo, biodiversidade, energia, produção, controle, desperdício e risco;
- gerar consequências e relacionar cada decisão com seu efeito;
- personalizar a comparação entre cenários;
- renderizar quiz com feedback imediato;
- montar relatório final com base nas escolhas;
- reiniciar a jornada.

## Identidade visual

A interface evita:

- hero tradicional;
- menu grande com vários links;
- sidebar;
- aparência de dashboard;
- cards decorativos em excesso;
- logotipo fictício;
- mascote;
- medalhas, troféus ou selos;
- ilustrações genéricas de fazenda;
- imagens geradas por IA.

O visual foi construído com:

- topo compacto;
- marcador de etapa;
- eixo visual de equilíbrio entre produção e recursos naturais;
- composição por tipografia, alinhamento e espaçamento;
- tipografia forte;
- bastante espaço em branco;
- cores ligadas ao tema: verde profundo, verde médio, bege terra, branco gelo e amarelo solar.

## Acessibilidade

O projeto inclui:

- link para pular direto ao conteúdo;
- foco visível em botões e links;
- modo claro e escuro;
- controle de tamanho de fonte;
- navegação por etapas;
- textos em português brasileiro;
- responsividade para desktop e celular.

## Conteúdo educativo

O percurso trabalha:

- uso responsável da água;
- conservação do solo;
- preservação da biodiversidade;
- eficiência energética;
- tecnologia e automação responsável;
- planejamento produtivo;
- comparação entre manejo desequilibrado e sustentável.

Mensagem central:

> Produzir melhor exige equilibrar eficiência, tecnologia, preservação e responsabilidade no uso dos recursos naturais.

## Créditos e referências

Não há imagens externas no projeto. Os elementos visuais foram criados com HTML, CSS e JavaScript próprios.

Referências conceituais:

- Regulamento Agrinho 2026 - Categoria Programação;
- Programa Agrinho - Sistema FAEP/SENAR-PR;
- materiais públicos da Embrapa sobre plantio direto, conservação do solo, uso racional da água, integração produtiva e agricultura de precisão.

## Uso de IA

Houve apoio de IA para planejamento, revisão de linguagem, organização das telas, criação da lógica JavaScript e melhoria da identidade visual.

Prompt resumido utilizado:

> Refazer o projeto como uma experiência educativa guiada para o tema “Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente”, usando apenas HTML, CSS e JavaScript puro. Remover aparência de landing page, hero tradicional, navbar grande e dashboard. Criar telas curtas com diagnóstico clicável, decisões por etapa, impactos, comparação, quiz, relatório e conclusão.

## Como usar

Abra o arquivo `index.html` no navegador e siga a jornada.

As escolhas feitas em `decisoes.html` ficam salvas no navegador e influenciam as telas seguintes.

Para reiniciar, acesse `resultado.html` e clique em **Reiniciar**.
