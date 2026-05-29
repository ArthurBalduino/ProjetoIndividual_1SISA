var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, dtNasc, email, fk_jogo FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, dtNasc, email, senha, fk_jogo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, dtNasc, email, senha, fk_jogo);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, dtNasc, email, senha, fk_jogo) VALUES ('${nome}', '${dtNasc}', '${email}', '${senha}', '${fk_jogo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function favoritosHome() {

    const instrucaoSql = `

    SELECT jogos.id, jogos.nome,
        COUNT(usuario.id) AS total, ROUND(COUNT(usuario.id) * 100.0 / (SELECT COUNT(*)
        FROM usuario WHERE fk_jogo IS NOT NULL), 0) AS porcentagem
    FROM jogos
    LEFT JOIN usuario
        ON usuario.fk_jogo = jogos.id
    GROUP BY
        jogos.id,
        jogos.nome
    ORDER BY jogos.id;
    `;

    return database.executar(instrucaoSql);
}

function buscarFavoritos() {

    const instrucaoSql = `
    SELECT
    jogos.id,
    jogos.nome,
    COUNT(usuario.id) AS total
    FROM usuario
    JOIN jogos
    ON usuario.fk_jogo = jogos.id
    GROUP BY jogos.id, jogos.nome
    ORDER BY jogos.id;
    `;

    return database.executar(instrucaoSql);
}

function buscarUsuarios() {

    const instrucaoSql = `
    SELECT COUNT(id) AS total FROM usuario;
    `;

    return database.executar(instrucaoSql);
}

function listarCadastros() {
    const sql = `
        SELECT 
        usuario.id,
        usuario.nome,
        usuario.email,
        usuario.dtNasc,
        jogos.nome AS jogo
        FROM usuario
        LEFT JOIN jogos ON usuario.fk_jogo = jogos.id
        WHERE usuario.email != 'admin'
        ORDER BY usuario.id DESC
        LIMIT 8;
    `;

  return database.executar(sql);
}

function mediaIdade() {

    const instrucaoSql = `
    SELECT 
      ROUND(AVG(TIMESTAMPDIFF(YEAR, dtNasc, CURDATE()))) AS mediaIdade
    FROM usuario
    WHERE fk_jogo IS NOT NULL;
    `;

    return database.executar(instrucaoSql);
}

function buscarReview() {

    const instrucaoSql = `
    SELECT COUNT(id) AS total FROM review;
    `;

    return database.executar(instrucaoSql);
}

function buscarTentativa() {

    const instrucaoSql = `
    SELECT COUNT(id) AS total FROM tentativas;
    `;

    return database.executar(instrucaoSql);
}

function buscarQuiz(idQuiz) {
  const sql = `
    SELECT
      perguntas.id AS pergunta_id,
      perguntas.pergunta,
      alternativas.texto,
      alternativas.correta
    FROM perguntas
    JOIN alternativas
      ON perguntas.id = alternativas.fk_pergunta
    WHERE perguntas.fk_quiz = ${idQuiz}
    ORDER BY perguntas.id;
  `;

  return database.executar(sql);
}

function registrarTentativa(idUsuario, idQuiz, acertos, erros) {
  const sql = `
    INSERT INTO tentativas
    (fk_quiz, fk_usuario, acertos, erros, dataTentativa)
    VALUES
    (${idQuiz}, ${idUsuario}, ${acertos}, ${erros}, NOW());
  `;

  return database.executar(sql);
}

module.exports = {
    autenticar,
    cadastrar,
    buscarFavoritos,
    buscarUsuarios,
    favoritosHome,
    listarCadastros,
    mediaIdade,
    buscarReview,
    buscarTentativa,
    buscarQuiz,
    registrarTentativa
};