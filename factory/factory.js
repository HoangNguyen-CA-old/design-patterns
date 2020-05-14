let Employee = require('./Employee');
class Developer extends Employee {
  constructor(name) {
    super(name);
    this.type = 'Developer';
  }
}

class Tester extends Employee {
  constructor(name) {
    super(name);
    this.type = 'Tester';
  }
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;
      case 2:
        return new Tester(name);
        break;
      default:
        return null;
    }
  };
}

const employeeFactory = new EmployeeFactory();

const employees = [];
employees.push(employeeFactory.create('Joe', 1));
employees.push(employeeFactory.create('Doe', 2));

employees.forEach((employee) => {
  employee.say();
});
