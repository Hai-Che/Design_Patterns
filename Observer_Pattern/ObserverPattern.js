class Observer {
  constructor(name) {
    this.namePick = name;
  }

  update(location) {
    this.goToHelp(location);
  }

  goToHelp(location) {
    console.log(`${this.namePick} ping ::${JSON.stringify(location)}`);
  }
}

class Subject {
  constructor() {
    this.observerList = [];
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  notify(location) {
    this.observerList.forEach((observer) => observer.update(location));
  }
}

const subject = new Subject();

const caster = new Observer("Caster");
const sniper = new Observer("Sniper");

subject.addObserver(caster);
subject.addObserver(sniper);

subject.notify({ long: 123, lat: 106 });
