type F = (repeatNum: number) => string;

// 型注釈でstringを返す関数になる
const xRepeat: F = (num: number): string => "x".repeat(num);

// 型推論でstringを返す関数になる
const xRepeat1 = (num: number) => "x".repeat(num);

// 型注釈でvoidを返す関数になる
// voidでもいける
const g = (num: number) => {
    for (let i = 0; i < num; i++) {
      console.log("Hello, world!");
    }
  };

  type F1 = (arg: number) => string;
// 型注釈を省略していい時は変数宣言時に型注釈がある場合
const xRepeat2: F1 = (num) => "x".repeat(num);

// 関数の引数は逆方向の型推論をしているから型注釈を省略していいよね
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = nums.filter((x) => x % 3 === 0);
console.log(arr2); // [3, 6, 9] と表示される

const f = (num: number) => num * 2;
