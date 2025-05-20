class Person {
    name = "";
    age: number = 0;
}

const uhyo1 = new Person();
console.log(uhyo1.name); // "" が表示される
console.log(uhyo1.age); // 0 が表示される

uhyo1.age = 26;
console.log(uhyo1.age); // 26 が表示される

class User1 {
    name: string;
    age: number;
  // 与えられた引数をそのままプロパティに代入している→これが初期化
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    isAdult(): boolean {
      return this.age >= 20;
    }
  }
  // コンストラクタを呼び出している
  const uhyo2 = new User1("uhyo", 26);
  console.log(uhyo2.name);      // "uhyo" が表示される
  

  // 静的メンバー
  class User3 {
    static adminName: string = "uhyo";
    static getAdminUser() {
      return new User3(User3.adminName, 26);
    }
  
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    isAdult(): boolean {
      return this.age >= 20;
    }
  }
  
  console.log(User3.adminName);  // "uhyo" が表示される
  const admin = User3.getAdminUser();
  console.log(admin.age);       // 26 が表示される
  console.log(admin.isAdult()); // true が表示される
  
  const uhyo3 = new User3("uhyo", 26);
  // エラー: Property 'adminName' does not exist on type 'User'. Did you mean to access the static member 'User.adminName' instead?
  console.log(uhyo3.adminName);
  