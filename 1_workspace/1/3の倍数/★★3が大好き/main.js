// 引数 number を受け取る関数
const genkiFunction = function(number){
    // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
    for (let n=1; n<=number; n++) {
      let i = n
      while(i / 10 > 0){
        if(i % 10 === 3){
          console.log(`${n}!!!!!!!`)
          break;
        }
        i = parseInt(i / 10)
      }
      if(i < 1){
        console.log(n)
      }
    }
}

genkiFunction(300)