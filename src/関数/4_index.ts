function repeat<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  
  // ["a", "a", "a", "a", "a"] が表示される
  //　型引数はstring 戻り値はstring[]
  console.log(repeat<string>("a", 5));
  // [123, 123, 123] が表示される
  //　型引数はnumber 戻り値はnumber[]
  console.log(repeat<number>(123, 3));
  

  function repeat1<T>(element: T, length: number): T[] {
    const result: T[] = [];
    for (let i = 0; i < length; i++) {
      result.push(element);
    }
    return result;
  }
  
  // resultはstring[]型となる
  const result = repeat1("a", 5); 
  