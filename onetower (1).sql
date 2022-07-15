-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 15-07-2022 a las 16:48:21
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
-- Base de datos: `onetower`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

DROP TABLE IF EXISTS `noticias`;
CREATE TABLE IF NOT EXISTS `noticias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `link` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `subtitulo`, `cuerpo`, `link`) VALUES
(1, 'Ya la vieron 25.000 personas. Todavía quedan cuatro días de Experiencia Casa Living, ¡no te la pierdas!', 'Te contamos cuáles son las actividades para lo que resta de la feria muestra en el predio de Casa Living.', '\r\nEsta es una de las actividades que se renuevan todos los días y se presentan en Experiencia Casa Living, la primera exposición curada por Living -la revista que dirige la Arq. Mariana Kratochwil- donde, hasta el 29 de mayo, se pueden recorrer 18 departamentos totalmente ambientados por reconocidos profesionales del diseño, la decoración y la arquitectura, además de disfrutar de un paseo que incluye compras, gastronomía, shows y propuestas para toda la familia.', 'https://www.lanacion.com.ar/revista-living/experiencia-casa-living-todo-lo-que-tenes-que-saber-para-disfrutar-la-primera-muestra-de-deco-diseno-nid13052022/'),
(2, 'Las mejores ideas para integrar las cocinas al living comedor', 'Los espacios combinados son una buena opción para dar sensación de amplitud y dar más uso a los diferentes ambientes de la casa', '“No sé para qué tengo comedor si nunca lo usamos”. Esta frase resume una de las principales inquietudes que reciben diseñadores y arquitectos de los propietarios de casas y departamentos. Por eso, integrar el living comedor con la cocina es ideal para crear un espacio abierto, que sea de uso para todo.\r\n\r\nAdemás, puede adaptarse a todo tipo de hogares, sin importar el tamaño. Con separadores para hacer ambientes semi cerrados, o con algún mueble para evitar cambios estructurales, hay distintos métodos que pueden ser más o menos económicos.\r\nA continuación, te mostramos algunas opciones para lograr espacios integrados de manera más moderna y elegante, acondicionándolos a las necesidades de la vivienda y de los usos de quienes la habitan.\r\n\r\nCon una isla. A la hora de elegir una isla para la cocina comedor, lo principal a tener en cuenta es el tamaño de la misma. Y consecuentemente, el de la isla. Si se trata de una cocina pequeña, lo ideal es que el tamaño del mueble acompañe al ambiente. Una forma de ahorrar espacio, es colocando los taburetes en el inferior de la isla. Además, es importante lograr uniformidad de colores y estilos con los ambientes que se busca integrar.\r\nEl color blanco genera siempre sensación de amplitud, y la madera calidez. En caso de contar con amplios ventanales, se puede utilizar colores más apagados. Es común en cocinas amplias incorporar la bacha a la isla, ya que al contar con mayor espacio se puede dar otra utilidad.\r\n\r\nCon una barra. Al igual que las islas, pueden actuar como separadores entre zonas cocina comedor. La principales diferencia, es que pueden adoptar diferentes formas. Lo más importante consiste en tener claro el tamaño, la forma y la ubicación de nuestra barra: la medida estándar debe ser el resto de los muebles de nuestra cocina y la mejor opción para la función de unir zonas es aquella con forma de “L”. Además, ´pueden estar ancladas a la pared.\r\n\r\nCon vidrio o paneles. Es la mejor opción si se quiere lograr espacios integrados pero tener la posibilidad de cerrarlos cuando hay visitas o en caso de no querer que los olores de la comida se esparzan por el resto del hogar, pero conservando cierta intimidad. De esta manera, se sigue aprovechando la luminosidad que nos transmite la ausencia de paredes.\r\nPueden ser paneles de madera, vidrio repartido o puertas graneros. Las opciones son muchas y se adaptan a diferentes presupuestos y gustos.\r\n\r\nCómo dar un toque moderno a las cocinas abiertas\r\nElectrodomésticos panelados. Esto hará que resulte más agradable a la vista, ya que se integrarán a la perfección con el resto de la casa.\r\nMismo suelo. Colocar el mismo suelo en toda la estancia, genera la intención de ganar perseverancia en la decoración.\r\nElementos color madera. Incluir elementos color madera, por ejemplo, en la encimera, es un indispensable en las cocinas de hoy en día.\r\nColores blanco o gris mate. Estos dos, son sin duda los colores más utilizados.\r\nArmarios sin tiradores. Este recurso permite que se consiga una visión mucho más despejada.', 'https://www.lanacion.com.ar/propiedades/construccion-y-diseno/las-mejores-ideas-para-integrar-las-cocinas-al-living-comedor-nid29042022/'),
(5, '1', '2', '3', '4'),
(7, '¿Cómo decorar un monoambiente?', 'Tips y consejos para equipar tu espacio y que sea disfrutable sin importar su tamaño.Ganar funcionalidad y dotarlo de liviandad son las claves.', 'No importa la cantidad de metros, lo fundamental es poder hacer de cada rincón un espacio funcional y que motive para encontrar allí el confort siempre anhelado. Para esto, es necesario poner especial atención al equipamiento y la decoración, pero se redobla la importancia cuando se trata de un monoambiente. \r\n\r\nLo primero que se debe hacer es “definir claramente las diferentes áreas: de descanso, la cocina y una zona de trabajo o entretenimiento. En un monoambiente puede haber cuatro espacios bien definidos y delimitados por el color y las texturas”, describen desde Tienda FC.\r\n\r\n“En esta tipología conviene un diseño que acompañe la geometría del espacio. De esa forma se aprovechan los m2, quedando el corazón de la vivienda libre para la vida diaria. Se deben evitar muebles altos, ya que se reduce la sensación de amplitud”, aconseja Martín Dell´Olio, experto de HÄFELE.\r\n\r\n¿Qué es indispensable en estos departamentos? “La cama rebatible, ya que al guardarse se ganan m2. Si no se cuenta con suficiente superficie de apoyo en la cocina, es óptimo sumar mesas auxiliares. También se puede optar por tener una cocina integrada al ambiente o, por el contrario, no tener la cocina a la vista. Esta última variante se puede implementar a través de nuestro sistema Finetta: son puertas ocultan o descubren el interior del mueble, dependiendo de la necesidad del usuario. Y una vez replegadas se ocultan en nichos a los costados del mobiliario”, detalla Dell´Olio.\r\nPara este especialista la clave está en los herrajes, para darle a los muebles la posibilidad de una total extracción (por ejemplo, a los cajones o bajo mesadas), y así usar el 100% de la capacidad de guardado, y tenerlo ordenado con organizadores de interiores.\r\n\r\n“Otra buena idea son las mesas de vidrio que le quitan pesadez visual al ambiente haciéndolo lucir más liberado. Además, para separar los ambientes, siempre se recomienda el uso de bibliotecas, biombos o cortinas, ya que funcionan como paredes pero dan aire y amplitud al ambiente”, indica Alejandra Arboleya, del departamento de Marketing y Diseño de Fontenla.\r\n\r\nY en pos de dotar de liviandad al inmueble, esta especialista sugiere “utilizar colores claros a la hora de pintar y decorar. Le dan calidez y amplitud al departamento. Si a la persona le gusta tener colores vibrantes en sus espacios, lo ideal es sumarlos a través de almohadones o cortinas, por ejemplo”. \r\n', 'https://www.zonaprop.com.ar/noticias/arq-y-deco/como-decorar-un-monoambiente/'),
(8, 'caro', 'sasas', 'sasas', 'asasa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Flavia', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'laura', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
