BEGIN;

INSERT INTO location(city, state, country, zip_code, time_zone, created_at, updated_at)
VALUES 
('Beijing', 'BJ', 'China', 100036, 'Asia/Shanghai', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
('CHENGDU', 'SC', 'China', 200045, 'Asia/Shanghai', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());

COMMIT;

