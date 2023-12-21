-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Nov-2023 às 21:23
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_pizzaria`
--
CREATE DATABASE IF NOT EXISTS `bd_pizzaria` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bd_pizzaria`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_endereco`
--

DROP TABLE IF EXISTS `tb_endereco`;
CREATE TABLE IF NOT EXISTS `tb_endereco` (
  `cd_endereco` int(11) NOT NULL AUTO_INCREMENT,
  `nm_logradouro` varchar(200) NOT NULL,
  `nr_cep` varchar(9) NOT NULL,
  `nm_bairro` varchar(100) NOT NULL,
  `sg_uf` char(2) NOT NULL,
  `nm_cidade` varchar(100) NOT NULL,
  `nr_endereco` int(11) NOT NULL,
  `cd_usuario` int(11) NOT NULL,
  PRIMARY KEY (`cd_endereco`),
  KEY `cd_usuario` (`cd_usuario`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Truncar tabela antes do insert `tb_endereco`
--

TRUNCATE TABLE `tb_endereco`;
--
-- Extraindo dados da tabela `tb_endereco`
--

INSERT INTO `tb_endereco` (`cd_endereco`, `nm_logradouro`, `nr_cep`, `nm_bairro`, `sg_uf`, `nm_cidade`, `nr_endereco`, `cd_usuario`) VALUES
(1, 'Rua Frei Gaspar', '11340-000', 'Parque São Vicente', 'SP', 'São Vicente', 14, 1),
(2, 'Rua Frei Gaspar', '11340-000', 'Parque São Vicente', 'SP', 'São Vicente', 14, 1),
(3, 'Rua Frei Gaspar', '11340-000', 'Parque São Vicente', 'SP', 'São Vicente', 14, 1),
(4, 'Rua Frei Gaspar', '11340-000', 'Parque São Vicente', 'SP', 'São Vicente', 14, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_entrada`
--

DROP TABLE IF EXISTS `tb_entrada`;
CREATE TABLE IF NOT EXISTS `tb_entrada` (
  `id_entrada` int(11) NOT NULL AUTO_INCREMENT,
  `nm_entrada` varchar(100) NOT NULL,
  `ds_entrada` varchar(100) NOT NULL,
  `vl_entrada` double NOT NULL,
  `img_entrada` varchar(5000) NOT NULL,
  PRIMARY KEY (`id_entrada`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Truncar tabela antes do insert `tb_entrada`
--

TRUNCATE TABLE `tb_entrada`;
--
-- Extraindo dados da tabela `tb_entrada`
--

INSERT INTO `tb_entrada` (`id_entrada`, `nm_entrada`, `ds_entrada`, `vl_entrada`, `img_entrada`) VALUES
(1, 'BreadStick de pepperoni', 'Palitos de massa pan recheados com Pepperoni. Macios por dentro, crocantes por fora.', 20, './src/assets/breadstick.jpg'),
(2, 'BreadSticks de Queijo', 'Palitos de massa pan recheados com Queijo Hut. Macios por dentro, crocantes por fora.', 16, './src/assets/breadqueijo.jpg'),
(3, 'Pão de Calabresa', 'Pão feito com massa Pizza Hut, recheado com calabresa e cebola.', 16, './src/assets/pao.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_pizza`
--

DROP TABLE IF EXISTS `tb_pizza`;
CREATE TABLE IF NOT EXISTS `tb_pizza` (
  `id_pizza` int(11) NOT NULL AUTO_INCREMENT,
  `nm_pizza` varchar(100) NOT NULL,
  `ds_pizza` varchar(100) NOT NULL,
  `vl_pizza` int(11) NOT NULL,
  `img_pizza` varchar(5000) NOT NULL,
  PRIMARY KEY (`id_pizza`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Truncar tabela antes do insert `tb_pizza`
--

TRUNCATE TABLE `tb_pizza`;
--
-- Extraindo dados da tabela `tb_pizza`
--

INSERT INTO `tb_pizza` (`id_pizza`, `nm_pizza`, `ds_pizza`, `vl_pizza`, `img_pizza`) VALUES
(1, 'Calabresa', ' É especialmente preparada com recheio generoso de linguiça calabresa de primeira qualidade e cebola', 35, './src/assets/calabresa.jpg'),
(2, 'Pepperoni', 'Fatias de pepperoni servidas sobre generosa camada de queijo e molho de tomate.\r\n\r\n', 30, './src/assets/peperoni.jpg'),
(3, 'Frango com Requeijão', 'Frango, queijo Hut e requeijão cremoso', 39, './src/assets/frango.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_sobremesa`
--

DROP TABLE IF EXISTS `tb_sobremesa`;
CREATE TABLE IF NOT EXISTS `tb_sobremesa` (
  `id_sobremesa` int(11) NOT NULL AUTO_INCREMENT,
  `nm_sobremesa` varchar(100) NOT NULL,
  `ds_sobremesa` varchar(100) NOT NULL,
  `vl_sobremesa` double NOT NULL,
  `img_sobremesa` varchar(5000) NOT NULL,
  PRIMARY KEY (`id_sobremesa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Truncar tabela antes do insert `tb_sobremesa`
--

TRUNCATE TABLE `tb_sobremesa`;
--
-- Extraindo dados da tabela `tb_sobremesa`
--

INSERT INTO `tb_sobremesa` (`id_sobremesa`, `nm_sobremesa`, `ds_sobremesa`, `vl_sobremesa`, `img_sobremesa`) VALUES
(1, 'Hut Cup Brigadeiro', 'Brigadeiro feito com Moça® no copinho.', 8, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/hut-cup-brigadeiro.jpg'),
(2, 'Pizza de Brigadeiro', 'Pizza com massa pan feito com brigadeiro Moça®', 25, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-media.jpg'),
(3, 'Slider de Brigadeiro', 'Mini pizza individual massa pan de Brigadeiro feito com Moça®', 10, 'https://storage.googleapis.com/imc-digital-p-delivery.appspot.com/816x408/Sobremesas/brigadeiro-slider.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tb_usuario`
--

DROP TABLE IF EXISTS `tb_usuario`;
CREATE TABLE IF NOT EXISTS `tb_usuario` (
  `cd_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nm_completo_usuario` varchar(200) NOT NULL,
  `nm_senha_usuario` varchar(20) NOT NULL,
  `nm_email_usuario` varchar(100) NOT NULL,
  `nm_privilegio` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`cd_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Truncar tabela antes do insert `tb_usuario`
--

TRUNCATE TABLE `tb_usuario`;
--
-- Extraindo dados da tabela `tb_usuario`
--

INSERT INTO `tb_usuario` (`cd_usuario`, `nm_completo_usuario`, `nm_senha_usuario`, `nm_email_usuario`, `nm_privilegio`) VALUES
(1, 'Ahamad Martins Soufanji', '123', 'martinsahmad34@gmail.com', NULL),
(2, 'Ahamad Martins Soufanji', '123', 'martinsahmad33@gmail.com', NULL),
(3, 'Ahamad Martins Soufanji', '123', 'martinsahmad38@gmail.com', NULL),
(4, 'Ahamad Martins Soufanji', '123', 'martinsahmad3@gmail.com', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
