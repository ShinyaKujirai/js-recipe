const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const feedback = document.getElementById("feedback")

button1.onclick = function() {
  feedback.textContent = "残念！たまごは第4位です．"
}
button2.onclick = function() {
    feedback.textContent = "残念！はんぺんは第2位です．"
}
button3.onclick = function() {
    feedback.textContent = "残念！巾着第3位です．"
}
button4.onclick = function() {
    feedback.textContent = "残念！からしはおでんの具じゃないよ．"
}
button5.onclick = function() {
  feedback.textContent = "大正解！"
}
button6.onclick = function() {
  feedback.textContent = "残念！ごぼう巻きは第5位です．"
}
button7.onclick = function() {
    feedback.textContent = "残念！ジャガイモは熱いので苦手です．"
}

//オブジェクト自己紹介

const kujira = {
    name: "くじらいしんや",
    age: 20,
    birthDay: "2000/03/24",
    hobbies: ["サイクリング","アニメ","貯金"],
    sayHello: function() {
      console.log("Buenas tardes")
    }
}

console.log(kujira.name)
console.log(kujira.age)
console.log(kujira.birthDay)
console.log(kujira.sayHello)
