var distFrom = require('distance-from')
var cities = require("all-the-cities");
var chengducord = cities.find(function(city){
    return city.name === "Chengdu"
}).loc.coordinates;

var correct_cities = cities.filter(function(city){
    var coord = city.loc.coordinates;

    var dis = distFrom(chengducord).to(coord).in('km')
    return dis <= 1000
})

console.log(correct_cities, correct_cities.length)
