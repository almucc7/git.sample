/*use world;
show tables;
desc city;*/

drop database if exists demo2; -- borra la base de datos si existe (si no existe muestra warning, no error)

create database demo2;

use demo2; -- Quiero usar la bbdd demo2
show tables; -- No tiene tablas, la creo

drop table if exists users;

create table if not exists users( -- Si la tabla no existe, creala
	-- id int auto_increment primary key,
    id varchar(36) default (uuid()), -- Genera un id con números y letras, de 36 caracteres. Otra forma de hacerlo:
    id2 binary(16) default (uuid_to_bin(uuid())),
    name varchar(50) not null
);

desc users; -- Descripción de la tabla


insert into users (name) values (
 'Pepe'
);

select id, bin_to_uuid(id2), name from users;