const User = class {
    name: string = "";
    age: number = 0;
  
    isAdult(): boolean {
      return this.age >= 20;
    }
  };
  
  // これはOK
  const uhyo4 = new User();
  // エラー: 'User' refers to a value, but is being used as a type here. Did you mean 'typeof User'?
  const john: User = new User();
  


  type HasAge = {
    age: number;
  }
  
  class User5 {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  function getPrice(customer: HasAge) {
    if (customer instanceof User) {
      if (customer.name === "uhyo") {
        return 0;
      }
    }
    return customer.age < 18 ? 1000 : 1800;
  }
  const customer1: HasAge = { age: 15 };
const customer2: HasAge = { age: 40 };
const uhyo5 = new User5("uhyo", 26);

console.log(getPrice(customer1)); // 1000 と表示される
console.log(getPrice(customer2)); // 1800 と表示される
console.log(getPrice(uhyo5));      // 0 と表示される
