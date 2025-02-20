-- SHOW DATABASES;
-- SI LA BASE DE DATOS EXISTE, BÓRRALA:
DROP DATABASE IF EXISTS DEMO2;
CREATE DATABASE DEMO2;
-- PARA ACTIVARLA, QUE ES UN DOBLE CLIC EN ELLA:
USE DEMO2;
CREATE TABLE ANIMALS (
	 id char(18) primary key default (uuid()),
	 name varchar(255) NOT null unique,
	 englishName varchar (255) NOT null unique,
     sciName,
     diet,
     lifestyle,
     location
     slogan text,
     created_at timestamp DEFAULT (NOW()),
     updated_at timestamp DEFAULT (NOW())
); 