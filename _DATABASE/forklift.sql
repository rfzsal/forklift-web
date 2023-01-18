-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2023 at 01:39 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forklift`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_pengecekan`
--

CREATE TABLE `data_pengecekan` (
  `id` varchar(9) NOT NULL,
  `id_forklift` varchar(6) NOT NULL,
  `nama_driver` varchar(25) NOT NULL,
  `shift_driver` varchar(5) NOT NULL,
  `status` varchar(20) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `data_pengecekan`
--

INSERT INTO `data_pengecekan` (`id`, `id_forklift`, `nama_driver`, `shift_driver`, `status`, `timestamp`) VALUES
('252242870', 'B29', 'Maulana', 'Siang', 'Kurang Baik', '2023-01-17 12:24:49'),
('296438928', 'A2', 'asdasd', 'Pagi', 'Kurang Baik', '2023-01-17 12:30:09'),
('441685160', 'K9', 'HAHahds', 'Pagi', 'Kurang Baik', '2023-01-17 12:31:12'),
('468451068', 'A23', 'Yusuf', 'Pagi', 'Kurang Baik', '2023-01-17 12:16:16'),
('516467571', 'A12', 'Hhidayat', 'Pagi', 'Kurang Baik', '2023-01-17 12:27:34'),
('732042069', 'B21', 'Irfan', 'Pagi', 'Baik', '2023-01-17 12:16:43');

-- --------------------------------------------------------

--
-- Table structure for table `data_pengguna`
--

CREATE TABLE `data_pengguna` (
  `id` varchar(6) NOT NULL,
  `nama` varchar(25) NOT NULL,
  `kata_sandi` char(60) NOT NULL,
  `role` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `data_pengguna`
--

INSERT INTO `data_pengguna` (`id`, `nama`, `kata_sandi`, `role`) VALUES
('000000', 'driver', '$2b$10$QFHW0R.n0juNQdtZ9aGg/./nNoOQJRByG0k8ghoTTbsjPYjs2LUDS', 'driver'),
('111111', 'mechanic', '$2b$10$yymq33snkKGAzJyU85TwIOGax/eaI/aTwC52apzrCBgockRZnyMJa', 'mechanic'),
('200884', 'irfanhidayat', '$2b$10$gDg3/FOcIX12te7ZevOgW.isrD.l/DiWAxtymJJvQ7K5jgZt6Jviq', 'leader');

-- --------------------------------------------------------

--
-- Table structure for table `data_perbaikan`
--

CREATE TABLE `data_perbaikan` (
  `id` varchar(9) NOT NULL,
  `id_forklift` varchar(6) NOT NULL,
  `nama_mechanic` varchar(25) DEFAULT NULL,
  `shift_mechanic` varchar(5) DEFAULT NULL,
  `nama_leader` varchar(25) DEFAULT NULL,
  `shift_leader` varchar(5) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `data_perbaikan`
--

INSERT INTO `data_perbaikan` (`id`, `id_forklift`, `nama_mechanic`, `shift_mechanic`, `nama_leader`, `shift_leader`, `status`, `timestamp`) VALUES
('252242870', 'B29', NULL, NULL, NULL, NULL, 'Belum Diperbaiki', '2023-01-17 12:24:49'),
('296438928', 'A2', NULL, NULL, NULL, NULL, 'Belum Diperbaiki', '2023-01-17 12:30:09'),
('441685160', 'K9', 'Ihsan', 'Pagi', 'Yusuf', 'Siang', 'Sudah Diperbaiki', '2023-01-17 12:31:12'),
('468451068', 'A23', NULL, NULL, NULL, NULL, 'Belum Diperbaiki', '2023-01-17 12:16:16'),
('516467571', 'A12', NULL, NULL, NULL, NULL, 'Belum Diperbaiki', '2023-01-17 12:27:34');

-- --------------------------------------------------------

--
-- Table structure for table `detail_pengecekan`
--

CREATE TABLE `detail_pengecekan` (
  `id` varchar(9) NOT NULL,
  `ban` varchar(50) DEFAULT NULL,
  `fork` varchar(50) DEFAULT NULL,
  `seat_belt` varchar(50) DEFAULT NULL,
  `lampu_depan_belakang` varchar(50) DEFAULT NULL,
  `rem_tangan_kaki` varchar(50) DEFAULT NULL,
  `lampu_sein` varchar(50) DEFAULT NULL,
  `klakson` varchar(50) DEFAULT NULL,
  `alarm_mundur` varchar(50) DEFAULT NULL,
  `lampu_sirine` varchar(50) DEFAULT NULL,
  `tempat_duduk` varchar(50) DEFAULT NULL,
  `kaca_spion` varchar(50) DEFAULT NULL,
  `apar` varchar(50) DEFAULT NULL,
  `oli` varchar(50) DEFAULT NULL,
  `kebersihan` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `detail_pengecekan`
--

INSERT INTO `detail_pengecekan` (`id`, `ban`, `fork`, `seat_belt`, `lampu_depan_belakang`, `rem_tangan_kaki`, `lampu_sein`, `klakson`, `alarm_mundur`, `lampu_sirine`, `tempat_duduk`, `kaca_spion`, `apar`, `oli`, `kebersihan`) VALUES
('252242870', 'Kempes', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('296438928', NULL, NULL, NULL, NULL, NULL, 'Ada kerusakan', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('441685160', NULL, NULL, NULL, 'Ada kerusakan', NULL, NULL, NULL, NULL, NULL, 'Ada kerusakan', NULL, NULL, 'Ada kerusakan', 'Kendaraan kotor'),
('468451068', NULL, NULL, NULL, NULL, 'Rem macet', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Bocor', NULL),
('516467571', NULL, NULL, 'Putus', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('732042069', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_pengecekan`
--
ALTER TABLE `data_pengecekan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_pengguna`
--
ALTER TABLE `data_pengguna`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_perbaikan`
--
ALTER TABLE `data_perbaikan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `detail_pengecekan`
--
ALTER TABLE `detail_pengecekan`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `data_perbaikan`
--
ALTER TABLE `data_perbaikan`
  ADD CONSTRAINT `data_perbaikan_ibfk_1` FOREIGN KEY (`id`) REFERENCES `data_pengecekan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `detail_pengecekan`
--
ALTER TABLE `detail_pengecekan`
  ADD CONSTRAINT `detail_pengecekan_ibfk_1` FOREIGN KEY (`id`) REFERENCES `data_pengecekan` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
