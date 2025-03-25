CREATE TABLE `animals` (
  `animalID` binary(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `englishName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sciName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lifestyle` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slogan` text COLLATE utf8mb4_unicode_ci,
  `bioGroup` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT (now()),
  `updated_at` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`animalID`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `englishName` (`englishName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
