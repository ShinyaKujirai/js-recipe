// localStrage は消えないオブジェクト
console.log(localStrage["name"])

const numbers = [1, 2, 3]

// localStrage.numbers = numbers

// localStrage には 文字列 しか保存できない

// 配列 -> 文字列 にして保存
const json = JSON.stringify(numbers) // "[1, 2, 3]"
localStrage.numbers = JSON

// 文字列 -> 配列 に戻して取得
console.log(localStrage.numbers)
const numbers2 = JSON.parse(localStrage.numbers)
console.log(numbers)