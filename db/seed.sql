BEGIN;

INSERT INTO location(city, state, country, zip_code, time_zone, created_at, updated_at)
VALUES 
('Beijing', 'BJ', 'China', 100036, 'Asia/Shanghai', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('CHENGDU', 'SC', 'China', 200045, 'Asia/Shanghai', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO user(username, email, first_name, last_name, password, salt, is_superuser, is_staff, is_active, created_at, updated_at)
VALUES
('ruiwang', 'ruiwang@gmail.com', 'rui', 'wang', '1234', null, 1, 1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('yannie', 'nieyan0723@gmail.com', 'yan', 'nie', '4321', null, 1, 1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

set @user_id_1 = (select id from user where username='ruiwang');
set @user_id_2 = (select id from user where username='yannie');
set @location_id_1 = (select id from location where state='BJ');
set @location_id_2 = (select id from location where state='SC');

INSERT INTO user_profile(user_id, gender, age, job, phone, location_id, address, avatar, self_introduction, created_at, updated_at)
VALUES
(@user_id_1, 'Male', '20', 'software engineer', '1234567890', @location_id_1, '800 E west EL camino', null, 'A genius', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(@user_id_2, 'Male', '30', 'test automation engineer', '2038247816', @location_id_2, '498 Boynton Avenue', null, 'Another genius', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO pet_profile(nick_name, avatar, breed, birthday, gender, weight, `character`, is_neutered, dislike, health, description, created_at, updated_at)
VALUES
('little dog', null, 'breed1', CURRENT_TIMESTAMP(), 'male', '10lbs', 'bark', 1, 'bones', 'good', 'A genius dog', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('little cat', null, 'breed2', CURRENT_TIMESTAMP(), 'female', '5lbs', 'meow', 0, 'fish', 'good', 'Another genius cat', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO pet_category(name, order_number, created_at, updated_at)
VALUES
('dog', '1', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('cat', '2', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

set @pet_profile_id_1 = (select id from pet_profile where breed='breed1');
set @pet_profile_id_2 = (select id from pet_profile where breed='breed2');
set @pet_category_id_1 = (select id from pet_category where name='dog');
set @pet_category_id_2 = (select id from pet_category where name='cat');

INSERT INTO pet_profile_category(pet_profile_id, pet_category_id, created_at, updated_at)
VALUES
(@pet_profile_id_1, @pet_category_id_1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(@pet_profile_id_2, @pet_category_id_2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

INSERT INTO user_pet_profile(user_id, pet_profile_id, created_at, updated_at)
VALUES
(1, 1, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(1, 2, CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

COMMIT;
