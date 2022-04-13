CREATE DATABASE  IF NOT EXISTS `project_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `project_test`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: project_test
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog`
--

DROP TABLE IF EXISTS `blog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog` (
  `blog_id` int NOT NULL AUTO_INCREMENT,
  `blog_title` varchar(256) DEFAULT NULL,
  `user_id` int NOT NULL,
  `wedding_city` varchar(30) NOT NULL,
  `wedding_blog` varchar(5000) DEFAULT NULL,
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `blog_image_url` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`blog_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `blog_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog`
--

LOCK TABLES `blog` WRITE;
/*!40000 ALTER TABLE `blog` DISABLE KEYS */;
INSERT INTO `blog` VALUES (2,'bridal care',3,'Delhi','The Punjab ki kudi met the Kerala ka boy and it was fireworks! We love a cross-cultural wedding, where the traditions of both cultures are celebrated with equal love and pomp! That is exactly what happened with Misha & Ashwin. They chose to celebrate both their cultures and it was a ceremony full of love, laughter, and joy. \nWe loved the decor of each & every ceremony, it was elegant, classy, and had a charm of its own. What we also were in awe of were the ethereal bridal looks Makeup by Ankkit Malik? 5 created for the bride on each function. Captured by Folio Haus , this cross-culture celebration was definitely bookmark-worthy.','2022-01-16 07:10:39','https://owpphotos.s3.ap-south-1.amazonaws.com/e7ff659a-ede3-4341-9959-bf9e2eeaf648.jpg'),(12,'ethnicity in rajsthan',4,'Mumbai','If it wasnt already obvious, you are going to bid adieu to the dry and dehydrated winter skin because you would want anything but that on your wedding day. While following a skincare routine is always on our brides minds, if it doesnt work in your favor, weve got your back.Here are some easy bridal makeup hacks for the winter brides that our popular MUAs swear by! And guess what youre the first ones with whom they decided to share these secrets, so dont forget to take the mental notes.','2022-01-16 07:10:39','https://owpphotos.s3.ap-south-1.amazonaws.com/8dbd20b3-f367-441b-890f-4782b23e38f3.jpg'),(14,'bridal mehndi',1,'Delhi','The Punjab ki kudi met the Kerala ka boy and it was fireworks! We love a cross-cultural wedding, ','2022-01-16 10:15:50','https://owpphotos.s3.ap-south-1.amazonaws.com/e489f701-eae1-4b69-82cb-fcadf7948313.jpg'),(15,'Millennial Couple Managed An Intimate Wedding In The Pandemic',12,'Mumbai','Kehte hain agar kisi cheez ko dil se chaho, to poori kainath use tumse milane ki koshish mein lag jaati hai\n\nOur couple made us believe in this line from Om Shanti Om. As we all are aware of how struggling the last two years were, the virus has interrupted so many plans. Sagarika Kapoor and Nikhil Mehndiratta are one of the couples who suffered because of the pandemic but managed to turn their intimate wedding into a memorable one. \n\nThe couple had planned their wedding for April 2021. But the second wave hit us all and resulted in the indefinite postponement. Their wedding in New Delhi was in full preparation but just a week before their wedding day, the lockdown was announced. But with proper planning and courage, they hosted their small scale wedding. Their wedding has come as an inspiration for all of the people who are planning to get married amid the pandemic.','2022-01-16 10:15:50','https://owpphotos.s3.ap-south-1.amazonaws.com/063c4aca-a6e9-48b2-a702-b1eb7642fe20.jpg'),(16,'Botanical Mandaps That We Are Swooning Over!',10,'Pune','When it comes to the wedding decor, mandap is the most important thing to focus on. For one, that’s where the real magic is going to happen. Secondly, your guests may or may not notice any other decor trend but they sure will notice the mandap. This is why we say that giving in to trending things is probably the best thing. And, nothing is trending more than a botanical mandap right now.\n\nBotanical mandaps are mandaps that are adorned with flowers, leaves, and all things tropical. These are no ordinary floral mandaps but a fancier version of them. So, if you are intrigued, scroll below and check out some botanical mandaps that are gorgeous!','2022-03-29 10:10:34','https://owpphotos.s3.ap-south-1.amazonaws.com/bcc0b2e6-1435-48b4-9c49-1eabeac20a57.jpg'),(17,'Hyderabad Celebrates Wedding Amidts War',11,'Keiv','As missiles continued to rain on Ukrainian soil, Hyderabad stood witness to a peaceful wedding reception — of an Indian groom and an Ukrainian bride — thousands of kms away from the war-struck country. The two newly-wed couple celebrated the day at a venue in the city on February 27, with close friends and family, glad to have made it here safe, before the tension peaked.\nAccording to those present at the event, the couple — Prateek and Lyubov — had tied the knot in Ukraine and travelled to India for the reception (hosted by groom\'s family). They landed in the city only a day before the war started.\n\"Because of the situation prevailing in Ukraine, the reception was a very private affair with only select relatives and close connections. But it was a grand success,\" said Ch Rangarajan, hereditary archaka at the Chilkur Balaji temple, who was on the guest list.\n\"They blessed the couple with ‘askhintalu,\' taken from the Chilkur temple and presented two garlands,\" Rangarajan said adding that the event was \"unique\".','2022-03-30 06:56:14','https://owpphotos.s3.ap-south-1.amazonaws.com/97b753aa-dd9c-4760-a039-69f247bbe9ea.jpg');
/*!40000 ALTER TABLE `blog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `brides_name` varchar(30) DEFAULT NULL,
  `grooms_name` varchar(30) DEFAULT NULL,
  `guest_count` int DEFAULT NULL,
  `wedding_date` date DEFAULT NULL,
  `wedding_city` varchar(30) DEFAULT NULL,
  `pay_amount` double DEFAULT NULL,
  `pay_status` tinyint(1) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`booking_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,'katrina','Vicky',2344,'2020-11-02','Jaipur',784444,1,4,'2022-01-20 09:44:14'),(2,'Simaran','Raj',300,'2022-02-08','ahmedabad',5500000,0,3,'2022-01-20 09:44:14'),(3,'Naina','Bunny',700,'2021-02-08','Pune',450000,1,2,'2022-01-20 09:44:14'),(10,'Naina','Bunny',400,'2023-01-01','ahmedabad',750000,0,1,'2022-01-21 10:32:46'),(11,'Janvi','Prakash',20,'1980-01-01','Pune',520000,0,2,'2022-01-24 10:33:38'),(12,'Janvi','Prakash',20,'1980-01-01','Pune',520000,0,2,'2022-01-24 10:34:21'),(13,'Janvi','Prakash',20,'1980-01-01','Pune',520000,0,2,'2022-01-24 10:35:37'),(14,'Janvi','Prakash',20,'1980-01-01','Pune',520000,0,2,'2022-01-24 10:36:41'),(15,'Janvi','Prakash',20,'1980-01-01','Pune',520000,0,2,'2022-01-24 10:38:10');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_services`
--

DROP TABLE IF EXISTS `master_services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_services` (
  `v_service_id` int NOT NULL AUTO_INCREMENT,
  `s_servicename` varchar(25) NOT NULL,
  `s_thumbnail_Link` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`v_service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_services`
--

LOCK TABLES `master_services` WRITE;
/*!40000 ALTER TABLE `master_services` DISABLE KEYS */;
INSERT INTO `master_services` VALUES (1,'Planner','https://owpphotos.s3.ap-south-1.amazonaws.com/Wedding-Planner.jpg'),(2,'Photographer','https://owpphotos.s3.ap-south-1.amazonaws.com/photography.jpg'),(3,'Makeupartist','https://owpphotos.s3.ap-south-1.amazonaws.com/makeup.jpg'),(4,'Transportation','https://owpphotos.s3.ap-south-1.amazonaws.com/transport1.jpg'),(5,'Venue','https://owpphotos.s3.ap-south-1.amazonaws.com/venue.jpg'),(6,'Decorators','https://owpphotos.s3.ap-south-1.amazonaws.com/decor5.jpg'),(7,'Music','https://owpphotos.s3.ap-south-1.amazonaws.com/music.jpg'),(8,'Mehandi Artist','https://owpphotos.s3.ap-south-1.amazonaws.com/mehandi.jpg'),(9,'Pandit','https://owpphotos.s3.ap-south-1.amazonaws.com/pandit.jpg'),(10,'Invitation','https://owpphotos.s3.ap-south-1.amazonaws.com/invitation.jpg'),(11,'Apparel','https://owpphotos.s3.ap-south-1.amazonaws.com/apparel.jpg');
/*!40000 ALTER TABLE `master_services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `orders_vs_id` int DEFAULT NULL,
  `booking_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `orders_vs_id` (`orders_vs_id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`orders_vs_id`) REFERENCES `vendor_service_details` (`vs_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`booking_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,1,1),(2,4,1),(3,5,1),(4,11,1),(5,1,2),(6,9,2),(7,5,3),(8,6,3),(9,5,11),(10,6,11),(11,13,11),(12,5,12),(13,6,12),(14,13,12),(15,11,12),(16,5,13),(17,6,13),(18,13,13),(19,11,13),(20,5,14),(21,6,14),(22,13,14),(23,11,14),(24,5,15),(25,6,15),(26,13,15),(27,11,15);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `photos` (
  `p_id` int NOT NULL AUTO_INCREMENT,
  `vs_id` int DEFAULT NULL,
  `image` varchar(500) DEFAULT NULL,
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`p_id`),
  KEY `vs_id` (`vs_id`),
  CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`vs_id`) REFERENCES `vendor_service_details` (`vs_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photos`
--

LOCK TABLES `photos` WRITE;
/*!40000 ALTER TABLE `photos` DISABLE KEYS */;
INSERT INTO `photos` VALUES (1,11,'https://owpphotos.s3.ap-south-1.amazonaws.com/bcc0b2e6-1435-48b4-9c49-1eabeac20a57.jpg','2022-03-31 11:21:58'),(2,5,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed1.jpg','2022-03-31 14:42:24'),(3,5,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed24.jpg','2022-03-31 14:42:25'),(4,5,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed25.jpg','2022-03-31 14:42:25'),(5,5,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed5.jpg','2022-03-31 14:42:26'),(6,4,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed33%2Cjpg.jpg','2022-03-31 14:43:57'),(7,4,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed26.jpg','2022-03-31 14:43:57'),(8,4,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed9.jpg','2022-03-31 14:43:57'),(9,4,'https://owpphotos.s3.ap-south-1.amazonaws.com/wed9.jpg','2022-03-31 14:43:59');
/*!40000 ALTER TABLE `photos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rating_reviews`
--

DROP TABLE IF EXISTS `rating_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rating_reviews` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `vs_id` int NOT NULL,
  `user_id` int NOT NULL,
  `r_rating` double NOT NULL,
  `r_reviews` varchar(256) DEFAULT NULL,
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`r_id`),
  KEY `user_id` (`user_id`),
  KEY `vs_id` (`vs_id`),
  CONSTRAINT `rating_reviews_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `rating_reviews_ibfk_2` FOREIGN KEY (`vs_id`) REFERENCES `vendor_service_details` (`vs_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rating_reviews`
--

LOCK TABLES `rating_reviews` WRITE;
/*!40000 ALTER TABLE `rating_reviews` DISABLE KEYS */;
INSERT INTO `rating_reviews` VALUES (1,1,3,3.9,'great planning of everything','2022-01-10 09:24:50'),(2,1,3,3.9,'great planning of everything','2022-01-10 09:30:22'),(3,1,1,3.9,'great planning ','2022-01-10 09:30:23'),(4,1,2,3.9,'New Review','2022-01-10 09:30:24'),(5,4,1,2.5,'great planning ','2022-01-11 11:03:02'),(6,5,4,4.5,'Lai Bhari J1','2022-01-11 11:06:10'),(7,5,4,3.5,'Good J1','2022-01-11 11:22:00'),(17,6,2,4.5,'amazing experience','2022-04-01 04:10:11'),(18,6,3,3.7,'great clicks','2022-04-01 04:10:11'),(19,6,4,2.5,'amazing clicks','2022-04-01 04:10:11'),(20,6,14,3.5,'great experience','2022-04-01 04:10:11'),(22,10,4,4.5,'good experience','2022-04-01 04:10:12'),(23,10,6,2.5,'nice venue','2022-04-01 04:10:12'),(24,10,7,3.1,'amazing arrangements','2022-04-01 04:10:24'),(25,10,12,3.9,'great venue','2022-04-01 04:11:19'),(26,5,10,4,'Awsome Venue,Great Arrangements','2022-04-01 09:38:00'),(27,5,10,4,'Again Awsome Venue,Great Arrangements','2022-04-01 09:40:36'),(28,9,10,5,'Siri weddings is very professional and energetic team who can handle any events seemlessly with great level of service... We were so happy and tireless throughout the marriage process... ','2022-04-01 09:43:52'),(29,4,10,2,'. He is a gifted guy with magnatic and attractive attitude. Overall Siri weddings is a best example for promise delivery','2022-04-01 09:45:41'),(30,6,10,5,'Okay','2022-04-01 09:49:21');
/*!40000 ALTER TABLE `rating_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_firstname` varchar(20) NOT NULL,
  `user_lastname` varchar(20) NOT NULL,
  `user_email` varchar(40) NOT NULL,
  `user_password` varchar(500) DEFAULT NULL,
  `user_mobile` varchar(10) DEFAULT NULL,
  `user_addressline` varchar(100) DEFAULT NULL,
  `user_city` varchar(30) DEFAULT NULL,
  `user_state` varchar(30) DEFAULT NULL,
  `user_pincode` int DEFAULT NULL,
  `user_profilephoto` varchar(256) DEFAULT NULL,
  `user_role` varchar(10) DEFAULT NULL,
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email` (`user_email`),
  CONSTRAINT `check_mobile` CHECK ((not((`user_mobile` like _utf8mb4'%[^0-9]%'))))
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Pratik','Suryawanshi','pratik@gmai.com','$2a$12$2bgZ7mcDgySjvSvUhzBU3uF4yR0zmy39qv/XtigvGPWJp67UeNfqS','9012345645','xyz abc sdf','dahiwadi','MH',415508,NULL,'Admin','2022-01-08 09:22:56'),(2,'Shruti','Patil','shruti@gmai.com','$2a$12$8aFILmUZAZ7KLEZTYQ9rV.6UqQm3SyrEaY4VBgeK81uwrheGi06la','9503626732','Shrirang colony','amalaner','MH',425401,NULL,'Vendor','2022-01-09 06:29:02'),(3,'Gaurav','Shinde','gaurav@gmai.com','test','9785626732',NULL,'Pune',NULL,0,'https://owpphotos.s3.ap-south-1.amazonaws.com/linkedin.jpeg','Vendor','2022-01-09 07:25:26'),(4,'Tejal','Patil','tejal@gmai.com','$2a$10$4sZpfsH0Ho1NE2TPDcWjRuQiftFjk6i.mP3s2/fv/jTocwfl2uvwa','9787857372',NULL,'Satara',NULL,0,NULL,'Customer','2022-01-09 07:44:42'),(5,'Adesh','jadhav','Adesh@test.com','test','9874563210','bunglow','Mumbai','MH',789789,NULL,'Customer','2022-01-17 12:59:57'),(6,'Nitin','Rane','Nitin@test.com','test','9874563210','bunglow','Delhi','Delhi',456456,NULL,'Customer','2022-01-17 12:59:59'),(7,'Riya','Randhawa ','riya@gmail.com','$2a$10$J/OPhMyj4bd4mGxzOaYxmOLYVAs19211FuU.iyK.Z74GVMAET.TFa','9642242668',NULL,'Bangalore',NULL,0,NULL,NULL,'2022-01-24 11:12:40'),(8,'Nitin','Kudale','nitin@sunbeam.com','$2a$10$6sJkZ/GN44fI5noOTvbWfelX3c/l.aCpwjSuHn4FXO70TSA/paMrm','7894561245',NULL,'Mumbai',NULL,0,NULL,NULL,'2022-03-27 07:15:36'),(9,'Radha','Patil','radha@patil.com','$2a$10$xIJeEIwIcAPIexF9EtaHT.sNkQPTHLGGI4la7MxLbhvexzMJ6h0Ye','7412589630',NULL,'Delhi',NULL,0,NULL,NULL,'2022-03-28 04:15:13'),(10,'Mahesh','Biden','mahesh@trump.com','$2a$10$1aAR.F.Gq5o.DbYRVsvhr.f6R7Aq/9wFmHc84hdFK4yaaHCH143sC','7895412396',NULL,'Thane',NULL,0,NULL,'Planner','2022-03-28 04:18:27'),(11,'Mishel','Obama','mishel@obama.com','$2a$10$BceNG/0iRuhslLX.cJ99IOFO6bekO3/CJJ7m5xsHKEq/qzP.U6J/q','7412589632',NULL,'Ahmdabad',NULL,0,NULL,'Customer','2022-03-28 04:26:29'),(12,'Nilesh','Kale','nilesh@kale.com','$2a$10$k8JIFuf6Ic7gopaPfv0YDOl.B3HakNNKwcZON/lLxXd1wQyFNCbj6','7854125963',NULL,'Chennai',NULL,0,NULL,'Vendor','2022-03-28 04:29:20'),(13,'Swati','Patil','swati@patil.com','$2a$10$cSe17BsXe/EFNFKRlk.A5uFvI8UALepw6ysV.5FtAvtvWLkNBvXhC','7412589634',NULL,'Lucknow',NULL,0,NULL,'Customer','2022-03-30 10:36:48'),(14,'Digvijay','Singh','digvijay@singh.com','$2a$10$hHCPNUHI7iWaHkjeagWmDe2HMNcoRNnmiea7vpIlXz3tTiXemNfVy','4152639874',NULL,'Vizag',NULL,0,'https://owpphotos.s3.ap-south-1.amazonaws.com/d82e7cee-42a5-4419-8fc3-510a9f17707b.jpg','Customer','2022-03-30 10:38:05');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor_service_details`
--

DROP TABLE IF EXISTS `vendor_service_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendor_service_details` (
  `vs_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `v_service_id` int DEFAULT NULL,
  `d_brandname` varchar(50) DEFAULT NULL,
  `d_specification` varchar(256) DEFAULT NULL,
  `d_servicedetails` varchar(2048) DEFAULT NULL,
  `d_serviceprice` double DEFAULT NULL,
  `vs_isapproved` tinyint(1) DEFAULT '2',
  `createdtimestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`vs_id`),
  KEY `user_id` (`user_id`),
  KEY `v_service_id` (`v_service_id`),
  CONSTRAINT `vendor_service_details_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `vendor_service_details_ibfk_2` FOREIGN KEY (`v_service_id`) REFERENCES `master_services` (`v_service_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor_service_details`
--

LOCK TABLES `vendor_service_details` WRITE;
/*!40000 ALTER TABLE `vendor_service_details` DISABLE KEYS */;
INSERT INTO `vendor_service_details` VALUES (1,2,1,'Shadi Planners','pre wedding/ post wedding','complete wedding package',597999,0,'2022-01-09 10:32:15'),(4,3,2,'Sun Photographers','pre wedding, cinematography, wedding','we make your dream wedding Alive',150000,1,'2022-01-09 10:35:08'),(5,3,5,'Paradise Halls','Catering +Hall + Accodamation','Catering - veg 210 rs/plate',25000,0,'2022-01-09 11:03:03'),(6,2,2,'Figma Photographers','pre wedding, cinematography, wedding','we make your dream wedding Alive',150000,2,'2022-01-12 11:14:44'),(9,3,5,'badhai ho','Comprising of a passionate, enthusiastic and artful team of creative photographers, cinematographers and editors. at Second Camera Productions will make sure that your event stays in your memories forever along with the misty emotions of the day','complete wedding package',578199,2,'2022-01-17 10:24:55'),(10,3,5,'badhai ho','pre wedding/ post wedding','Comprising of a passionate, enthusiastic and artful team of creative photographers, cinematographers and editors. at Second Camera Productions will make sure that your event stays in your memories forever along with the misty emotions of the day',578199,0,'2022-01-17 10:52:53'),(11,3,5,'badhai ho','pre wedding/ post wedding','complete wedding package',578199,2,'2022-01-17 10:56:13'),(13,2,1,'merriagery','pre wedding/ post wedding','complete wedding package',97999,0,'2022-01-17 12:24:03');
/*!40000 ALTER TABLE `vendor_service_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-02  9:42:16
