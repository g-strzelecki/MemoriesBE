-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Wersja serwera:               10.4.24-MariaDB - mariadb.org binary distribution
-- Serwer OS:                    Win64
-- HeidiSQL Wersja:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Zrzut struktury tabela memories.memories
CREATE TABLE IF NOT EXISTS `memories` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selectedFile` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `likeCount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `tags` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Zrzucanie danych dla tabeli memories.memories: ~10 rows (około)
/*!40000 ALTER TABLE `memories` DISABLE KEYS */;
INSERT INTO `memories` (`id`, `title`, `message`, `author`, `selectedFile`, `likeCount`, `createdAt`, `tags`) VALUES
	('369302e9-6eae-4532-85a9-ec88a6b30ada', 'Alaskan Cruise', 'You must go to see it yourself.', 'Wiktor', 'seward_ak_03.jpg', 6, '2022-07-15 15:11:14', 'alaska,seward,cruise'),
	('5c6930af-5df4-4891-904c-cc282b8df4bb', 'Seward Alaska', 'Best trip ever!', 'Grzegorz', 'seward_ak_01.jpg', 0, '2022-07-15 15:08:00', 'seward,salmon,puffins'),
	('c3c3a5c6-7771-4c11-8e18-c7e5be9e2a7a', 'Alaskan Glacier', 'Great view of glaciers.', 'Adam', 'seward_ak_02.jpg', 2, '2022-07-15 15:09:25', 'alaska,seward,glaciers');
/*!40000 ALTER TABLE `memories` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
