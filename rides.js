// Create a Child class that takes a height, name, and age.
var Child = function(height, name, age) {
  this.height = height;
  this.name = name;
  this.age = age;
};

// Create a Ride class that takes a minimum and maximum height.
var Ride = function (minHeight, maxHeight){
  this.minHeight = minHeight;
  this.maxHeight = maxHeight;
};

// Create two instances of each.
var child1 = new Child(5.0, 'Willy', 10);

var ride1 = new Ride(4.9, 15.0);

var child2 = new Child(7, 'Ben', 12);

var ride2 = new Ride(14, 32);

// Write a function that takes a ride object and a child object as arguments and determines if the child is big enough for the ride (return true or false)
function canRide(child, ride) {
  if (child.age >= 10 && child.height > ride.minHeight) {
    return(child.name + " can go on the ride");
  } else {
    return("Sorry. " + child.name + " can't go on the ride");
  }
}

// console.log(canRide(child1, ride1));
// console.log(canRide(child2, ride2));




















