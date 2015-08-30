// Create a Car class that takes the miles per gallon and gallons in a tank.
var Car = function(mpg, galInTank) {
  this.mpg = mpg;
  this.galInTank = galInTank;
};

// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state)
var Route = function(milesToDest, destName, cityState) {
  this.milesToDest = milesToDest;
  this.destName = destName;
  this.cityState = cityState;
};

// Create two instances of each
var carInfo1 = new Car(1, 5) ;
var routeInfo1 = new Route(100, "Denver", "CO") ;

var carInfo2 = new Car(220, 1);
var routeInfo2 = new Route(220, "San Diego", "CA");

// Write a function that takes a car object and a route object as arguments and determines if the car has enough gas to make the entire route (return true or false)

function enoughGas(mpg, milesToDest){
  if (car.mpg < 10 && route.milesToDest < 50){
    return("NO");
    } else {
    return("YES");
  }
}

console.log(enoughGas(carInfo1, routeInfo1));
console.log(enoughGas(carInfo2, routeInfo2));

