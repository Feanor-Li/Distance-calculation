//////////////////////////////////////////////////////////////////////////////////
//Thinking Process:
//1. Import Data & method
//2. Find the current coordinates
//3. Use filter now
//4. Get all the coordinates and use the method imported to calculate the distance
//5. Compare the distance with the max distance
///////////////////////////////////////////////////////////////////////////////////
//Import
var cities = require('all-the-cities'); //import the city data
var distFrom = require('distance-from'); //import the method
///////////////////////////////////////////////////////////////////////////////////
//Find the current coordinates
var currentCoord = cities.find(function(city){
    return city.name = ("Chengdu")
}).loc.coordinates
///////////////////////////////////////////////////////////////////////////////////
//filter & compare the distance
var correctCities = cities.filter(function(){
    var coord = city.loc.coordinates;
    var dis = distFrom(currentCoord).to(coord).in('km');
    return dis < 1000
})
///////////////////////////////////////////////////////////////////////////////////
consol.log(correctCities, correctCities.length)