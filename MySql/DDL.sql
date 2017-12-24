CREATE DATABASE SocialNetwork;



CREATE TABLE MyUser
(

	user_id int auto_increment not null,
	firstname varchar(35) not null,
	lastname varchar(35) not null,
	nickname varchar(35),
	password  varchar(35) not null,
	phone_number1 int ,
	phone_number2 int ,
	email varchar(35) not null,
	gender varchar(6) not null,
	birthdate date not null ,
	profile_picture varchar(200),
	hometown varchar(35),
	marital_status 	varchar(8),
	about_me varchar(255),
	primary key (user_id)
);


CREATE TABLE Friendship
(
user_id1 int not null,
user_id2 int not null,
status int not null,
primary key (user_id1,user_id2),
foreign key (user_id1) references MyUser (user_id),
foreign key (user_id2) references MyUser (user_id)

);

CREATE TABLE Post
(
post_id int auto_increment not null,
caption varchar(200) not null,
image varchar(255),
posted_time timestamp not null,
ispublic boolean not null,
poster_id int not null,

primary key (post_id),
foreign key (poster_id) references MyUser (user_id)
);
