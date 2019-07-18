BEGIN;

CREATE DATABASE pawtascy CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER ''@'%' IDENTIFIED BY '***';

GRANT ALL PRIVILEGES ON pawtascy.* TO ''@'%';

FLUSH PRIVILEGES;

COMMIT;

-- delete a user
set @user_id = (select id from user where username='test1');
SET FOREIGN_KEY_CHECKS = 0;
delete from user where id=@user_id;
delete from user_profile where user_id=@user_id;
delete from user_pet_profile where user_id=@user_id;
SET FOREIGN_KEY_CHECKS = 1;
