"use strict";
class Car {
  constructor(engine, chassis, body) {
    this.engine = engine;
    this.chassis = chassis;
    this.body = body;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class CarBuilder {
  addChassis(chassis) {
    this.chassis = chassis;
    return this;
  }
  addEngine(engine) {
    this.engine = engine;
    return this;
  }
  addBody(body) {
    this.body = body;
    return this;
  }
  build() {
    return new Car(this);
  }
}

const car1 = new CarBuilder()
  .addEngine("v12")
  .addBody("KIA NORMAL")
  .addChassis("LUXURY")
  .build();

const car2 = new CarBuilder().addEngine("v10").addBody("KIA SUPER").build();

console.log("Car1:", car1.toString());
console.log("Car2:", car2.toString());
