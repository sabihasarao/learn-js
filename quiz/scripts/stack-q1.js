class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = []; // this is the new line of code added
  }

  showId() {
    return this.#id;
  }

}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  get persons() {
    return this._persons;
  }

  set_persons(p) {
    this._persons = persons;
  }
  pop() {
    return this._persons.pop().age
  }

}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
