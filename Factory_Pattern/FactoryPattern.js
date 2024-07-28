class Car {
  constructor({
    name = "Test car",
    doors = 4,
    price = "100000 vnd",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

class Truck {
  constructor({
    name = "Test truck",
    doors = 10,
    price = "500000 vnd",
    customerInfo = {},
  }) {
    this.name = name;
    this.doors = doors;
    this.price = price;
    this.customerInfo = customerInfo;
  }
}

class ServiceLogistics {
  transportClass = Car; // default
  getTransport = (customerInfo) => {
    return new this.transportClass(customerInfo);
  };
}

class TruckService extends ServiceLogistics {
  transportClass = Truck;
}

const carService = new ServiceLogistics();
console.log(
  carService.getTransport({
    customerInfo: { name: "lah", cargoVolume: "100 kg" },
  })
);

const truckService = new TruckService();
console.log(
  truckService.getTransport({
    customerInfo: { name: "hal", cargoVolume: "500 kg" },
  })
);
