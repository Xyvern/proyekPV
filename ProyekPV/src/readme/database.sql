/*
SQLyog Community v13.2.1 (64 bit)
MySQL - 10.4.28-MariaDB : Database - db_proyekpv
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_proyekpv` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `db_proyekpv`;

/*Table structure for table `comments` */

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `comment_date` datetime NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `comments` */

/*Table structure for table `favorite` */

DROP TABLE IF EXISTS `favorite`;

CREATE TABLE `favorite` (
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `favorite` */

/*Table structure for table `ratings` */

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `user_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`video_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `ratings` */

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_username` varchar(30) NOT NULL,
  `user_fullname` varchar(255) NOT NULL,
  `user_pfp` varchar(1024) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `users` */

insert  into `users`(`user_id`,`user_username`,`user_fullname`,`user_pfp`,`user_phone`,`user_password`,`user_email`) values 
(5,'rinko','Merry Febyanti','...','081234567890','sayajagoreact','merryfebyanti@gmail.com'),
(6,'naZura','Raphael Hanley','...','081234567890','Znyahurufbesar','raphhans@gmail.com'),
(7,'tenonenot','Valentino Tan','...','081234567890','ANITAMAXWYN','valentinotan@gmail.com'),
(8,'xyvern','Darren Cahya','...','081234567890','sipenexe','darrencahya@gmail.com');

/*Table structure for table `videos` */

DROP TABLE IF EXISTS `videos`;

CREATE TABLE `videos` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_link` varchar(1024) NOT NULL,
  `video_detail` text NOT NULL,
  `video_genre` varchar(30) NOT NULL,
  `video_category` varchar(30) NOT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `videos` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
