<img src="public/assets/logo-horizontal.png" width="600px">

# Comunidade Gamecube

Projeto avaliativo proposto em sala de aula, que visa o desenvolvimento de um website com formulário de cadastro.

# Instruções para o projeto:
▪ Tema que represente você ou algo de seu gosto.
▪ Utilizar HTML, CSS, e validações de formulários em JavaScript.
▪ Aplicação da API NodeJS para cadastro e/ou consulta no banco de dados.
▪ Foco no aprendizado individual e aplicação das disciplinas técnicas do semestre.

# Tema:
Nintendo Gamecube

# Projeto viabilizado pela aplicação Web-data-viz feito pela faculdade SPTECH, instruções sobre como utilizar a aplicação:

<img src="https://user-images.githubusercontent.com/46379117/192358781-9ca879e4-e55e-4d0d-b876-f9a4a2ed9ae8.png" width="600px">

_Web Data Visualization = Visualização de Dados na Web_

_Implementação de Referência para o seu Projeto de Primeiro Semestre_

<hr>

# Como usar

1. Clone este repositório em sua máquina.


1. Crie, no Banco de Dados, as tabelas necessárias para o funcionamento deste projeto.
- Siga as instruções no arquivo **/src/database/script-tabelas.sql**


3. Acesse o arquivo **app.js** e parametrize o ambiente.
- Se você estiver utilizando o Ambiente de Produção (remoto), comente a linha 2 e deixe habilitada a linha 1 onde está o valor **var ambiente_processo = 'producao';**
- Se você estiver utilizando o Ambiente de Desenvolvimento (local), comente a linha 1 e deixe habilitada a linha 2 onde está o valor **var ambiente_processo = 'desenvolvimento';**

4. Adicione as credenciais de Banco de Dados no arquivo **.env** ou em **.env.dev**, seguindo as instruções neste.

5. Acesse este repositório no seu terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento do projeto. As bibliotecas a serem instaladas estão listadas no arquivo **package.json** então é muito importante que este não seja alterado. Será criada uma nova pasta/diretório chamado **node_modules** quando o comando for finalizado, que é onde as bibliotecas estão localizadas. Não altere a pasta/diretório._

```
npm start
``` 

_O comando acima irá iniciar seu projeto e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

6. Para "ver" seu projeto funcionando, acesse em seu navegador o caminho **informado no terminal**.

7. Caso queira parar a execução, tecle **CTRL+C** no terminal em que o projeto está rodando.