# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

#Persona 1: Marina, 23 anos, estudante Universitária, mora em uma cidade movimentada. Ela vem de uma família de classe média, onde aprendeu desde cedo a valorizar a educação e a busca pelo sucesso profissional.

Educação e Ocupação: Atualmente, Marina está cursando o quarto ano de Engenharia de Software em uma boa universidade. Ela é uma estudante dedicada e ambiciosa, sempre buscando oportunidades para expandir seus conhecimentos e habilidades.

Desafios e Objetivos: Com uma carga horária acadêmica exigente e projetos de pesquisa em andamento, Marina lida constantemente com o desafio de gerenciar seu tempo de forma eficaz. Ela deseja aumentar sua produtividade para equilibrar suas responsabilidades acadêmicas com outras atividades, como estágios e projetos extracurriculares.

Hábitos e Interesses: Marina é uma entusiasta da tecnologia e está sempre procurando por aplicativos e ferramentas que possam ajudá-la a organizar suas tarefas diárias e melhorar sua eficiência. Ela também gosta de praticar atividades físicas regularmente para manter um estilo de vida saudável e equilibrado.

Metas de Uso do Produto/Serviço: Marina está interessada em encontrar uma solução de gerenciamento de tempo que seja intuitiva, personalizável e sincronizável em todos os seus dispositivos. Ela busca uma ferramenta que possa ajudá-la a priorizar tarefas, estabelecer metas realistas e acompanhar seu progresso ao longo do tempo.

#Persona 2: Pedro, 29 anos, Profissional Recém-Formado em Administração de Empresas em uma universidade reconhecida. Ele vive em uma cidade grande e movimentada, onde há muitas oportunidades de emprego, mas também uma competição acirrada.

Educação e Ocupação: Após concluir sua graduação, Pedro conseguiu um emprego como assistente de marketing em uma startup de tecnologia. Ele está animado com a oportunidade de começar sua carreira em uma área que sempre o interessou.

Desafios e Objetivos: Como profissional recém-formado, Pedro está descobrindo os desafios de equilibrar suas responsabilidades no trabalho com sua vida pessoal. Ele quer se destacar em seu novo emprego e progredir em sua carreira, mas às vezes se sente sobrecarregado com a quantidade de tarefas que precisa realizar diariamente.

Hábitos e Interesses: Pedro é um aficionado por tecnologia e está sempre em busca de novas ferramentas e aplicativos que possam ajudá-lo a aumentar sua produtividade e melhorar sua eficiência no trabalho. Ele também gosta de ler sobre desenvolvimento pessoal e assistir a vídeos motivacionais para se manter inspirado e focado em seus objetivos.

Metas de Uso do Produto/Serviço: Pedro está interessado em encontrar uma solução de gerenciamento de tarefas e produtividade que seja fácil de usar, mas também poderosa o suficiente para atender às demandas de sua vida profissional agitada. Ele busca uma ferramenta que possa ajudá-lo a priorizar suas tarefas, organizar seu tempo de forma eficaz e colaborar com sua equipe de trabalho de maneira eficiente.

PERSONA #3: Gabriela, 27 anos, administradora.

Quais apps costuma usar: Word, Excel.

Qual o motivação dessa pessoa para usar esses apps: organizar de forma apropriada as rotinas de trabalho, manter registros e documentações.

Quais necessidades ela tem ao utilizar esses apps: segundo ela, a interface dos apps é ultrapassada, não existe um controle para quando as tarefas estão “em andamento”.

O que ela deseja/espera de um bom app para isso: organização, interface agradável e rápida.

PERSONA #4: Augusto, 33 anos, vendedor.

Quais apps costuma usar: utiliza apps de redes sociais como WhatsApp e Instagram, nos quais mantém contato com seus clientes mas não registra suas ações em aplicativos específicos de organização.

Quais necessidades ele tem ao utilizar esses apps: nenhum deles é específico para ordenar as demandas dos seus clientes pois são redes sociais, portanto fazem falta até mesmo ferramentas básicas como um espaço para colocar seus clientes fixos, seus produtos mais procurados e sua rotina diária.

O que ele deseja/espera de um bom app para isso: que seja intuitivo e simples para usuários básicos, de forma que não precise pesquisar demais pra entender o funcionamento da ferramenta.

PERSONA #5: Helena, 58 anos, autônoma.

Quais apps costuma usar: Utiliza ferramentas de organização padrão de seu smartphone, como “Agenda” e “Anotações”.

Quais necessidades ele tem ao utilizar esses apps: interface não orienta uma usuária menos ligada à Era Digital como ela, falta algo que guie e ajude a utilizar os apps em questão da melhor maneira possível. Ela os utiliza principalmente visando a organização de suas tarefas domésticas como compras e contas à pagar no mês.

O que ela deseja/espera de um bom app para isso: que seja fluido, eficaz, simples e intuitivo, se preocupando com usuários que ainda estão se adaptando à tecnologia.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| A aplicação deve permitir que o usuário gerencie suas tarefas | ALTA | 
|RF-002| A aplicação deve emitir um relatório de tarefas realizadas no mês   | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| A aplicação deve ser responsiva | MÉDIA | 
|RNF-002| A aplicação deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso


O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.
![diagramauso](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t9-pmv-ads-2024-1-e2-proj-o-tarefario/assets/130309407/f38a10ee-402a-4193-9837-3beeff76fd97)


> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)
