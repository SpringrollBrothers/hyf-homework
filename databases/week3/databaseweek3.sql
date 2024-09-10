-- Active: 1724580486596@@127.0.0.1@3307@hyf_lesson3
-- creating tables and insert data.
use hyf_lesson3;
create table meal(
    id int primary key AUTO_INCREMENT ,
    title varchar(10),
    DESCRIPTION TEXT,
    location VARCHAR(20),
    `when` datetime,
    max_reservations int,
    price DECIMAL(10,2),
    created_date date
);
ALTER TABLE meal
MODIFY COLUMN location VARCHAR(50); 

create table reservation(
    id int AUTO_INCREMENT primary key,
    num_of_guests int,
    meal_id int,
    created_date date,
    contact_phonenumber VARCHAR(15),
    contact_name varchar(20),
    contact_email varchar(20)
);

create table review(
        id int AUTO_INCREMENT primary key,
        title varchar(20),
        description text,
        meal_id int,
        stars int,
        created_date DATE,
        FOREIGN key (meal_id) REFERENCES meal(id) on delete CASCADE
);
ALTER TABLE review
MODIFY COLUMN DESCRIPTION VARCHAR(200); 
alter table review 
MODIFY column title VARCHAR(50);
insert into meal 
(title, description, location, `when`, max_reservations, price, created_date)
VALUES
(
'Pasta',
'Enjoy a delightful evening with a selection of classic Italian pastas, freshly made sauces, and a variety of toppings to choose from',
'Bella Italia, Main Street, City Center',
'2024-09-15 18:30',
9,
25.00,
'2024-09-01 10:00'
),
('Sushi',
 'Dive into the world of sushi with an expert chef who will guide you through making your own rolls, followed by an all-you-can-eat sushi feast',
 'Sakura Sushi, Riverside Avenue',
 '2024-09-20 19:00',
 20,
 40.00,
 '2024-09-05 11:30'),
 
('BBQ',
 'A fun-filled BBQ night with a variety of grilled meats, veggies, and sides, all prepared on-site by our BBQ master',
 'The Backyard Grill, Oak Park',
 '2024-09-22 17:00',
 50,
 35.00,
 '2024-09-08 14:15');

INSERT INTO reservation (num_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) VALUES
(4, 1, '2024-09-10', '1234567890', 'Alice', 'alice@example.com'),
(2, 2, '2024-09-12', '0987654321', 'Bob', 'bob@example.com'),
(5, 1, '2024-09-14', '5551234567', 'Charlie', 'charlie@example.com'),
(3, 3, '2024-09-18', '4449876543', 'David', 'david@example.com');

INSERT INTO review (title, description, meal_id, stars, created_date) 
VALUES
('Great Pasta', 'The pasta was cooked perfectly and the sauces were delicious.', 1, 5, '2024-09-16'),
('Sushi Delight', 'Loved the interactive sushi making experience. The food was fresh and tasty.', 2, 4, '2024-09-21'),
('Amazing BBQ', 'The BBQ night was fantastic! Great food and atmosphere.', 3, 5, '2024-09-23'),
('Good Experience', 'Overall a good experience, but could use more vegetarian options.', 1, 3, '2024-09-17');
------------------------------------------------------------------
--Get all meals
select title from meal;
--Add a new meal
insert into meal
(title, description, location, `when`, max_reservations, price, created_date)
VALUES
(
    'Taco',
    'An exciting evening filled with a variety of tacos, featuring different meats, salsas, and toppings.',
    'Taco Haven, Sunset Boulevard',
    '2024-09-30 18:00',
    40,
    15.50,
    '2024-09-10'
);
--Get a meal with any id, fx 1
select title from meal where id=3;
--Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
set price = 105.00,
DESCRIPTION = 'freshly fished salmon, directly bring from sea to your table'
where id =2;
--Delete a meal with any id, fx 1
delete from meal where id=1;
------------------------------------------
--Get all reviews
select title, description from review;
--Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date) 
VALUES 
(
    'Fantastic BBQ Experience',
    'The BBQ night was fantastic! The meats were perfectly grilled, and the sides were delicious. Great atmosphere and friendly staff. Highly recommend!',
    3,  
    5,
    '2024-09-09'
);
--Get a review with any id, fx 1
select * from review where id= 2;
--Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
set title = 'sushi alright',
stars = 2
where id = 2;
--Delete a review with any id, fx 1
delete from review where id =2;
-----------------------------
--Get meals that has a price smaller than a specific price fx 90
select * from meal where price < 20.00;
--Get meals that still has available reservations
select meal.*,
meal.max_reservations - sum(reservation.num_of_guests)
from meal 
 inner join reservation 
on meal_id=meal.id 
GROUP BY meal.title,meal.id,meal.max_reservations
having meal.max_reservations - sum(reservation.num_of_guests)>0;
--Get meals that partially match a title.
select * from meal where title like '%shi';
--Get meals that has been created between two dates
select * from meal where created_date BETWEEN '2024-08-10' and '2024-10-10';
--Get only specific number of meals fx return only 5 meals
select * from meal LIMIT 1;
--Get the meals that have good reviews
select * from review where stars =5;
--Get reservations for a specific meal sorted by created_date
select * from reservation where meal_id =1 ORDER  BY created_date;
--Sort all meals by average number of stars in the reviews
select meal.id, meal.title,avg(review.stars)
from meal
left join review on review.meal_id = meal.id
GROUP BY meal.id, meal.title
ORDER BY avg(review.stars);