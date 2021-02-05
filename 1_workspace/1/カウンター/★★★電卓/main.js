const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multipliedButton = document.getElementById("multiplied-button")
const dividedButton = document.getElementById("divided-button")
const equalButton = document.getElementById("equal-button")

const plusminusButton = document.getElementById("plusminus-button")
const percentButton = document.getElementById("percent-button")
const resetButton = document.getElementById("reset-button")

// 数字ボタンそれぞれの要素をまとめて取得
let numButton =[]
for (let i = 0; i <= 9 ; i++){
    numButton.push (document.getElementById(i + "-button"))
    console.log(numButton[i])    
}

let mark = (0, 0, 0, 0)
plusButton.onclick = function(){mark = (1, 0, 0, 0)}
minusButton.onclick = function(){mark = (0, 1, 0, 0)}
multipliedButton.onclick = function(){mark = (0, 0, 1, 0)}
dividedButton.onclick = function(){mark = (0, 0, 0, 1)}

let n = 0
for (let i = 0; i <= 9 ; i++){
    numButton[i].onclick = function(){
        n = 10*n + i
        display.textContent = n
    }
}

/*equalButton.onclick = function(){
    if (mark !== (0, 0, 0, 0)){
        for(let j = 0; j < 4 ; j++){
            if(mark[0]){sum += n}
            else if(mark[1]){sum -= n}
            else if(mark[2]){sum *= n}
            else if(mark[3]){sum /= n}
        }
        mark = (0, 0, 0, 0)        
    }else {sum = i}
    n = 0
    display.textContent = sum
}*/

percentButton.onclick = function(){

}

plusminusButton.onclick = function(){

}

resetButton.onclick = function(){
    n = 0
    sum = 0
    display.textContent = sum
}