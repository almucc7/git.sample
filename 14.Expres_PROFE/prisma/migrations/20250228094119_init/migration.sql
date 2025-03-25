-- CreateTable
CREATE TABLE `animals` (
    `animalID` BINARY(16) NOT NULL DEFAULT (uuid_to_bin(uuid())),
    `name` VARCHAR(255) NOT NULL,
    `englishName` VARCHAR(255) NOT NULL,
    `sciName` VARCHAR(255) NOT NULL,
    `diet` VARCHAR(255) NOT NULL,
    `lifestyle` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `slogan` TEXT NULL,
    `bioGroup` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT (now()),
    `updated_at` TIMESTAMP(0) NULL DEFAULT (now()),

    UNIQUE INDEX `name`(`name`),
    UNIQUE INDEX `englishName`(`englishName`),
    PRIMARY KEY (`animalID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
