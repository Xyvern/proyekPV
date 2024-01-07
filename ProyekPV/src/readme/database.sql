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
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
('yinko',8,'test','2024-01-04 16:36:28',54),
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
('bitapunya',15),
('bitapunya',18),
('bitapunya',23),
('LieTaTze',1),
('LieTaTze',2),
('LieTaTze',5),
('LieTaTze',18),
('LieTaTze',23),
('martinisme',12),
('martinisme',16),
('martinisme',18),
('martinisme',20),
('misatha',12),
('misatha',17),
('misatha',20),
('misatha',22),
('misatha',23),
('ohara',1),
('ohara',18),
('ohara',20),
('ohara',22),
('ohara',23),
('tenonenot',3),
('tenonenot',12),
('xyvern',2),
('xyvern',5),
('xyvern',18),
('yinko',7),
('yinko',8),
('yinko',9),
('yinko',13),
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
('bitapunya','/src/assets/pfp/1.png','081431289076','tabibitapunya','punyabita@gmail.com'),
('LieTaTze','/src/assets/pfp/1.png','081987654321','unbansayawoy','linonibos@gmail.com'),
('martinisme','/src/assets/pfp/1.png','081123456789','tanyamerry','sudjayamartinisme@gmail.com'),
('misatha','/src/assets/pfp/1.png','081987654321','lucario','mistermst@gmail.com'),
('naZura','/src/assets/pfp/1.png','081333444555','Znyahurufbesar','raphhans@gmail.com'),
('ohara','/src/assets/pfp/1.png','081872615009','niconiconi','clutchmeister@gmail.com'),
('tenonenot','/src/assets/pfp/1.png','081999888777','ANITAMAXWYN','valentinotan@gmail.com'),
('xyvern','/src/assets/pfp/1.png','081234567890','sipenexe','darrencahya@gmail.com'),
('yinko','/src/assets/pfp/2.png','081876543210','sayajagoreact','merryfebyanti@gmail.com');

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
(1,'Fast X','https://www.youtube.com/embed/eoOaKN4qCKw?si=rFGAH_zlqTwe-r8W','Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they\'ve ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom\'s world and destroy everything and everyone he loves.','Crime','Blockbusters','/src/assets/banner/fastx.png'),
(2,'Blue Beetle','https://www.youtube.com/embed/4wxyy8Rcz4k?si=4lIq1RFEba6mMB3t','Jaime Reyes suddenly finds himself in possession of an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he\'s bestowed with an incredible suit of armor that\'s capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle.','Action','Movies','/src/assets/banner/bluebeetle.jpg'),
(3,'Gran Turismo','https://www.youtube.com/embed/GgKmhDaVo48?si=KK3Ek6hMblmfMgJn','The true story of a team of unlikely underdogs a working-class gamer, a former race-car driver, and an idealistic motorsport executive who risk it all to take on the most elite sport in the world.','Action','Movies','/src/assets/banner/granturismo.jpg'),
(4,'The Super Mario Bros. Movie','https://www.youtube.com/embed/TnGl01FkMMo?si=R8BbApUDnvR4RHYF','While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported through a mysterious pipe to a magical new world. But when the siblings are separated, an epic adventure begins.','Animation','For kids','/src/assets/banner/mario.jpg'),
(5,'A Haunting In Venice','https://www.youtube.com/embed/yEddsSwweyE?si=nDTg7SBPvA1FhQBF','Now retired and living in self-imposed exile in the world\'s most glamorous city, Poirot reluctantly attends a seance at a decaying, haunted palazzo. He soons gets thrust into a sinister world of shadows and secrets when one of the guests is murdered.','Crime','Movies','/src/assets/banner/ahauntinginvenice.jpg'),
(6,'La La Land','https://www.youtube.com/embed/0pdqf4P9MB8?si=316_kmraIq5ZlmZs','Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.','Drama','Musical','/src/assets/banner/lalaland.jpg'),
(7,'Poltergeist','https://www.youtube.com/embed/HD2sz9RVzfM?si=nChPbFGYpOLBTwN1','Strange and creepy happenings beset an average California family, the Freelings -- Steve (Craig T. Nelson), Diane (JoBeth Williams), teenaged Dana (Dominique Dunne), eight-year-old Robbie (Oliver Robins), and five-year-old Carol Ann (Heather O\'Rourke) -- when ghosts commune with them through the television set. Initially friendly and playful, the spirits turn unexpectedly menacing, and, when Carol Ann goes missing, Steve and Diane turn to a parapsychologist and eventually an exorcist for help.','Horror','Critically Acclaimed','/src/assets/banner/poltergeist.jpg'),
(8,'Interstellar','https://www.youtube.com/embed/zSWdZVtXT7E?si=Q6zMAcqNx7K4SPkv','In Earth\'s future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth\'s population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind\'s new home.','Sci-Fi','Blockbusters','/src/assets/banner/interstellar.jpeg'),
(9,'The Little Mermaid','https://www.youtube.com/embed/kpGo2_d3oYE?si=VM5NE_87Z0I6Utub','In Disney\'s beguiling animated romp, rebellious 16-year-old mermaid Ariel (Jodi Benson) is fascinated with life on land. On one of her visits to the surface, which are forbidden by her controlling father, King Triton, she falls for a human prince. Determined to be with her new love, Ariel makes a dangerous deal with the sea witch Ursula (Pat Carroll) to become human for three days. But when plans go awry for the star-crossed lovers, the king must make the ultimate sacrifice for his daughter.','Romance','Musical','/src/assets/banner/littlemermaid.webp'),
(10,'Oppenheimer','https://www.youtube.com/embed/uYPbbksJxIg?si=A69Xscs5jju7nvcB','During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world\'s first nuclear explosion, forever changing the course of history.\r\nPeople also search for','Drama','Critically Acclaimed','/src/assets/banner/oppenheimer.jpg'),
(11,'Avengers: Infinity War','https://www.youtube.com/embed/QwievZ1Tx-8?si=apmeqWbPFBjEnq3M','Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.','Action','Blockbusters','/src/assets/banner/infinitywar.webp'),
(12,'BoBoiBoy The Movie','https://www.youtube.com/embed/PSnxXrS151g?si=jxPsdHBsNGvVTXGy','BoBoiBoy\'s robot friend, Ochobot, has been kidnapped by a group of alien treasure hunters named The Tengkotak in order to use him to locate an ancient and powerful Sfera Kuasa hiding on earth.','Comedy','For kids','/src/assets/banner/boboiboy.jpg'),
(13,'The Nun II','https://www.youtube.com/embed/QF-oyCwaArU?si=pX0Gys06HAx8hjBU','In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.','Horror','Movies','/src/assets/banner/thenun.jpg'),
(14,'Mission Impossible - Dead Reckoning','https://www.youtube.com/embed/avz06PDqDbM?si=GCr6t0i-LtzMykmD','Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission not even the lives of those he cares about most.','Action','Blockbusters','/src/assets/banner/missionimpossible.jpg'),
(15,'The SpongeBob SquarePants Movie Rehydrated','https://www.youtube.com/embed/ECGeIyKkTFg?si=8w31x0exIb4KgX75','In the fan reanimation of the 2004 classic, SpongeBob SquarePants and Patrick Star are in for the adventure of a lifetime when they have to go on a journey to save King Neptune\'s stolen crown.','Comedy','For kids','/src/assets/banner/spongebob.jpg'),
(16,'Ted 2','https://www.youtube.com/embed/S3AVcCggRnU?si=E5csygUQAFz7eLBE','Life has changed drastically for thunder buddies John (Mark Wahlberg), now a bachelor, and best pal Ted (Seth MacFarlane), now married to the woman (Jessica Barth) of his dreams. Problems arise when the couple decide to adopt a child, but the law declares Ted to be property and not a person. Angry and dejected, the lovably foulmouthed teddy bear must now seek legal help from a young lawyer (Amanda Seyfried) and a legendary, civil-rights attorney (Morgan Freeman) to get the justice he deserves.','Comedy','Movies','/src/assets/banner/ted2.jpg'),
(17,'Transformers: Revenge of the Fallen','https://www.youtube.com/embed/fnXzKwUgDhg?si=uwojRj7xKBTXyuDW','Two years after he and his Autobot friends saved the Earth from the Decepticons, Sam Witwicky (Shia LaBeouf) faces a new battle: college. Meanwhile, Optimus Prime and the Autobots are working with a secret military organization and trying to make a home for themselves on Earth. When an ancient Decepticon known as The Fallen rises up to wreak vengeance, Sam and his girlfriend, Mikaela, must figure out the history of the Transformers on Earth and find a way to defeat The Fallen once and for all.','Sci-Fi','Blockbusters','/src/assets/banner/transformer.jpg'),
(18,'How To Train Your Dragon','https://www.youtube.com/embed/oKiYuIsPxYk?si=64tDWA-FHaRo1d7u','Hiccup (Tawin Yavapolkul) is a Norse teenager from the island of Berk, where fighting dragons is a way of life. His progressive views and weird sense of humor make him a misfit, despite the fact that his father (Kongkrapunt Sangsuriya) is chief of the clan. Tossed into dragon-fighting school, he endeavors to prove himself as a true Viking, but when he befriends an injured dragon he names Toothless, he has the chance to plot a new course for his people\'s future.','Animation','For kids','/src/assets/banner/httyd.jpeg'),
(19,'War for the Planet of the Apes','https://www.youtube.com/embed/JDcAlo8i2y8?si=nEvm2Z8bRguEdl0I','Caesar (Andy Serkis) and his apes are forced into a deadly conflict with an army of humans led by a ruthless colonel (Woody Harrelson). After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the colonel are pitted against each other in an epic battle that will determine the fate of both of their species and the future of the planet.','Action','Movies','/src/assets/banner/warplanetapes.webp'),
(20,'Big Hero 6','https://www.youtube.com/embed/vco0SpSz17g?si=h54q9pF_Ne4wQi1p','Robotics prodigy Hiro (Ryan Potter) lives in the city of San Fransokyo. Next to his older brother, Tadashi, Hiro\'s closest companion is Baymax (Scott Adsit), a robot whose sole purpose is to take care of people. When a devastating turn of events throws Hiro into the middle of a dangerous plot, he transforms Baymax and his other friends, Go Go Tamago (Jamie Chung), Wasabi (Damon Wayans Jr.), Honey Lemon (Genesis Rodriguez) and Fred (T.J. Miller) into a band of high-tech heroes.','Animation','For kids','/src/assets/banner/bighero6.jpg'),
(21,'Murder on the Orient Express','https://www.youtube.com/embed/Mq4m3yAoW8E?si=q58cl1x-8fqSWUUD','A lavish trip through Europe quickly unfolds into a race against time to solve a murder aboard a train. When an avalanche stops the Orient Express dead in its tracks, the world\'s greatest detective -- Hercule Poirot -- arrives to interrogate all passengers and search for clues before the killer can strike again.','Crime','Blockbusters','/src/assets/banner/murderontheorientexpress.jpg'),
(22,'The Amazing SPIDER-MAN','https://www.youtube.com/embed/upwf8RsyNqQ?si=gDCPV9AlYuW5nf_R','Abandoned by his parents and raised by an aunt and uncle, teenager Peter Parker (Andrew Garfield), AKA Spider-Man, is trying to sort out who he is and exactly what his feelings are for his first crush, Gwen Stacy (Emma Stone). When Peter finds a mysterious briefcase that was his father\'s, he pursues a quest to solve his parents\' disappearance. His search takes him to Oscorp and the lab of Dr. Curt Connors (Rhys Ifans), setting him on a collision course with Connors\' alter ego, the Lizard.','Action','Movies','/src/assets/banner/spiderman.webp'),
(23,'Weathering With You','https://www.youtube.com/embed/Q6iK6DjV_iE?si=BXYwYuMW1RAMtRQP','Set during a period of exceptionally rainy weather, high-school boy Hodaka Morishima runs away from his troubled rural home to Tokyo and befriends an orphan girl who can manipulate the weather.','Animation','Blockbusters','/src/assets/banner/tenkinoko.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
