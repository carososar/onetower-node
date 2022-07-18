-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 18-07-2022 a las 16:38:46
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carolina_sosa_rojido`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumna`
--

DROP TABLE IF EXISTS `alumna`;
CREATE TABLE IF NOT EXISTS `alumna` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(60) NOT NULL,
  `Apellido` varchar(60) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Email` varchar(80) NOT NULL,
  `Telefono` int(20) NOT NULL,
  `Direccion` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `alumna`
--

INSERT INTO `alumna` (`id`, `Nombre`, `Apellido`, `Edad`, `Email`, `Telefono`, `Direccion`) VALUES
(1, 'Carolina', 'Sosa Rojido', 44, 'carososar@gmail.com', 1166383716, 'Av. del Libertador 5595 5C');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
