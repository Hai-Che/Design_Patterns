"use strict";

class RoundRobin {
  constructor() {
    if (RoundRobin.instance) {
      return RoundRobin.instance;
    }
    RoundRobin.instance = this;
    this.servers = [];
    this.index = 0;
  }

  addServer(server) {
    this.servers.push(server);
  }

  getNextServer() {
    if (!this.servers.length) {
      throw new Error("No server available!");
    }

    const server = this.servers[this.index];
    this.index = (this.index + 1) % this.servers.length;
    return server;
  }
}

const loadBalancer1 = new RoundRobin();
const loadBalancer2 = new RoundRobin();

loadBalancer1.addServer("Server 1");
loadBalancer1.addServer("Server 2");
loadBalancer1.addServer("Server 3");

console.log(loadBalancer1.getNextServer());
console.log(loadBalancer1.getNextServer());
console.log(loadBalancer1.getNextServer());
console.log(loadBalancer1.getNextServer());
console.log(loadBalancer1.getNextServer());

console.log(loadBalancer1 === loadBalancer2);
