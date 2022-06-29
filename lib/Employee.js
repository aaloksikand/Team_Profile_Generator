class Employee {  //creating Employee parent class using previous in-class assignments as templates
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName() {

    }

    getID() {

    }

    getEmail() {

    }

    getRole() {
      
    }



  }
  
  const toys = [
    new Toy("Action Figure", 14.99, 5),
    new Toy("Rare Toy", 17.99, 1)
  ];
  
  module.exports = {
    Toy,
    toys
  };