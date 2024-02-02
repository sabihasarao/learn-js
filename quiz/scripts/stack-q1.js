class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  // Define getter for persons property
  get persons() {
    return this._persons;
  }

  // Define setter for persons property
  set persons(value) {
    // You can add any validation logic here if needed
    this._persons = value;
  }

  push(p) {
    return this._persons.push(p);
  }

  pop() {
    return this._persons.pop().age;
  }
}

let pstack = new PStackImpl();
// Accessing persons property using setter method
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}];
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
// Accessing persons property using getter method
console.log(pstack.persons);
