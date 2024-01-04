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
  `user_username` varchar(30) NOT NULL,
  `video_id` int(11) NOT NULL,
  `comment_content` text NOT NULL,
  `comment_date` datetime NOT NULL DEFAULT current_timestamp(),
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_username`,`video_id`,`comment_id`),
  KEY `video_id` (`video_id`),
  KEY `comment_id` (`comment_id`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_username`) REFERENCES `users` (`user_username`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `comments` */

insert  into `comments`(`user_username`,`video_id`,`comment_content`,`comment_date`,`comment_id`) values 
('bitapunya',9,'waktu kecil nonton ini langsung punya cita-cita pingin punya ekor WKWK','2024-01-02 22:43:48',1),
('bitapunya',20,'pingin punya baymax dari Big Hero 6, gemoyy','2024-01-02 22:54:52',21),
('bitapunya',23,'bucin bikin banjir','2024-01-02 22:57:11',29),
('misatha',17,'I am Optimus Prime. I am sending this message to any surviving Autobots taking refuge among the stars. We are here. And we are waiting.','2024-01-02 22:47:43',2),
('misatha',18,'reflek joget toothless','2024-01-02 22:48:11',3),
('misatha',20,'Its about revenge','2024-01-02 22:55:21',23),
('misatha',22,'With great power comes great responsibility','2024-01-02 22:56:32',26),
('misatha',23,'bucin ngerusak dunia','2024-01-02 22:57:28',30),
('ohara',1,'where\'s Paul Walker?','2024-01-02 22:36:30',4),
('ohara',11,'Avangers!!! assemble duar duarr thanos ilang','2024-01-02 22:44:14',5),
('ohara',12,'sukaan e tino, bagus keren, boboiboy e makin ganteng mbe makin HD','2024-01-02 22:44:32',6),
('ohara',18,'reflek pengen punya toothless','2024-01-02 22:49:42',7),
('ohara',20,'from zero to hero,walopun si kakak koit ilang','2024-01-02 22:55:07',22),
('ohara',22,'Gwen mati','2024-01-02 22:56:46',27),
('ohara',23,'apakah hujan itu real','2024-01-02 22:56:57',28),
('tenonenot',1,'wow saya tidak menyangka bahwa film yang bertema balapan ini sepertinya lebih condong ke promosi nilai-nilai hidayah kekeluargaan seperti dicontohkan oleh dom yang selalu berkata bahwa dia tidak memiliki teman, tapi dia punya keluarga <3','2024-01-03 18:45:46',31),
('tenonenot',2,'wow biru ya, saya kira ini film avatar loh :(','2024-01-03 18:53:56',32),
('tenonenot',3,'anjay slebew gwehj sih suka banget film yang kek full ngiong-ngiong rawrr','2024-01-03 18:53:56',33),
('tenonenot',4,'wow film ini cukup memuaskan ya bagi saya, menurut saya mario sudah mengalami pendewasaan dari yang dulunya simping kepada princess peach hingga menyelamatkan dunia seperti yang disuguhkan di film ini. saya cinta mario joseph <3','2024-01-03 18:53:56',34),
('tenonenot',5,'jujur saya kira ini film demit-demit an di venisia loh..','2024-01-03 18:53:56',35),
('tenonenot',6,'la la land menurut saya menampilkan segregasi terhadap karakter teletubbies yang lain ya.. coba kalao ada po po land, atau tinky winky land pasti akan lebih adil dan meratakan pendapatan para teletubbies sih..','2024-01-03 18:53:56',36),
('tenonenot',7,'hii saya atut banget nich huwuw','2024-01-03 18:53:56',37),
('tenonenot',8,'gwelak banget bos ini film mindblowing beut','2024-01-03 18:53:56',38),
('tenonenot',9,'jujur saya bukan penikmat little mermaid, namun setelah menonton film ini, saya jadi yakin bahwa saya benar-benar tidak suka little mermaid','2024-01-03 18:53:56',39),
('tenonenot',10,'hihi big bomba goes boom boom pow','2024-01-03 18:53:56',40),
('tenonenot',11,'keren banget ya, saya suka peran superman disini waktu dia menghajar mewtwo menggunakan stand za warudo <33','2024-01-03 18:53:56',41),
('tenonenot',12,'BOBOIBOY KEREN BANGET, MENURUT SAYA HARUSNYA GANTI JADI BOBOIMAN KARENA DIA TUWH MANLY BANGED DIMATA GWEHHH','2024-01-03 18:53:56',42),
('tenonenot',13,'hii big bad nun goes boooooooo, i skerd shiver me timber oooooohhhhhhh','2024-01-03 18:53:56',43),
('tenonenot',14,'anjay tom cruise barudak nakal banget cuy, aktingnya super keren, lagunya keren, overall 10/10 sih kalo menurut gweh','2024-01-03 18:53:56',44),
('tenonenot',15,'spongebob squarepants more like spongebob square-up-with-me-if-you-dare sih menurut gweh, disini spongebob super badas cuy','2024-01-03 18:53:56',45),
('tenonenot',16,'kukira ini film wholesome..','2024-01-03 18:53:56',46),
('tenonenot',17,'ermehgard big robot goes boom boom rawr','2024-01-03 18:53:56',47),
('tenonenot',18,'SCOTLAND FOREVERRRR driftveil city playing on the background','2024-01-03 18:53:56',48),
('tenonenot',19,'hihihi big bad monke goes rawr','2024-01-03 18:53:56',49),
('tenonenot',20,'kok baymaxnya rungkad sih >:(','2024-01-03 18:53:56',50),
('tenonenot',21,'saya ketiduran','2024-01-03 18:53:56',51),
('tenonenot',22,'hurrrrrr big red blue man goes swoosh swoosh around the city, very cool cipeli pam pam','2024-01-03 18:53:56',52),
('xyvern',19,'apes tugeder stronk','2024-01-03 18:58:40',53),
('yinko',1,'anjay keren mobilnya bisa racing-racing gitu ya  tapi kenapa main characternya botak :(( saya sukanya yang gondrong... lebih menggoda','2024-01-02 22:38:22',8),
('yinko',2,'sebenernya saya ngga pernah liat tapi disuruh komen... jadi yasudah. klo diliat dari posternya sih, main character nya kayak capung ya. Jujurly agak jijik tapi keren tapi jijik gimana gitu ya tapi sepertinya movie nya bagus saya suka tapi jijik','2024-01-02 22:38:56',9),
('yinko',3,'Balap balapan keren, imersif, kreatif , impresif banget, main characternya ganteng, martin pasti suka','2024-01-02 22:39:37',10),
('yinko',4,'LUCU POLLL warna warni, ceritanya bagus dan keren, anak anak kecil suka jadi bintang 10 lah','2024-01-02 22:40:45',11),
('yinko',5,'wow keren, saya tercengang, misterinya keren cuma main characternya kayak om-om redflag yang suka curi anak anak','2024-01-02 22:41:03',12),
('yinko',6,'pasangan cwok nya cantik bangettttt, overall movie nya keren, romantis romantis gitu ya jadi iri loh :(((','2024-01-02 22:41:50',13),
('yinko',7,'anjim nangis banget horror ga suka -10/10 poster jelek film jelek tapi keliatan seru tapi aku ga suka horror males banget','2024-01-02 22:42:16',14),
('yinko',8,'KEREN POLLLLL BINTANG 10000, best movie all the time ku, omg keren pol yang ngga nonton pasti nyesel soale terlalu apik buat di tonton <333, bapak mbe anak e keren aku suka bapak e, temen2 e bapak e bodo semuaaaaaa egois kabeh malas','2024-01-02 22:42:43',15),
('yinko',9,'BAGUS LUCU GEMAS tapi yang jadi ariel kureng rekk :((( kurang mirip ariel yang 2D tapi suara e bagus tpi gapapa deh','2024-01-02 22:43:15',16),
('yinko',13,'anjim nangis banget horror ga suka -10/10 poster jelek film jelek tapi keliatan seru tapi aku ga suka horror males banget','2024-01-02 22:45:35',17),
('yinko',14,'om cruise ganteng pol omg walaupun ws kakek-kakek tapi acting e keren apalagi pas adegan kereta mbe sepeda motor nde tebing jd dag dig dug liatnya','2024-01-02 22:46:56',18),
('yinko',15,'spongebob e lucu selalu ngelawak, character e makin HD mbe makin, detail, cocok buat anak-anak balita atau anak-anak SD','2024-01-02 22:47:11',19),
('yinko',20,'Baymax e lucu pol mbe gemoi, cocok buat anak anak','2024-01-02 22:55:38',24),
('yinko',21,'INI KEREN BAGUS tapi aku wes lupa cerita e tpi seingetku bagus misteri\' nde kereta ngono','2024-01-02 22:56:15',25);

/*Table structure for table `favorite` */

DROP TABLE IF EXISTS `favorite`;

CREATE TABLE `favorite` (
  `user_username` varchar(30) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`user_username`,`video_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`user_username`) REFERENCES `users` (`user_username`),
  CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `favorite` */

insert  into `favorite`(`user_username`,`video_id`) values 
('bitapunya',9),
('bitapunya',13),
('bitapunya',15),
('bitapunya',18),
('bitapunya',23),
('LieTaTze',1),
('LieTaTze',2),
('LieTaTze',5),
('LieTaTze',18),
('LieTaTze',23),
('martinisme',12),
('martinisme',13),
('martinisme',16),
('martinisme',18),
('martinisme',20),
('misatha',12),
('misatha',17),
('misatha',20),
('misatha',22),
('misatha',23),
('ohara',1),
('ohara',11),
('ohara',18),
('ohara',20),
('ohara',22),
('ohara',23),
('tenonenot',3),
('tenonenot',8),
('tenonenot',10),
('tenonenot',11),
('tenonenot',12),
('xyvern',2),
('xyvern',5),
('xyvern',7),
('xyvern',10),
('xyvern',18),
('yinko',7),
('yinko',8),
('yinko',9),
('yinko',10),
('yinko',14);

/*Table structure for table `ratings` */

DROP TABLE IF EXISTS `ratings`;

CREATE TABLE `ratings` (
  `user_username` varchar(30) NOT NULL,
  `video_id` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  PRIMARY KEY (`user_username`,`video_id`),
  KEY `video_id` (`video_id`),
  CONSTRAINT `ratings_ibfk_1` FOREIGN KEY (`user_username`) REFERENCES `users` (`user_username`),
  CONSTRAINT `ratings_ibfk_2` FOREIGN KEY (`video_id`) REFERENCES `videos` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `ratings` */

insert  into `ratings`(`user_username`,`video_id`,`rating`) values 
('bitapunya',9,5),
('bitapunya',13,5),
('bitapunya',15,5),
('bitapunya',18,4),
('bitapunya',23,4),
('LieTaTze',1,5),
('LieTaTze',2,5),
('LieTaTze',5,5),
('LieTaTze',18,5),
('LieTaTze',23,5),
('martinisme',12,5),
('martinisme',13,3),
('martinisme',16,3),
('martinisme',18,2),
('martinisme',20,4),
('misatha',12,5),
('misatha',17,3),
('misatha',20,3),
('misatha',22,4),
('misatha',23,4),
('ohara',1,4),
('ohara',11,5),
('ohara',18,5),
('ohara',20,4),
('ohara',22,4),
('ohara',23,4),
('tenonenot',1,3),
('tenonenot',2,4),
('tenonenot',3,5),
('tenonenot',4,5),
('tenonenot',5,5),
('tenonenot',6,1),
('tenonenot',7,3),
('tenonenot',8,5),
('tenonenot',9,1),
('tenonenot',10,5),
('tenonenot',11,4),
('tenonenot',12,5),
('tenonenot',13,3),
('tenonenot',14,4),
('tenonenot',15,2),
('tenonenot',16,4),
('tenonenot',17,3),
('tenonenot',18,3),
('tenonenot',19,4),
('tenonenot',20,4),
('tenonenot',21,4),
('tenonenot',22,4),
('xyvern',2,5),
('xyvern',5,4),
('xyvern',7,5),
('xyvern',10,4),
('xyvern',18,5),
('yinko',1,4),
('yinko',2,2),
('yinko',3,4),
('yinko',4,5),
('yinko',5,5),
('yinko',6,3),
('yinko',7,5),
('yinko',8,5),
('yinko',9,4),
('yinko',10,4),
('yinko',11,5),
('yinko',12,3),
('yinko',13,1),
('yinko',14,4),
('yinko',15,3),
('yinko',16,2),
('yinko',17,2),
('yinko',18,5),
('yinko',19,3),
('yinko',20,4),
('yinko',21,5),
('yinko',22,3);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_username` varchar(30) NOT NULL,
  `user_pfp` varchar(1024) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  PRIMARY KEY (`user_username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `users` */

insert  into `users`(`user_username`,`user_pfp`,`user_phone`,`user_password`,`user_email`) values 
('bitapunya','...','081431289076','tabibitapunya','punyabita@gmail.com'),
('LieTaTze','...','081987654321','unbansayawoy','linonibos@gmail.com'),
('martinisme','...','081123456789','tanyamerry','sudjayamartinisme@gmail.com'),
('misatha','...','081987654321','lucario','mistermst@gmail.com'),
('naZura','...','081333444555','Znyahurufbesar','raphhans@gmail.com'),
('ohara','...','081872615009','niconiconi','clutchmeister@gmail.com'),
('tenonenot','...','081999888777','ANITAMAXWYN','valentinotan@gmail.com'),
('xyvern','...','081234567890','sipenexe','darrencahya@gmail.com'),
('yinko','...','081876543210','sayajagoreact','merryfebyanti@gmail.com');

/*Table structure for table `videos` */

DROP TABLE IF EXISTS `videos`;

CREATE TABLE `videos` (
  `video_id` int(11) NOT NULL AUTO_INCREMENT,
  `video_name` varchar(100) NOT NULL,
  `video_link` varchar(1024) NOT NULL,
  `video_detail` text NOT NULL,
  `video_genre` varchar(100) NOT NULL,
  `video_category` varchar(100) NOT NULL,
  `video_banner` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Data for the table `videos` */

insert  into `videos`(`video_id`,`video_name`,`video_link`,`video_detail`,`video_genre`,`video_category`,`video_banner`) values 
(1,'Fast X','https://www.youtube.com/embed/eoOaKN4qCKw?si=rFGAH_zlqTwe-r8W','...','Crime','Blockbusters','...'),
(2,'Blue Beetle','https://www.youtube.com/embed/4wxyy8Rcz4k?si=4lIq1RFEba6mMB3t','...','Action','Movies','...'),
(3,'Gran Turismo','https://www.youtube.com/embed/GgKmhDaVo48?si=KK3Ek6hMblmfMgJn','...','Action','Movies','...'),
(4,'The Super Mario Bros. Movie','https://www.youtube.com/embed/TnGl01FkMMo?si=R8BbApUDnvR4RHYF','...','Animation','For kids','...'),
(5,'A Haunting In Venice','https://www.youtube.com/embed/yEddsSwweyE?si=nDTg7SBPvA1FhQBF','...','Crime','Movies','...'),
(6,'La La Land','https://www.youtube.com/embed/0pdqf4P9MB8?si=316_kmraIq5ZlmZs','...','Drama','Musical','...'),
(7,'Poltergeist','https://www.youtube.com/embed/HD2sz9RVzfM?si=nChPbFGYpOLBTwN1','...','Horror','Critically Acclaimed','...'),
(8,'Interstellar','https://www.youtube.com/embed/zSWdZVtXT7E?si=Q6zMAcqNx7K4SPkv','...','Sci-Fi','Blockbusters','...'),
(9,'The Little Mermaid','https://www.youtube.com/embed/kpGo2_d3oYE?si=VM5NE_87Z0I6Utub','...','Romance','Musical','...'),
(10,'Oppenheimer','https://www.youtube.com/embed/uYPbbksJxIg?si=A69Xscs5jju7nvcB','...','Drama','Critically Acclaimed','...'),
(11,'Avengers: Infinity War','https://www.youtube.com/embed/QwievZ1Tx-8?si=apmeqWbPFBjEnq3M','...','Action','Blockbusters','...'),
(12,'BoBoiBoy The Movie','https://www.youtube.com/embed/PSnxXrS151g?si=jxPsdHBsNGvVTXGy','...','Comedy','For kids','...'),
(13,'The Nun II','https://www.youtube.com/embed/QF-oyCwaArU?si=pX0Gys06HAx8hjBU','...','Horror','Movies','...'),
(14,'Mission Impossible - Dead Reckoning','https://www.youtube.com/embed/avz06PDqDbM?si=GCr6t0i-LtzMykmD','...','Action','Blockbusters','...'),
(15,'The SpongeBob SquarePants Movie Rehydrated','https://www.youtube.com/embed/ECGeIyKkTFg?si=8w31x0exIb4KgX75','...','Comedy','For kids','...'),
(16,'Ted 2','https://www.youtube.com/embed/S3AVcCggRnU?si=E5csygUQAFz7eLBE','...','Comedy','Movies','...'),
(17,'Transformers: Revenge of the Fallen','https://www.youtube.com/embed/fnXzKwUgDhg?si=uwojRj7xKBTXyuDW','...','Sci-Fi','Blockbusters','...'),
(18,'How To Train Your Dragon','https://www.youtube.com/embed/oKiYuIsPxYk?si=64tDWA-FHaRo1d7u','...','Animation','For kids','...'),
(19,'War for the Planet of the Apes','https://www.youtube.com/embed/JDcAlo8i2y8?si=nEvm2Z8bRguEdl0I','...','Action','Movies','...'),
(20,'Big Hero 6','https://www.youtube.com/embed/vco0SpSz17g?si=h54q9pF_Ne4wQi1p','...','Animation','For kids','...'),
(21,'Murder on the Orient Express','https://www.youtube.com/embed/Mq4m3yAoW8E?si=q58cl1x-8fqSWUUD','...','Crime','Blockbusters','...'),
(22,'The Amazing SPIDER-MAN','https://www.youtube.com/embed/upwf8RsyNqQ?si=gDCPV9AlYuW5nf_R','...','Action','Movies','...'),
(23,'Weathering With You','https://www.youtube.com/embed/Q6iK6DjV_iE?si=BXYwYuMW1RAMtRQP','...','Animation','Blockbusters','...');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
