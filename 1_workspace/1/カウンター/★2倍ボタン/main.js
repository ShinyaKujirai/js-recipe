const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

let count = 1

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function(){
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}