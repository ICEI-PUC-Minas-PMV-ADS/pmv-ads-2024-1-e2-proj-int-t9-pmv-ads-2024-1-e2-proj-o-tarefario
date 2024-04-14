# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

![diagrama de classes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t9-pmv-ads-2024-1-e2-proj-o-tarefario/assets/128853409/da9fafc2-157a-4b84-bf57-09f5eff1da01)

## Modelo ER (Projeto Conceitual)

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.
![Diagrama ER - Tarefário](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e2-proj-int-t9-pmv-ads-2024-1-e2-proj-o-tarefario/assets/113072581/8354f176-1d97-4ad2-94fb-bea082d80c61)

Ferramenta utilizada para geração deste artefato: LucidChart.


## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.

![BD](img/BD.png)

Com essa estrutura básica, um usuário pode ter várias tarefas associadas a ele e podendo realizar as operções a seguir:

- Inclusão de Tarefa: Quando um usuário cria uma nova tarefa, os detalhes da tarefa são inseridos na tabela de Tarefa, com o ID do usuário associado.
- Remoção de Tarefa: Quando um usuário exclui uma tarefa, a linha correspondente na tabela de Tarefa é removida.
- Edição de Tarefa: Quando um usuário edita uma tarefa, os detalhes da tarefa são atualizados na tabela de Tarefa.

Além disso, é importante garantir a integridade referencial, ou seja, garantir que os IDs de usuário nas tarefas correspondam aos IDs existentes na tabela de Usuário.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
