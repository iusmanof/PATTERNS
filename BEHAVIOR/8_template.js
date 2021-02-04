<<<<<<< HEAD
class Vehicle {
    travelTime() {
      return this.timeTaken
    }
  }
  
  class Bus extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 10
    }
  }
  
  class Taxi extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 5
    }
  }
  
  class Car extends Vehicle {
    constructor() {
      super()
      this.timeTaken = 3
    }
  }
  
  class Commute {
    travel(transport) {
      return transport.travelTime()
    }
  }
  
  const commute = new Commute()
  
  console.log(commute.travel(new Taxi()))
  console.log(commute.travel(new Bus()))
  console.log(commute.travel(new Car()))
=======
class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  responsibilities() {}

  work() {
    return `${this.name} выполняет ${this.responsibilities()}`
  }

  getPaid() {
    return `${this.name} имеет ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс создания программ'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  responsibilities() {
    return 'процесс тестирования'
  }
}

const dev = new Developer('Владилен', 100000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Виктория', 90000)
console.log(tester.getPaid())
console.log(tester.work())
>>>>>>> 7988b00 (feat: add template pattern)
