// 引数 number を受け取る関数
const genkiFunction = function(number){
  let n = 1
  // 1000ms = 1s の間隔で function(){処理} を繰り返し実行
  let id = setInterval(function(){
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
    // n を 1　増やし， 引数 number を 越えていれば終了
    n++
    if(n > number){
      clearInterval(id)
    }
  }, 1000)
}

genkiFunction(24)