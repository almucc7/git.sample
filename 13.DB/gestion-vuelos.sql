-- MySQL Script generated by MySQL Workbench
-- Mon Feb 17 12:57:21 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema gestion-vuelos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gestion-vuelos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gestion-vuelos` DEFAULT CHARACTER SET utf8 ;
USE `gestion-vuelos` ;

-- -----------------------------------------------------
-- Table `gestion-vuelos`.`carrier`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`carrier` (
  `id_carrier` INT NOT NULL,
  `name_carrier` VARCHAR(45) NOT NULL,
  `url` VARCHAR(45) NULL,
  `code` VARCHAR(45) NULL,
  PRIMARY KEY (`id_carrier`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gestion-vuelos`.`customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`customer` (
  `id_customer` INT NOT NULL,
  `name_user` VARCHAR(45) NOT NULL,
  `other_data` VARCHAR(45) NULL,
  PRIMARY KEY (`id_customer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gestion-vuelos`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`place` (
  `id_place` INT NOT NULL,
  `airport_name` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `timezone` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_place`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gestion-vuelos`.`connection`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`connection` (
  `id_connection` INT NOT NULL AUTO_INCREMENT,
  `time` VARCHAR(45) NOT NULL,
  `id_carrier` INT NOT NULL,
  `to_place_id` INT NOT NULL,
  `from_place_id` INT NOT NULL,
  PRIMARY KEY (`id_connection`, `id_carrier`),
  INDEX `fk_connection_carrier_idx` (`id_carrier` ASC) VISIBLE,
  INDEX `fk_connection_place1_idx` (`to_place_id` ASC) VISIBLE,
  INDEX `fk_connection_place2_idx` (`from_place_id` ASC) VISIBLE,
  CONSTRAINT `fk_connection_carrier`
    FOREIGN KEY (`id_carrier`)
    REFERENCES `gestion-vuelos`.`carrier` (`id_carrier`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_connection_place1`
    FOREIGN KEY (`to_place_id`)
    REFERENCES `gestion-vuelos`.`place` (`id_place`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_connection_place2`
    FOREIGN KEY (`from_place_id`)
    REFERENCES `gestion-vuelos`.`place` (`id_place`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gestion-vuelos`.`flight`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`flight` (
  `f_date` DATETIME NOT NULL,
  `price` INT NULL,
  `currency` VARCHAR(45) NULL,
  `seat_max` VARCHAR(45) NULL,
  `id_connection` INT NOT NULL,
  `id_carrier` INT NOT NULL,
  `seat_occ` VARCHAR(45) NULL,
  PRIMARY KEY (`f_date`, `id_connection`, `id_carrier`),
  INDEX `fk_flight_connection1_idx` (`id_connection` ASC, `id_carrier` ASC) VISIBLE,
  CONSTRAINT `fk_flight_connection1`
    FOREIGN KEY (`id_connection` , `id_carrier`)
    REFERENCES `gestion-vuelos`.`connection` (`id_connection` , `id_carrier`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `gestion-vuelos`.`book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gestion-vuelos`.`book` (
  `id_book` INT NOT NULL,
  `id_flight` DATETIME NOT NULL,
  `id_connection` INT NOT NULL,
  `id_carrier` INT NOT NULL,
  `id_customer` INT NOT NULL,
  PRIMARY KEY (`id_book`, `id_flight`, `id_connection`, `id_carrier`),
  INDEX `fk_book_flight1_idx` (`id_flight` ASC, `id_connection` ASC, `id_carrier` ASC) VISIBLE,
  INDEX `fk_book_customer1_idx` (`id_customer` ASC) VISIBLE,
  CONSTRAINT `fk_book_flight1`
    FOREIGN KEY (`id_flight` , `id_connection` , `id_carrier`)
    REFERENCES `gestion-vuelos`.`flight` (`f_date` , `id_connection` , `id_carrier`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_book_customer1`
    FOREIGN KEY (`id_customer`)
    REFERENCES `gestion-vuelos`.`customer` (`id_customer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
