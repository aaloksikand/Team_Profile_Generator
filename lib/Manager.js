const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;