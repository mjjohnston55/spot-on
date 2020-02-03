# Spot On

Spot On is a web application where users can report information about lost animals as well as strays that have been found with the hope that the animals and their respective owners can reunite. 

## Installation and Getting Started

Using Git for Windows/Terminal for Mac, clone the repository into your local machine using the following command:

```bash
git clone [repository]
```

After it is downloaded, change directories into the project folder and install its necessary dependecies

```bash
npm install
```

Then, insert the following schema into your MySQL workbench. The schema will generate the database necessary for the project. Do not worry about creating tables for it at this point.

```mysql
DROP DATABASE IF EXISTS animals_db;
CREATE DATABASE animals_db;
```

Next, change directories into the CONFIG folder, and exchange the information in the DEVELOPMENT section to match your local MySQL configuration

```javascript
  "development": {
    "username": [your username],
    "password": [your username],
    "database": "animals_db",
    "host": "localhost",
    "port": 3306,
    "dialect": "mysql"
  },
```
Then, change back to the main project folder and execute the node server

```bash
node ./server.js
```

If done correctly, your bash/terminal will log hard coded Sequelize syntax, which will generate the tables for both lost and found animals into your recently made animals_db database. You can now technically run the application, but if you wish to have some data already logged into the lost and found animals table, insert these seeds into your MySQL workbench.

```mysql
USE animals_db;
INSERT INTO Lost_Animals (animal_name, species, breed, picture, color, animal_description, lost_date, lost_where, still_lost, zip_code, contact_email, createdAt, updatedAt) 
VALUES ("Max", "dog", "husky", "https://thehappypuppysite.com/wp-content/uploads/2017/12/siberian6.jpg", "black and white", "Big eyes and very small", "2019-11-05", "Riverside", TRUE, 90005,"dodgers2@gmail.com", 0, 0),
("Spot", "dog", "terrier", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg", "brown", "small and fuzzy", "2019-11-01", "Menifee", TRUE, 92585,"SD123@gmail.com", 0, 0),
("Raven", "cat", "siamese", "https://www.thesprucepets.com/thmb/yKUS9NTSH9UxwNXlboSR9dmqzRY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37348687_179210919505845_8579658165484781568_n-5b69b1b346e0fb00500b0880.jpg", "black and gray", "short hair and playful", "2019-11-02", "Riverside", TRUE, 92585,"catlover@gmail.com", 0, 0),
("Simba", "dog", "retriever", "https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg", "golden brown", "Happy and jumps alot!", "2019-11-02", "Riverside", TRUE, 90005,"lionking@gmail.com", 0, 0),
("Felix", "cat", "unknown", "https://www.thesprucepets.com/thmb/0tFhy7gu82dgMGL_j5SQvCHXZes=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-cat-lying-on-floor-at-home-908763830-1d61bee6961b45ee8a55bdfa5da1ebb3.jpg", "black", "Big eyes, likes to scratch", "2019-11-10", "Riverside", TRUE, 90005,"felixowner@gmail.com", 0, 0),
("Powder", "cat", "dont know", "https://www.rover.com/blog/wp-content/uploads/2019/03/white-cat-4025572_1920-960x540.jpg", "white", "lazy, likes to sleep", "2019-11-07", "Menifee", TRUE, 92585,"lightning999@gmail.com", 0, 0),
("Jack", "dog", "pitbull", "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555296004/shape/mentalfloss/istock_86999965_small.jpg", "white and black", "gets into the trash alot", "2019-11-06", "Menifee", TRUE, 92585,"colorodo999@gmail.com", 0, 0),
("Fuzzy", "dog", "poodle mix", "https://www.loveyourdog.com/wp-content/uploads/2019/04/Toy-Poodle.jpg", "brown", "likes to play fetch", "2019-11-03", "Riverside", TRUE, 90005,"flash155@gmail.com", 0, 0),
("Trixie", "cat", "not sure", "https://www.thehappycatsite.com/wp-content/uploads/2018/03/havana-brown-cat.jpg", "brown", "likes to play", "2019-11-03", "Riverside", TRUE, 90005,"catz155@gmail.com", 0, 0),
("Lady", "dog", "poodle", "https://www.rover.com/blog/wp-content/uploads/2018/11/poodle-960x540.jpg", "white", "Scares easily", "2019-11-02", "Riverside", TRUE, 90005,"tree123@gmail.com", 0, 0);
```
```mysql
USE animals_db;
INSERT INTO Found_Animals (animal_name, species, breed, picture, color, animal_description, found_date, found_where, zip_code, contact_email, createdAt, updatedAt) 
VALUES ("Dont Know", "dog", "Dont Know", "https://www.washingtonpost.com/resizer/kPkFQsQjvSIjfXG-mFXDEpxq6-4=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg", "black and brown", "short and happy", "2019-11-01", "Riverside", 90005,"dodgers55@gmail.com", 0, 0),
("Beast", "dog", "Lab", "https://www.guidedogs.org/wp-content/uploads/2019/08/website-donate-mobile.jpg", "white", "Barks alot", "2019-11-02", "Riverside", 90005,"red42@gmail.com", 0, 0),
("Shorty", "dog", "pug", "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg", "black and brown", "Big eyes", "2019-11-03", "Menifee", 92585,"blue86@gmail.com", 0, 0),
("Friendly", "dog", "Dont Know", "https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half/public/field_blog_entry_images/2018-02/vicious_dog_0.png?itok=nsghKOHs", "Light Brown", "Likes to growl", "2019-11-03", "Menifee", 92585,"yellow55@gmail.com", 0, 0),
("Dont Know", "dog", "Chihuahua", "https://parade.com/wp-content/uploads/2018/05/Chihuahua-Appreciation-Day-FTR.jpg", "whitish borwn", "Big eyes and yappy", "2019-11-01", "Riverside", 90005,"green99@gmail.com", 0, 0),
("Tabs", "cat", "tabby", "https://cdn.kinsights.com/cache/c5/9b/c59b6e25940f1642fa5af42c1828c38d.jpg", "black and brown", "Big eyes and fluffy", "2019-11-01", "Riverside", 90005,"blue444@gmail.com", 0, 0),
("Garfield", "cat", "unknown", "https://38oaizxk9r32v4vd3id0mm1a-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/orange-cat-names-768x432.jpg", "orange", "Lazy and hates mondays", "2019-11-02", "Riverside", 90005,"purple98@gmail.com", 0, 0),
("Nala", "cat", "mix", "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/152964589-welcome-home-new-cat-632x475.jpg", "black and gray", "Sleeps alot", "2019-11-11", "Menifee", 92585,"brown888@gmail.com", 0, 0),
("Stormy", "cat", "gray", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETeYfZRJfZzIRyA_S49mdig7L3JM9gETojvbTdP1Waf7LbEor&s", "gray", "likes to scratch couches", "2019-11-04", "Riverside", 90005,"pink865@gmail.com", 0, 0),
("Dont Know", "cat", "dont know", "https://www.washingtonian.com/wp-content/uploads/2019/07/Sapphire-2-2048x2048.jpg", "gray and white", "Meows alot", "2019-11-02", "Menifee", 92585,"white123@gmail.com", 0, 0);
```

