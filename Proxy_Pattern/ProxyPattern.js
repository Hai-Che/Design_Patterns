// Simple example
class Leader {
  receivedRequest(req) {
    console.log(`Received request: ${req}`);
  }
}

class Secretary {
  constructor() {
    this.leader = new Leader();
  }
  receivedRequest(req) {
    this.leader.receivedRequest(req);
  }
} // proxy

class Developer {
  constructor(req) {
    this.request = req;
  }
  sendRequest(target) {
    target.receivedRequest(this.request);
  }
}

const dev = new Developer("Submit to leader");
dev.sendRequest(new Secretary());
