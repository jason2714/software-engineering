CREATE TABLE orders (
    order_status varchar(128),
    order_ID VARCHAR(128)  PRIMARY KEY, 
    order_count int,
    order_GetTime time, 
    order_FnsTime time, 
    order_name varchar(128),
    order_user varchar(128), 
    order_item varchar(255)
     );