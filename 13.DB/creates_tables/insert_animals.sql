INSERT INTO `animals` 
(`animalID`, `name`, `englishName`, `sciName`, `diet`, `lifestyle`, `location`, `slogan`, `bioGroup`, `image`, `created_at`, `updated_at`) 
VALUES
(UUID_TO_BIN(UUID()), 'León', 'Lion', 'Panthera leo', 'Carnívoro', 'Solitary', 'África', 'Rey de la selva', 'Felidae', 'https://acortar.link/0vQTIM', NOW(), NOW()),
(UUID_TO_BIN(UUID()), 'Elefante', 'Elephant', 'Loxodonta africana', 'Herbívoro', 'Social', 'África', 'La majestuosidad de la naturaleza', 'Elephantidae', 'https://acortar.link/OstH79', NOW(), NOW()),
(UUID_TO_BIN(UUID()), 'Tigre', 'Tiger', 'Panthera tigris', 'Carnívoro', 'Solitary', 'Asia', 'Fuerza y belleza', 'Felidae', 'https://lc.cx/JlCB-S', NOW(), NOW()),
(UUID_TO_BIN(UUID()), 'Jirafa', 'Giraffe', 'Giraffa camelopardalis', 'Herbívoro', 'Solitary', 'África', 'La altura de la elegancia', 'Giraffidae', 'https://cdn0.bioenciclopedia.com/es/posts/2/2/0/jirafa_22_orig.jpg', NOW(), NOW()),
(UUID_TO_BIN(UUID()), 'Cebra', 'Zebra', 'Equus quagga', 'Herbívoro', 'Social', 'África', 'Las rayas que marcan la diferencia', 'Equidae', 'https://www.elmundodelosanimales.com/animales/cebra/cebra.jpg', NOW(), NOW());

