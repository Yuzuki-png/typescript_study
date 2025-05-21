class User6 {
    name: string;
    #age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.#age = age;
    }
  
    public isAdult(): boolean {
      return this.#age >= 20;
    }
  }
  
  class PremiumUser extends User6 {
    rank: number = 1;
  }

const uhyo6 = new PremiumUser("uhyo", 26);
console.log(uhyo6.rank);      // 1 が表示される
console.log(uhyo6.name);      // "uhyo" が表示される
console.log(uhyo6.isAdult()); // true が表示される


class PremiumUser2 extends User6 {
    rank: number;
  
    constructor(name: string, age: number, rank: number) {
      super(name, age);
      this.rank = rank;
    }
  }
  
  const uhyo7 = new PremiumUser2("uhyo", 26, 3);
  console.log(uhyo7.name); // "uhyo" が表示される
  console.log(uhyo7.rank); // 3 が表示される
  