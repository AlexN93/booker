-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 26, 2016 at 06:53 PM
-- Server version: 5.5.49-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `booker`
--

-- --------------------------------------------------------

--
-- Table structure for table `chp`
--

CREATE TABLE IF NOT EXISTS `chp` (
  `name` varchar(255) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `chp`
--

INSERT INTO `chp` (`name`, `id`, `createdAt`, `updatedAt`) VALUES
('heart disease', 1, '2016-06-26 15:04:39', '2016-06-26 15:04:39'),
('arthritis', 2, '2016-06-26 15:04:39', '2016-06-26 15:04:39'),
('obesity', 3, '2016-06-26 15:04:39', '2016-06-26 15:04:39'),
('diabetes', 4, '2016-06-26 15:04:39', '2016-06-26 15:04:39');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `name` varchar(255) DEFAULT NULL,
  `description` longtext,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`name`, `description`, `id`, `createdAt`, `updatedAt`) VALUES
('Skydiving - Tandem', 'A parachute jump as a tandem jump is a fantastic experience that everyone should experience. To go along with an instructor, which means there is no need to spend time on theoretical and practical preparation. In fact, it is just to follow some simple instructions and otherwise just enjoy the ride full. The experience can be tried in the country, from early spring to October, with our selected partners ( Parachute Club DFC , Center Jump , Skydive 2000 ,  Østjyllands Parachute Club  and Drop Zone Denmark ) and with the guarantee of an adrenaline rush and eternal memory - the perfect experience gift.', 1, '2016-06-26 15:04:39', '2016-06-26 15:04:39'),
('Sports Car Driving', 'Xtreme Xperience has hand picked the finest supercars from across the globe just for you. Contact us to find out how you can drive an exotic car for a day!', 2, '2016-06-26 15:04:39', '2016-06-26 15:04:39');

-- --------------------------------------------------------

--
-- Table structure for table `itemavailability`
--

CREATE TABLE IF NOT EXISTS `itemavailability` (
  `dates` longtext,
  `item_id` int(11) DEFAULT NULL,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `itemavailability`
--

INSERT INTO `itemavailability` (`dates`, `item_id`, `id`, `createdAt`, `updatedAt`) VALUES
('["2016-06-29", "2016-06-30"]', 1, 1, '2016-06-26 15:04:39', '2016-06-26 15:04:39'),
('["2016-06-29", "2016-06-30"]', 2, 2, '2016-06-26 15:04:39', '2016-06-26 15:04:39');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` int(11) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `date` date DEFAULT NULL,
  `chp` longtext,
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`name`, `age`, `gender`, `weight`, `date`, `chp`, `id`, `createdAt`, `updatedAt`) VALUES
('Alex N', 22, 1, 80, '2016-06-29', NULL, 1, '2016-06-26 18:37:06', '2016-06-26 18:37:06'),
('Eli', 20, 1, 50, '2016-06-30', NULL, 2, '2016-06-26 18:46:31', '2016-06-26 18:46:31'),
('33', 33, 1, 33, '2016-06-29', '{"name":"heart disease","id":1,"createdAt":"2016-06-26T15:04:39.000Z","updatedAt":"2016-06-26T15:04:39.000Z"}', 3, '2016-06-26 18:48:24', '2016-06-26 18:48:24');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
