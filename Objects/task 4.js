function Device(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
}

Device.prototype.plugIn = function () {
  console.log(this.name + " is on!");
  this.isPluggedIn = true;
};

Device.prototype.unplug = function() {
  console.log(this.name + " is off!");
  this.isPluggedIn = false;
};

function Iron(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.isPluggedIn = false;
}
Iron.prototype = new Device();

function Microwave(name, brand, power) {
  this.name = name;
  this.brand = brand;
  this.power = power;
  this.isPluggedIn = false;
}
Microwave.prototype = new Device();

const whiteIron = new Iron("Iron", "Philips", 150);
const blackMicrowave = new Microwave("Microwave", "Electrolux", 500);

whiteIron.unplug();
blackMicrowave.plugIn();

console.log(whiteIron);
console.log(blackMicrowave);