create table Account
(
    user_ID varchar(128) PRIMARY KEY not null,
    password varchar(128) not null	,
    name varchar(128) not null	,
    age integer(4) not null	,
    gender varchar(10) not null	,
    email varchar(40) not null	,
    total integer(8) default 0
);