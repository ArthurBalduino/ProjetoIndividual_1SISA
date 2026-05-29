var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/favoritos", function (req, res) {
    usuarioController.buscarFavoritos(req, res);
});

router.get("/usuarios", function (req, res) {
    usuarioController.buscarUsuarios(req, res);
});

router.get("/favoritos-home", function (req, res) {
    usuarioController.favoritosHome(req, res);
});

router.get("/cadastros", (req, res) =>
    usuarioController.listarCadastros(req, res)
);

router.get("/media-idade", (req, res) =>
    usuarioController.mediaIdade(req, res)
);

router.get("/reviews", (req, res) =>
    usuarioController.buscarReview(req, res)
);

router.get("/tentativas", (req, res) =>
    usuarioController.buscarTentativa(req, res)
);

router.get("/quiz/:idQuiz", (req, res) =>
  usuarioController.buscarQuiz(req, res)
);

router.post("/tentativa", (req, res) =>
  usuarioController.registrarTentativa(req, res)
);

module.exports = router;