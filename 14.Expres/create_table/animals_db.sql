DROP DATABASE IF EXISTS animals_db;

CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE animals (
  animal_id BINARY(16) PRIMARY KEY DEFAULT (UUID_TO_BIN(UUID())),
  nombre_animal VARCHAR(255) NOT NULL,
  nombre_ingles_animal VARCHAR(255) NOT NULL,
  nombre_cientifico_animal VARCHAR(255) NOT NULL,
  dieta_animal VARCHAR(255) NOT NULL,
  estilo_vida_animal VARCHAR(255) NOT NULL,
  ubicacion_animal VARCHAR(255) NOT NULL,
  lema_animal VARCHAR(255) NOT NULL,
  grupo_animal VARCHAR(255) NOT NULL,
  imagen_animal TEXT,
  created_at TIMESTAMP DEFAULT (NOW())
);

DELIMITER //

CREATE TRIGGER after_insert_animal
AFTER INSERT ON animals
FOR EACH ROW
BEGIN
    SET @last_inserted_uuid = NEW.animal_id;
END //

DELIMITER ;

CREATE TABLE grupos (
  grupo_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT (NOW())
);

CREATE TABLE animals_grupos (
  animal_id BINARY(16) NOT NULL REFERENCES animals(animal_id),
  grupo_id INT NOT NULL REFERENCES grupos(grupo_id),
  PRIMARY KEY (animal_id, grupo_id)
);

BEGIN;

INSERT INTO grupos (name)
VALUES ('Mamíferos'),
       ('Aves');

INSERT INTO animals (animal_id, nombre_animal, nombre_ingles_animal, nombre_cientifico_animal, dieta_animal, estilo_vida_animal, ubicacion_animal, lema_animal, grupo_animal, imagen_animal)
VALUES
        (UUID_TO_BIN(UUID()), 'Guepardo', 'Cheetah', 'Acinonyx jubatus', 'Carnívoro', 'Diurno', 'Asia y Africa', '¡El mamífero terrestre más rápido del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/640px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg'),
        (UUID_TO_BIN(UUID()), 'Elefante', 'Elephant', 'Loxodonta africana', 'Herbívoro', 'Diurno', 'Africa y Asia', '¡El mamífero terrestre más grande del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_elephant_%28Loxodonta_africana%29_2.jpg/640px-African_elephant_%28Loxodonta_africana%29_2.jpg'),
        (UUID_TO_BIN(UUID()), 'Jirafa', 'Giraffe', 'Giraffa camelopardalis', 'Herbívoro', 'Diurno', 'Africa', '¡El mamífero terrestre más alto del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/640px-Giraffe_Mikumi_National_Park.jpg'),
        (UUID_TO_BIN(UUID()), 'León', 'Lion', 'Panthera leo', 'Carnívoro', 'Diurno', 'Africa', '¡El rey de la selva!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg'),
        (UUID_TO_BIN(UUID()), 'Pingüino', 'Penguin', 'Spheniscidae', 'Carnívoro', 'Diurno', 'Antártida', '¡El ave mejor vestida del mundo!', 'Aves', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Emperor_Penguin_Manchot_empereur.jpg/640px-Emperor_Penguin_Manchot_empereur.jpg'),
        (UUID_TO_BIN(UUID()), 'Oso Polar', 'Polar Bear', 'Ursus maritimus', 'Carnívoro', 'Diurno', 'Ártico', '¡El carnívoro terrestre más grande del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/800px-Polar_Bear_-_Alaska_%28cropped%29.jpg'),
        (UUID_TO_BIN(UUID()), 'Tigre', 'Tiger', 'Panthera tigris', 'Carnívoro', 'Diurno', 'Asia', '¡La especie de gato más grande del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg/640px-Bengal_tiger_%28Panthera_tigris_tigris%29_female_3.jpg'),
        (UUID_TO_BIN(UUID()), 'Cebra', 'Zebra', 'Equus quagga', 'Herbívoro', 'Diurno', 'Africa', '¡El animal más rayado del mundo!', 'Mamíferos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Equus_quagga_burchellii_-_Etosha%2C_2014.jpg/640px-Equus_quagga_burchellii_-_Etosha%2C_2014.jpg');

INSERT INTO animals_grupos (animal_id, grupo_id)
VALUES
  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Guepardo'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Elefante'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Jirafa'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'León'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Pingüino'),
   (SELECT grupo_id FROM grupos WHERE name = 'Aves')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Oso Polar'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Tigre'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos')),

  ((SELECT animal_id FROM animals WHERE nombre_animal = 'Cebra'),
   (SELECT grupo_id FROM grupos WHERE name = 'Mamíferos'));

-- COMMIT
-- ROLLBACK;
