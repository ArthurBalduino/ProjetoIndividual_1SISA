var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].id,
                            nome: resultadoAutenticar[0].nome,
                            dtNasc: resultadoAutenticar[0].dtNasc,
                            email: resultadoAutenticar[0].email,
                            senha: resultadoAutenticar[0].senha,
                            jogo: resultadoAutenticar[0].fk_jogo,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var dtNasc = req.body.dtNascServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var fk_jogo = req.body.jogoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (dtNasc == undefined) {
        res.status(400).send("Sua data de nascimento está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fk_jogo == undefined) {
        res.status(400).send("Seu jogo favorito está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, dtNasc, email, senha, fk_jogo)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarFavoritos(req, res) {

    usuarioModel.buscarFavoritos()

        .then((resultado) => {

            res.json(resultado);

        })

        .catch((erro) => {
            console.log(erro);
            console.log(
                "\nHouve um erro ao buscar os dados fk_jogo! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarUsuarios(req, res) {
    usuarioModel.buscarUsuarios()
        .then((resultado) => { res.json(resultado); })
        .catch((erro) => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function favoritosHome(req, res) {
    usuarioModel.favoritosHome()
        .then(resultado => { res.json(resultado); })
        .catch(erro => {
            console.log(erro);
            res.status(500)
                .json(erro.sqlMessage);
        });
}

function listarCadastros(req, res) {
    usuarioModel.listarCadastros()
        .then(resultado => res.json(resultado))
        .catch(erro =>
            res.status(500)
                .json(erro.sqlMessage));
}

function mediaIdade(req, res) {
    usuarioModel.mediaIdade()
        .then(resultado => res.json(resultado))
        .catch(erro =>
            res.status(500)
                .json(erro.sqlMessage));
}

function buscarReview(req, res) {
    usuarioModel.buscarReview()
    .then(resultado => res.json(resultado))
    .catch(erro => 
        res.status(500).json(erro.sqlMessage)
    );
}

function buscarTentativa(req, res) {
    usuarioModel.buscarTentativa()
    .then(resultado => res.json(resultado))
    .catch(erro =>
        res.status(500).json(erro.sqlMessage)
    );
}

function buscarQuiz(req, res) {
  const idQuiz = req.params.idQuiz;

  usuarioModel.buscarQuiz(idQuiz)
    .then(resultado => res.json(resultado))
    .catch(erro => {
      console.log(erro);
      res.status(500).json(erro.sqlMessage);
    });
}

function registrarTentativa(req, res) {
  const { idUsuario, idQuiz, acertos, erros } = req.body;

  usuarioModel
    .registrarTentativa(idUsuario, idQuiz, acertos, erros)
    .then(resultado => res.json(resultado))
    .catch(erro => res.status(500).json(erro.sqlMessage));
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
}