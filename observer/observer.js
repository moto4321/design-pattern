class Subject {
  constructor() {
    this.observers = [];
  }
  getObserversList() {
    return this.observers;
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notifyAll() {
    this.observers.forEach((subscriber) => {
      try {
        subscriber.update(this.constructor.name);
      } catch (err) {
        console.error("error", err);
      }
    })
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(subj) {
    console.log(`${this.name}: notified from ${subj} class!`);
  }
}

const subj = new Subject();

const a = new Observer("A");
const b = new Observer("B");
const c = new Observer("C");

subj.subscribe(a);
subj.subscribe(b);
subj.subscribe(c);

console.log(subj.getObserversList());

subj.notifyAll();

subj.unsubscribe(c);

console.log();
subj.notifyAll();