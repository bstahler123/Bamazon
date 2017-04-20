
CREATE DATABASE bamazon_db;


USE bamazon_db;


CREATE TABLE items (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  
  item_Name VARCHAR(30) NOT NULL,

  department_Name VARCHAR(30) NOT NULL,

  price INTEGER(10),


  stock_quantity INTEGER(10),
 

  PRIMARY KEY (id)
);
INSERT INTO items (item_Name, department_Name, price, stock_quantity)
VALUES ('Bag of apples', 'fruit', 2, 50);
INSERT INTO items (item_Name, department_Name, price, stock_quantity)
VALUES ('Jeans', 'cloths', 40, 50);
INSERT INTO items (item_Name, department_Name, price, stock_quantity)
VALUES ("Banana's", 'fruit', 2 , 50);
INSERT INTO items (item_Name, department_Name, price, stock_quantity)
VALUES ("Carrot's", 'fruit', 2 , 50);




