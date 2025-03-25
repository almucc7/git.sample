-- CreateTable
CREATE TABLE `films` (
    `film_id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `release_year` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `poster` VARCHAR(191) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `films_title_idx`(`title`),
    UNIQUE INDEX `films_title_release_year_key`(`title`, `release_year`),
    PRIMARY KEY (`film_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
