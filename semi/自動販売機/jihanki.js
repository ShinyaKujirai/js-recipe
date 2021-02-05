// 表示金額
const display = document.getElementById("display")
// 購入履歴
const purchaseHistory = document.getElementById("purchase-history")
// おつりでリセットボタン
const changeLever = document.getElementById("change-lever")

// 硬貨の種類
const money = ["10", "50", "100", "500", "1000"]
const moneyNum = money.length
// 投入金
let moneyButton =[]
for (let i = 0; i < moneyNum ; i++){
    moneyButton.push (document.getElementById("button" + money[i]))
}

// 当自動販売機 のラインナップ
// ["English", "日本語", 金額, 販売個数]
const drink = [["icetea", "アイスティー", 160, 0], ["coffee", "コーヒー", 120, 0], ["monster", "モンスター", 210, 0],
              ["wilkinson", "ウィルキンソン", 100, 0]]
const drinkNum = drink.length
// 商品ボタン
let drinkButton =[]
console.log("購入前")
for (let i = 0; i < drinkNum ; i++){
    drinkButton.push (document.getElementById("button-" + drink[i][0])) 
    // 乱数で商品の残り個数を決める
    drink[i][3] += Math.floor(Math.random()*8)
    if(drink[i][3] === 0){
        drinkButton[i].append("売切")
        drinkButton[i].classList.add('sold-out')
    }
    // 商品の残りの数は・・？
    console.log(drink[i][1] + drink[i][3] + "本")
}
console.log("")
console.log("購入後")



// 総投入金額
let totalMoney = 0

// 商品が購入可能か否か
const judgment =function(totalMoney){
    for (let i = 0; i < drinkNum ; i++){
        // 購入可能商品 の点灯
        if(totalMoney >= drink[i][2] && drink[i][3] > 0){
            drinkButton[i].classList.add('lamp')
        // 商品購入不可能    
        }else{
            drinkButton[i].classList.remove('lamp')
        }
    }
}

// 硬貨を入れたら
for (let i = 0; i < moneyNum ; i++){
    moneyButton[i].onclick = function() {
        // 総投入金 が増える
        // totalMoney += money[i] は 文字列の足し算になってしまう
        totalMoney += Number(money[i])
        display.textContent = totalMoney
        judgment(totalMoney)
    }
}

// 商品を購入
for (let i = 0; i < drinkNum ; i++){
    drinkButton[i].onclick = function() {
        if(totalMoney >= drink[i][2] && drink[i][3] > 0){
            // 総投入金が 減る
            totalMoney -= drink[i][2]
            display.textContent = totalMoney
            // 購入可能個数が減る
            drink[i][3] --
            // 商品の残りの数
            console.log(drink[i][1] + drink[i][3] + "本")
            // ラスト1本を購入したとき
            if(drink[i][3] === 0){
                drinkButton[i].append("売切")
                drinkButton[i].classList.add('sold-out')
            }
            // 購入可能の表示
            judgment(totalMoney)
            // 購入した商品を表示
            const card = document.createElement("div")
            card.textContent = drink[i][1]
            purchaseHistory.append(card)
        }
    }
}

// おつり
changeLever.onclick = function(){
    // 表示金額を 0 に
    totalMoney = 0
    display.textContent = totalMoney
    // 購入可能の表示
    judgment(totalMoney)
}