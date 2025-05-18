function range(min: number, max: number): number[] {
    const result = [];
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
    return result;
    // returnの型はnumber[]で型チェックが行われる
  }
  
console.log(range(5, 10));

function helloWorldNTimes2(n: number): void {
    if (n >= 100) {
      console.log(`${n}回なんて無理です！！！`);
      return;
    }
    for (let i = 0; i < n; i++) {
      console.log("Hello, world!");
    }
  }
  
  helloWorldNTimes2(5);
  helloWorldNTimes2(150);
// 関数の戻り値がvoidの場合、returnを省略できてるが早期returnをしているので省略してもエラーにならない

type Human = {
    height: number;
    weight: number;
  };
  const calcBMI = function(human: Human): number {
    // function({ height, weight }: Human):
    // 分割代入だとhuman.を二回書く必要がなくなる
    return human.weight / human.height ** 2;
    // return weight / height ** 2;
  };
  const uhyo: Human = { height: 1.84, weight: 72 };
  // const 変数名　= 式;
  // 21.266540642722116 と表示される
  console.log(calcBMI(uhyo));
  

  // 可変長引数 rest引数を用いることで可変長引数を受け取ることができる
  // 配列かタプルのみ
  const sum = (...args: number[]): number => {
    // (num : number, ...args: number[])のように通常変数を書いてもいいが引数は必要となるのでsum()はコンパイルエラー
    let result = 0;
    for (const num of args) {
      result += num;
    }
    return result;
  };
  
  console.log(sum(1, 10, 100)); // 111 と表示される
  console.log(sum(123, 456));   // 579 と表示される
  console.log(sum());
  


  // オプショナル引数は?をつける
  // (parameter) upper: boolean | undefined カーソル当てたらユニオン型になっていることがわかるよね
  // (str: string, upper: boolean = false): これでデフォルト値が追加されたので暗黙的にundifinedがなくなる 
  const toLowerOrUpper = (str: string, upper?: boolean): string => {
    if (upper) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  }
  
  console.log(toLowerOrUpper("Hello"));        // オプショナルが省略された場合はundifinedを返す→ユニオン型である
  console.log(toLowerOrUpper("Hello", false)); // "hello" と表示される
  console.log(toLowerOrUpper("Hello", true));  // "HELLO" と表示される
  

  // コールバック関数
  // 関数引数の中に関数を渡すことができるmap,call,filter,reduceなど
  type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "John Smith", age: 15 }
];

const names = users.map(getName);
console.log(names); // ["uhyo", "John Smith"] と表示される
