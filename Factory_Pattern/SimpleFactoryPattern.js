// without simple factory pattern
const serviceLogistics = (cargoVolume) => {
  switch (cargoVolume) {
    case "10":
      return {
        name: "Truck 10",
        doors: 6,
        price: "100.000 vnd",
      };
    case "20":
      return {
        name: "Truck 20",
        doors: 10,
        price: "500.000 vnd",
      };
  }
};

console.log(serviceLogistics("20"));

//with simple factory pattern

class ServiceLogistics {
  constructor(name = "Truck 10", doors = 6, price = "100.000 vnd") {
    this.name = name;
    this.doors = doors;
    this.price = price;
  }
  static getTransport(cargoVolume) {
    switch (cargoVolume) {
      case "10":
        return new ServiceLogistics();
      case "20":
        return new ServiceLogistics("Truck 20", 10, "500.000 vnd");
    }
  }
}

console.log(ServiceLogistics.getTransport("20"));
