-- drop table if exists users2; -- Bórrala si existe

create table if not exists users2( -- Si la tabla no existe, creala    
    id binary(16) default (uuid_to_bin(uuid())) primary key,
    user_alias varchar(35) not null unique,
    first_name varchar(100) not null unique,
    surname varchar(100),
    email varchar(35) not null unique,
    phone char(12) unique,
    created_at timestamp not null default(now()),
    modified_at timestamp not null default(now())    
);
desc users2;



drop table if exists notes; -- Bórrala si existe

create table if not exists notes(
note_id binary(16) default (uuid_to_bin(uuid())) primary key,
title varchar(155) not null,
is_important boolean default false,
content text,
author_id binary(16) not null references users2(id),
created_at timestamp not null default(now()),
updated_at timestamp not null default(now())   
-- OTRA FORMA DE HACER LA PRIMARY KEY Y LA FOREIGN KEY:
-- PRIMARY KEY (note_id)
-- FOREIGN KEY (author_id) REFERENCES users2(id)
);

desc notes;


/*SELF RELATION, AMIGO O ENEMIGO*/

set foreign_key_checks = 0;
drop table if exists user_others; -- Bórrala si existe
set foreign_key_checks = 1;

create table if not exists user_others(
source_user_id binary(16) not null,
target_user_id binary(16) not null,
relation_type enum('friend', 'enemy'),
created_at timestamp not null default(now()),
updated_at timestamp not null default(now()), 
PRIMARY KEY (source_user_id, target_user_id),
FOREIGN KEY (source_user_id) REFERENCES users2(id),
FOREIGN KEY (target_user_id) REFERENCES users2(id)
);

ALTER TABLE user_others ADD CONSTRAINT check_other_id
CHECK (source_user_id != target_user_id);

desc user_others;

set @uuid = uuid();
insert into users2(id, user_alias, email, first_name, surname, phone) values(
UUID_TO_BIN(@uuid), 'a', 'a', 'a', 'a', 'a'
);

insert into user_others (source_user_id, target_user_id, relation_type) VALUES (
UUID_TO_BIN(@uuid), UUID_TO_BIN(@uuid), 'enemy'
);

select BIN_TO_UUID(target_user_id), BIN_TO_UUID(source_user_id), relation_type from user_others;










