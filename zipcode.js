//REQUIRE NPM ZIPCODE PACKAGE
var zipcodes = require('zipcodes');

//LOOKUP SPECIFIC ZIP CODE
var hills = zipcodes.lookup(90210);
console.log("-------------");
console.log(JSON.stringify(hills));

//USER CITY AND STATE
let userCity = hills.city;
let userState = hills.state;
console.log("-------------");
console.log(userCity +", " + userState);

//DISTANCE COMPARISTON (ZIP CODE 1, ZIP CODE 2)
var dist = zipcodes.distance(92586, 92543);
console.log(dist + " Miles Away");

//RADIUS (ZIPCODE, DISTANCE IN MILES)
var rad = zipcodes.radius(92586, 5);
console.log("Zipcodes within 5 mile range: " + rad);
