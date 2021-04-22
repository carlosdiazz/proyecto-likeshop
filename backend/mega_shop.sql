-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-04-2021 a las 18:27:30
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mega_shop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `addresses`
--

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `line1` varchar(255) DEFAULT NULL,
  `line2` varchar(255) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `pincode` int(6) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `addresses`
--

INSERT INTO `addresses` (`id`, `line1`, `line2`, `city`, `state`, `country`, `phone`, `pincode`, `user_id`) VALUES
(1, 'La Vega', 'La Vega', 'La Vega', 'La Vega', 'Rep. Dom.', '809000000', 41000, 1),
(2, 'La Vega', 'La Vega', 'La Vega', 'La Vega', 'Rep. Dom', '809573000', 41000, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'Zapatos'),
(2, 'Eletronicos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `user_id`) VALUES
(1, 1),
(120, 1),
(121, 1),
(122, 1),
(123, 1),
(124, 1),
(125, 1),
(126, 1),
(127, 1),
(128, 1),
(129, 1),
(130, 1),
(131, 1),
(132, 1),
(133, 1),
(134, 1),
(135, 1),
(136, 1),
(137, 1),
(138, 1),
(139, 1),
(140, 1),
(141, 1),
(142, 1),
(143, 1),
(144, 1),
(145, 1),
(146, 1),
(147, 1),
(148, 1),
(149, 1),
(150, 1),
(151, 1),
(152, 1),
(153, 1),
(154, 1),
(155, 1),
(156, 1),
(157, 1),
(158, 1),
(159, 1),
(160, 1),
(161, 1),
(162, 1),
(163, 1),
(164, 1),
(165, 1),
(166, 1),
(167, 1),
(168, 1),
(169, 1),
(170, 1),
(171, 1),
(172, 1),
(173, 1),
(174, 1),
(175, 1),
(176, 1),
(177, 1),
(178, 1),
(179, 1),
(180, 1),
(181, 1),
(182, 1),
(183, 1),
(184, 1),
(185, 1),
(186, 1),
(187, 1),
(188, 1),
(189, 1),
(190, 1),
(191, 1),
(192, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders_details`
--

CREATE TABLE `orders_details` (
  `id` int(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `orders_details`
--

INSERT INTO `orders_details` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 1, 4, 1),
(197, 120, 1, 1),
(198, 120, 2, 1),
(199, 121, 1, 1),
(200, 121, 2, 1),
(201, 122, 2, 1),
(202, 123, 1, 4),
(203, 124, 2, 1),
(204, 125, 3, 1),
(205, 126, 2, 1),
(206, 127, 1, 1),
(207, 128, 2, 1),
(208, 129, 3, 1),
(209, 129, 1, 1),
(210, 129, 2, 1),
(211, 129, 5, 1),
(212, 129, 4, 1),
(213, 130, 2, 1),
(214, 131, 1, 2),
(215, 132, 2, 92),
(216, 133, 5, 1),
(217, 133, 3, 1),
(218, 134, 3, 2),
(219, 135, 5, 1),
(220, 136, 3, 1),
(221, 137, 5, 1),
(222, 137, 3, 1),
(223, 138, 3, 1),
(224, 139, 3, 1),
(225, 140, 3, 1),
(226, 141, 5, 1),
(227, 142, 5, 1),
(228, 143, 5, 1),
(229, 144, 5, 1),
(230, 145, 5, 1),
(231, 146, 5, 1),
(232, 147, 5, 2),
(233, 148, 5, 1),
(234, 149, 5, 5),
(235, 150, 5, 1),
(236, 151, 5, 1),
(237, 152, 5, 1),
(238, 153, 5, 1),
(239, 154, 5, 1),
(240, 155, 5, 1),
(241, 156, 5, 1),
(242, 157, 4, 1),
(243, 157, 5, 1),
(244, 158, 5, 1),
(245, 159, 2, 1),
(246, 160, 2, 1),
(247, 163, 2, 1),
(248, 165, 2, 1),
(249, 166, 1, 1),
(250, 167, 1, 1),
(251, 169, 1, 1),
(252, 170, 2, 1),
(253, 172, 2, 1),
(254, 173, 2, 1),
(255, 177, 2, 1),
(256, 178, 2, 1),
(257, 181, 1, 1),
(258, 181, 2, 1),
(259, 181, 5, 1),
(260, 182, 1, 1),
(261, 183, 1, 1),
(262, 183, 2, 1),
(263, 183, 5, 1),
(264, 184, 2, 2),
(265, 184, 1, 1),
(266, 184, 5, 1),
(267, 185, 2, 1),
(268, 185, 1, 1),
(269, 186, 2, 1),
(270, 188, 1, 2),
(271, 189, 1, 4),
(272, 189, 2, 1),
(273, 190, 1, 1),
(274, 190, 2, 1),
(275, 192, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `images` text DEFAULT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `quantity` int(10) NOT NULL,
  `short_desc` varchar(255) NOT NULL,
  `cat_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `image`, `images`, `description`, `price`, `quantity`, `short_desc`, `cat_id`) VALUES
(1, 'Crocs de Badbunny\r\n', 'https://cdn.wallapop.com/images/10420/9h/az/__/c10420p573261494/i1756090173.jpg?pictureSize=W640', 'https://cdn.wallapop.com/images/10420/9h/az/__/c10420p573261494/i1756090173.jpg?pictureSize=W640;https://cdn.wallapop.com/images/10420/9h/az/__/c10420p573261494/i1756090173.jpg?pictureSize=W640', 'Crocs X badbunny Edicion Limitada\r\n', 29, 85, 'SPORTS SHOES\r\n', 1),
(2, 'Jordan 1 x jBalvin\r\n', 'https://static.wixstatic.com/media/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_90/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg', 'https://static.wixstatic.com/media/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_90/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg;https://static.wixstatic.com/media/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_90/bbf643_0c110bdd46204b219c0ce35a34a9a4d6~mv2.jpg', 'Jordan1 x Jbalvin edicion limitada\r\n', 19, 31, 'SPORTS SHOES', 1),
(3, 'MSI laptop gs66\r\n', 'https://c1.neweggimages.com/ProductImage/34-155-614-V01.jpg', 'https://c1.neweggimages.com/ProductImage/34-155-614-V01.jpg', 'Laptop msi gs66, intel i7, 16 gb de ram, nvidia rtx 2070, 1 tb ssd\r\n', 1300, 0, 'Gaming laptop\r\n', 2),
(4, 'playstation 5\r\n', 'https://www.hebergementwebs.com/image/33/3325865a78c22d1236f2329da2f0e194.jpg/la-playstation-5-firma-un-inicio-record-en-francia.jpg', 'https://www.hebergementwebs.com/image/33/3325865a78c22d1236f2329da2f0e194.jpg/la-playstation-5-firma-un-inicio-record-en-francia.jpg', 'Playstation 5, un control 1tera, consola de ultima generacion\r\n', 100, 48, 'Gaming console', 2),
(5, 'xbox series x\r\n', 'https://as.com/meristation/imagenes/2020/06/22/noticias/1592827536_759071_1592827920_sumario_normal.jpg', 'https://as.com/meristation/imagenes/2020/06/22/noticias/1592827536_759071_1592827920_sumario_normal.jpg', 'xbox series x, consola de microsoft de ultima generacion \r\n', 39, 20, 'Gaming console', 2),
(6, 'Sony Bravia xh90 4k\r\n', 'https://i.ytimg.com/vi/n_ShAAmTKVk/sddefault.jpg', 'https://i.ytimg.com/vi/n_ShAAmTKVk/sddefault.jpg', 'Tv sony 4k, 65 pulgadas, hdr sin marco, LED\r\n', 1500, 0, 'Television\r\n', 2),
(7, 'Iphone x\r\n', 'https://static.toiimg.com/thumb/msid-61654288,width-640,resizemode-4/61654288.jpg\r\n', 'https://static.toiimg.com/thumb/msid-61654288,width-640,resizemode-4/61654288.jpg\r\n\r\n', 'Iphone x de 64gb, desbloqueado \r\n', 150, 50, 'Iphone\r\n', 2),
(8, 'Zapatos Vans\r\n', 'https://img.olx.com.br/images/97/974928091214343.jpg\r\n', 'https://i.ytimg.com/vi/HxRGEMdW3fg/sddefault.jpg\r\n', 'Zapatos Vans, rojos\r\n', 50, 25, 'Zapatos', 1),
(9, 'camiseta Fox\r\n', 'https://images.internetstores.de/products//764177/02/53c82b/Fox_Legacy_Moth_Kurzarm_T-Shirt_Jugend_heather_graphite[640x480].jpg?forceSize=true&forceAspectRatio=true&useTrim=true\r\n', 'https://images.internetstores.de/products//764177/02/53c82b/Fox_Legacy_Moth_Kurzarm_T-Shirt_Jugend_heather_graphite[640x480].jpg?forceSize=true&forceAspectRatio=true&useTrim=true\r\n', 'Camiseta fox\r\n', 15, 5, 'zapatos', 1),
(10, 'Nintendo switch', 'https://i1.wp.com/hooli.com.do/wp-content/uploads/2018/12/front-4.gif?fit=640%2C480&ssl=1\r\n', 'https://i1.wp.com/hooli.com.do/wp-content/uploads/2018/12/front-4.gif?fit=640%2C480&ssl=1\r\n', 'Nintendo switch\r\n', 200, 10, 'Consola', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT 'not set',
  `lname` varchar(255) DEFAULT 'not set',
  `age` int(10) DEFAULT 18,
  `role` int(10) DEFAULT 555,
  `photoUrl` text DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'local'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `fname`, `lname`, `age`, `role`, `photoUrl`, `type`) VALUES
(1, 'Carlos', '', 'c.diazadrian@hotmail.com', 'Carlos', 'Diaz', 14, 777, '', 'local');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_addresses_users1_idx` (`user_id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_users1_idx` (`user_id`);

--
-- Indices de la tabla `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_has_products_products1_idx` (`product_id`),
  ADD KEY `fk_orders_has_products_orders1_idx` (`order_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_ibfk_1` (`cat_id`);
ALTER TABLE `products` ADD FULLTEXT KEY `description` (`description`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT de la tabla `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=276;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `fk_addresses_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `fk_orders_has_products_orders1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_has_products_products1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
