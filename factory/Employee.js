class Employee {
  constructor(name) {
    this._name = name;
    this._type = '';
  }

  say() {
    console.log(`${this._name} ${this._type}`);
  }

  set name(newName) {
    this._name = newName;
  }

  /**
   * @param {string} newType
   */
  set type(newType) {
    this._type = newType;
  }
}

module.exports = Employee;