The schema and seeds can be found in the MODELS folder. Also, if you encounter any errors, make sure you correctly have your MySQL configuration inputted into the CONFIG folder and that your MySQL workbench's native password matches the one you inputted. Also, if any Handlebars.js errors occur, make sure you have the latest version installed.

## Overview and Features

Upon entering our application, users will see a minimal landing page featuring a gif of a playful dog, a quick overview of our application and navigation bar routes to view our data of animals as well as create new instances of data.


<p align="center">
  <img alt="landingPage" src="https://media.giphy.com/media/PhZ3GO3x8LxZiKin5x/giphy.gif">
</p>

Using the REPORT AN ANIMAL dropdown on the navigation bar, users can insert information about any found or lost animal, which will then be added to its respective table in animals_db.

Filling Out a Form         | Searching the Database  
:-------------------------:|:-------------------------:
![FillingForm](https://i.imgflip.com/3nmm0x.gif)  |  ![SearchingDatabase](https://i.imgflip.com/3nmnuv.gif)

The form features both front and back-end verifcation; if certain inputs are left empty, the POST request will not go through.

## Technologies We Used

MySQL           |  Node.js |  Sequelize  |  Handlebars.js
:-------------------------:|:-------------------------: |:-------------------------: |:-------------------------:
![react](https://cdn.worldvectorlogo.com/logos/mysql.svg)  |  ![node](https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png)  |  ![Sequelize](https://cdn.worldvectorlogo.com/logos/sequelize.svg)  |  ![handlebars](https://handlebarsjs.com/images/handlebars_logo.png)

<ul style="font-size: 20px;">
<li><a href="https://getbootstrap.com/">Bootstrap</a> was used to create the front-end layout of our project, creating a responsive design for multiple resolutions</li>
<li><a href="https://expressjs.com/">Express.js</a> is a web framework that we used to build our server.</li>
<li><a href="https://nodejs.org/en/">Node.js</a> is the development environment we used to build our application.</li>
<li><a href="https://www.mysql.com//">MySQL</a> is what we used to house our data in databases in the form of tables.</li>
<li><a href="https://sequelize.org/">Sequelize</a> is the ORM language used to generate tables and POST and GET data from our database</li>
</ul>


## Project Creator and Maintainers

#### Phillip Laub 
<ul style="font-size: 20px;">
  <li><a href="https://github.com/PhillipLaub">Github</a></li>
  <li><a href="https://www.linkedin.com/in/phillip-laub-642925115/">Linkedin</a></li>
  <li><a href="https://philliplaub.github.io/Portfolio/portfolio.html">Portfolio</a></li>
</ul>

#### Michael Johnston
<ul style="font-size: 20px;">
  <li><a href="https://github.com/mjjohnston55">Github</a></li>
  <li><a href="https://www.linkedin.com/in/mike-johnston-48973b18a/">LinkeIin</a></li>
</ul>

#### Dior Christian
<ul style="font-size: 20px;">
  <li><a href="https://www.linkedin.com/in/diorchristian/">LinkedIn</a></li>
</ul>

#### Richard Mazel
<ul style="font-size: 20px;">
  <li><a href="https://www.linkedin.com/in/richard-mazel-b85aabb3/">LinkedIn</a></li>
</ul>

#### Joseph Badua
<ul style="font-size: 20px;">
  <li><a href="https://github.com/JosephBadua">Github</a></li>
  <li><a href="https://www.linkedin.com/in/joseph-badua-60aaa7188/">LinkedIn</a></li>
  <li><a href="http://www.josephbadua.com/">Portfolio</a></li>
</ul>
