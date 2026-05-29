-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE comunidadeGC;
USE comunidadeGC;

CREATE TABLE jogos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    lancamento DATE,
    genero VARCHAR(45)
);

CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    dtNasc DATE,
    email VARCHAR(45),
    senha VARCHAR(45),
    fk_jogo INT,
    CONSTRAINT fkUsuarioJogo
        FOREIGN KEY (fk_jogo) REFERENCES jogos(id)
);

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    descricao VARCHAR(255)
);

CREATE TABLE perguntas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_quiz INT,
    pergunta VARCHAR(255),

    CONSTRAINT fkPerguntaQuiz
        FOREIGN KEY (fk_quiz) REFERENCES quiz(id)
);

CREATE TABLE alternativas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_pergunta INT,
    texto VARCHAR(45),
    correta TINYINT,
    CONSTRAINT fkAlternativaPergunta
        FOREIGN KEY (fk_pergunta) REFERENCES perguntas(id),
        
	CONSTRAINT chkCorreta CHECK (correta IN(0,1))
);

CREATE TABLE tentativas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_quiz INT,
    fk_usuario INT,
    acertos INT,
    erros INT,
    dataTentativa DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fkTentativaQuiz
        FOREIGN KEY (fk_quiz) REFERENCES quiz(id),
    CONSTRAINT fkTentativaUsuario
        FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_jogo INT,
    titulo VARCHAR(45),
    descricao VARCHAR(255),
    dataReview DATETIME DEFAULT CURRENT_TIMESTAMP,
    nota INT,
    CONSTRAINT fkReviewUsuario
        FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    CONSTRAINT fkReviewJogo
        FOREIGN KEY (fk_jogo) REFERENCES jogos(id)
);

INSERT INTO jogos (nome, lancamento, genero) VALUES
('The Legend of Zelda: Wind Waker', '2002-12-13', 'Ação/Aventura'),
('Super Smash Bros. Melee', '2001-11-21', 'Luta'),
('Metroid Prime', '2002-11-17', 'FPS/Aventura'),
('Mario Kart: Double Dash!!', '2003-11-07', 'Corrida');

INSERT INTO usuario (nome, email, senha) VALUES
('Arthur', 'admin', 'admin');

INSERT INTO quiz (titulo, descricao) VALUES
('Quiz Zelda Wind Waker', 'Teste seus conhecimentos sobre Zelda: Wind Waker'),
('Quiz Mario Kart Double Dash', 'Mostre que você domina Mario Kart: Double Dash!!');

-- Quiz
INSERT INTO quiz (titulo, descricao) VALUES
('Quiz Zelda Wind Waker', 'Teste seus conhecimentos sobre Zelda: Wind Waker'),
('Quiz Mario Kart Double Dash', 'Mostre que você domina Mario Kart: Double Dash!!');


-- Quiz ZELDA

INSERT INTO perguntas (fk_quiz, pergunta) VALUES
(1,'Qual é o nome da irmã de Link?'),
(1,'Qual é o principal meio de transporte do jogo?'),
(1,'Quem é o principal vilão do jogo?'),
(1,'Qual é o nome do barco falante?'),
(1,'Qual estilo visual marcou Wind Waker?'),
(1,'Qual item permite controlar os ventos?'),
(1,'Quem é a verdadeira identidade de Tetra?'),
(1,'Qual é o oceano explorado no jogo?'),
(1,'Qual instrumento Link usa em Wind Waker?'),
(1,'(Difícil) Quantos fragmentos da Triforce of Courage precisam ser reunidos?');

-- Quiz Mario

INSERT INTO perguntas (fk_quiz, pergunta) VALUES
(2,'Qual foi a principal novidade de Double Dash?'),
(2,'Quantos personagens podem ficar no kart?'),
(2,'Qual personagem é mascote da Nintendo?'),
(2,'Qual item especial pertence a Mario e Luigi?'),
(2,'Em qual console Double Dash foi lançado?'),
(2,'Qual dupla usa o Heart item?'),
(2,'Qual personagem é conhecido por usar Fireballs?'),
(2,'Qual modo permite batalhas entre jogadores?'),
(2,'Quantas copas principais existem no Grand Prix?'),
(2,'(Difícil) Qual pista desbloqueável é inspirada em Rainbow Road do GameCube?');

INSERT INTO alternativas
(fk_pergunta, texto, correta) VALUES

-- Questões ZELDA (1–10)

(1,'Aryll',1),
(1,'Tetra',0),
(1,'Midna',0),
(1,'Zelda',0),

(2,'Barco',1),
(2,'Cavalo',0),
(2,'Dragão',0),
(2,'Trem',0),

(3,'Ganondorf',1),
(3,'Majora',0),
(3,'Dark Link',0),
(3,'Bowser',0),

(4,'King of Red Lions',1),
(4,'Ocean King',0),
(4,'Sea Guardian',0),
(4,'Great Boat',0),

(5,'Cel-Shading',1),
(5,'Pixel Art',0),
(5,'Realista',0),
(5,'2D clássico',0),

(6,'Wind Waker Baton',1),
(6,'Master Sword',0),
(6,'Hookshot',0),
(6,'Boomerang',0),

(7,'Princesa Zelda',1),
(7,'Aryll',0),
(7,'Medli',0),
(7,'Nayru',0),

(8,'Great Sea',1),
(8,'Lake Hylia',0),
(8,'Lost Woods',0),
(8,'Termina Ocean',0),

(9,'Wind Waker',1),
(9,'Ocarina',0),
(9,'Flute',0),
(9,'Harp',0),

(10,'8',1),
(10,'5',0),
(10,'6',0),
(10,'10',0),


-- Questões MARIO (11–20)

(11,'Dois pilotos por kart',1),
(11,'Modo online',0),
(11,'Mundo aberto',0),
(11,'Corrida em equipe',0),

(12,'2',1),
(12,'1',0),
(12,'3',0),
(12,'4',0),

(13,'Mario',1),
(13,'Link',0),
(13,'Bowser',0),
(13,'Kirby',0),

(14,'Fireballs',1),
(14,'Banana',0),
(14,'Blue Shell',0),
(14,'Bomb',0),

(15,'GameCube',1),
(15,'Wii',0),
(15,'Nintendo 64',0),
(15,'Switch',0),

(16,'Peach e Daisy',1),
(16,'Mario e Luigi',0),
(16,'Wario e Waluigi',0),
(16,'Bowser e Bowser Jr',0),

(17,'Mario',1),
(17,'Luigi',0),
(17,'Yoshi',0),
(17,'Toad',0),

(18,'Battle Mode',1),
(18,'Story Mode',0),
(18,'Adventure Mode',0),
(18,'Versus Royale',0),

(19,'4',1),
(19,'3',0),
(19,'5',0),
(19,'6',0),

(20,'Rainbow Road',1),
(20,'Rainbow Circuit',0),
(20,'Rainbow Colosseum',0),
(20,'Galaxy Track',0);