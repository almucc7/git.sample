-- MySQL Script generated by MySQL Workbench
-- Mon Feb 17 13:45:23 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tienda
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tienda
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tienda` DEFAULT CHARACTER SET utf8 ;
USE `tienda` ;

-- -----------------------------------------------------
-- Table `tienda`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`categoria` (
  `id_categoria` INT NOT NULL,
  `nombre_categoria` VARCHAR(45) NOT NULL,
  `descripcion_categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`proveedor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`proveedor` (
  `id_proveedor` INT NOT NULL,
  `nombre_proveedor` VARCHAR(45) NULL,
  PRIMARY KEY (`id_proveedor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`producto` (
  `id_producto` INT NOT NULL,
  `nombre_producto` VARCHAR(45) NOT NULL,
  `precio_producto` VARCHAR(45) NOT NULL,
  `id_categoria` INT NOT NULL,
  `id_proveedor` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `id_categoria`, `id_proveedor`),
  INDEX `fk_producto_categoria1_idx` (`id_categoria` ASC) VISIBLE,
  INDEX `fk_producto_proveedor1_idx` (`id_proveedor` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `tienda`.`categoria` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_proveedor1`
    FOREIGN KEY (`id_proveedor`)
    REFERENCES `tienda`.`proveedor` (`id_proveedor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`cliente` (
  `id_cliente` INT NOT NULL,
  `nombre_cliente` VARCHAR(45) NULL,
  `apellido1_cliente` VARCHAR(45) NULL,
  `email_cliente` VARCHAR(45) NULL,
  `telefono_cliente` VARCHAR(45) NULL,
  PRIMARY KEY (`id_cliente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`pedido_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`pedido_item` (
  `id_pedido_item` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `id_producto` INT NOT NULL,
  PRIMARY KEY (`id_pedido_item`, `id_producto`),
  INDEX `fk_pedido_item_producto1_idx` (`id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_item_producto1`
    FOREIGN KEY (`id_producto`)
    REFERENCES `tienda`.`producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`transportista`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`transportista` (
  `id_transportista` INT NOT NULL,
  `nombre_transportista` VARCHAR(45) NULL,
  PRIMARY KEY (`id_transportista`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`pedido` (
  `id_pedido` INT NOT NULL,
  `fecha_pedido` DATETIME NOT NULL,
  `id_cliente` INT NOT NULL,
  `id_pedido_item` INT NOT NULL,
  `id_transportista` INT NOT NULL,
  PRIMARY KEY (`id_pedido`, `id_cliente`, `id_pedido_item`, `id_transportista`),
  INDEX `fk_pedido_cliente_idx` (`id_cliente` ASC) VISIBLE,
  INDEX `fk_pedido_pedido_item1_idx` (`id_pedido_item` ASC) VISIBLE,
  INDEX `fk_pedido_transportista1_idx` (`id_transportista` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `tienda`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_pedido_item1`
    FOREIGN KEY (`id_pedido_item`)
    REFERENCES `tienda`.`pedido_item` (`id_pedido_item`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_transportista1`
    FOREIGN KEY (`id_transportista`)
    REFERENCES `tienda`.`transportista` (`id_transportista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tienda`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tienda`.`direccion` (
  `id_direccion` INT NOT NULL,
  `calle` VARCHAR(45) NULL,
  `ciudad` VARCHAR(45) NULL,
  `codigo_postal` INT NULL,
  `pais` VARCHAR(45) NULL,
  `id_cliente` INT NOT NULL,
  PRIMARY KEY (`id_direccion`, `id_cliente`),
  INDEX `fk_direccion_cliente1_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_cliente1`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `tienda`.`cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
