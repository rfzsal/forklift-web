-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2023 at 05:20 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
  `id` int(9) NOT NULL,
  `id_forklift` varchar(6) NOT NULL,
  `nama_driver` varchar(25) NOT NULL,
  `shift_driver` varchar(5) NOT NULL,
  `status` varchar(20) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
('232187', 'driver', '$2b$10$7bqmtnn5Bc3Soc2a2vVH6O.4x3FbZS8d/I5TtG8b9jjMNsc5ZFsh2', 'driver'),
('382113', 'mechanic', '$2b$10$cxgFXS6p9Kor5LPhKK85Cu42qfqbRk4uRDELGMj2mU6tujR4LEfvi', 'mechanic'),
('926469', 'leader', '$2b$10$18NNF1xMIiNbbyf/8LO2DumgysaQ1EQ77oD7L6Q1tneI5TW75BPoC', 'leader');

-- --------------------------------------------------------

--
-- Table structure for table `data_perbaikan`
--

CREATE TABLE `data_perbaikan` (
  `id` int(9) NOT NULL,
  `id_forklift` varchar(6) NOT NULL,
  `nama_mechanic` varchar(25) DEFAULT NULL,
  `shift_mechanic` varchar(5) DEFAULT NULL,
  `nama_leader` varchar(25) DEFAULT NULL,
  `shift_leader` varchar(5) DEFAULT NULL,
  `status` varchar(20) NOT NULL,
  `timestamp` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `detail_pengecekan`
--

CREATE TABLE `detail_pengecekan` (
  `id` int(9) NOT NULL,
  `ban` varchar(25) DEFAULT NULL,
  `fork` varchar(25) DEFAULT NULL,
  `seat_belt` varchar(25) DEFAULT NULL,
  `lampu_depan_belakang` varchar(25) DEFAULT NULL,
  `rem_tangan_kaki` varchar(25) DEFAULT NULL,
  `lampu_sein` varchar(25) DEFAULT NULL,
  `klakson` varchar(25) DEFAULT NULL,
  `alarm_mundur` varchar(25) DEFAULT NULL,
  `lampu_sirine` varchar(25) DEFAULT NULL,
  `tempat_duduk` varchar(25) DEFAULT NULL,
  `kaca_spion` varchar(25) DEFAULT NULL,
  `apar` varchar(25) DEFAULT NULL,
  `oli` varchar(25) DEFAULT NULL,
  `kebersihan` varchar(25) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
