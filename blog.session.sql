
 --@block
 CREATE TABLE blogposts (
    id  SERIAL PRIMARY KEY,
    blogHeading VARCHAR(255),
    blogBody VARCHAR(2048), 
    date DATE
 );

 --@block
 DROP TABLE blogposts;

 --@block
 INSERT INTO blogposts (blogheading, blogbody) VALUES ('Development Blog #1', 
            'Hi all! Welcome to my personal blog situated on my portfolio site.
            I''m writing this post directly in an SQL statement so I have some
            real world data to use when I process this table and display it as
            part of html. See you on the other siiiiiiideeee'
            );

--@block
SELECT * FROM blogposts;