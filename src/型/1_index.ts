// animal型を定義したのちオブジェクトごとに型を定義する
type Animal = {
    species: string;
    age: number;
  }
  // animal型を継承してhuman型を定義する
  type Human4 = Animal & {
    name: string;
  }
  
  const tama: Animal = {
    species: "Felis silvestris catus",
    age: 3
  };
  const uhyo10: Human4 = {
    species:  "Homo sapiens sapiens",
    age: 26,
    name: "uhyo"
  };
  


  type SignType = "plus" | "minus";
function signNumber(type: SignType) {
    return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    // ここではtypeは"none"型
    return 0;
  } else {
    // ここではtypeはSignType型
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, "plus"));  // 5 と表示される
console.log(numberWithSign(5, "minus")); // -5 と表示される
console.log(numberWithSign(5, "none"));  // 0 と表示される
