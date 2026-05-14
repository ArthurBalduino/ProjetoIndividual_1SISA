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
        FOREIGN KEY (fk_quiz)
        REFERENCES quiz(id)
);

CREATE TABLE alternativas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_pergunta INT,
    texto VARCHAR(45),
    correta TINYINT,
    CONSTRAINT fkAlternativaPergunta
        FOREIGN KEY (fk_pergunta) REFERENCES perguntas(id)
);

CREATE TABLE tentativas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_quiz INT,
    fk_usuario INT,
    acertos INT,
    erros INT,
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
    dataReview DATETIME,
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