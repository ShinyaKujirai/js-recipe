// くじらボタン
const whaleButton = document.getElementById("whale-button")
const whaleStamp = document.getElementById("whale-stamp")

// Q.行きつけのお店
const distination = document.getElementById("distination")
const ippatsu = document.getElementById("ippatsu")
const monsun = document.getElementById("monsun")
const superAlps = document.getElementById("supurAlps")
const feedback = document.getElementById("feedback")
const quiz1Url = document.getElementById("quiz1-url")


// くじらを出す
whaleButton.onclick = function(){
    const whale = document.createElement("div")
    // たまにレアな くじら が出る
    let randomWhale = Math.floor(Math.random()*100)
    if(randomWhale > 3){
        whale.textContent = "🐳"
    }else{
        whale.textContent = "🐋"
    }
    whaleStamp.append(whale)
    // move関数 未開拓
    // setInterval(move(whaleStamp),10);
}

/*
const move = function(stamp) {

}
*/

ippatsu.onclick = function() {
    ippatsu.classList.add('lamp')
    feedback.textContent = "正解！！みんな大好き壱発ラーメン"
    quiz1Url.href = "https://ippatsu.co.jp/menu/"
    quiz1Url.textContent = "壱発ラーメン のホームページ"
}
monsun.onclick = function() {
    feedback.textContent = "正解！！法政大生の行きつけのお店（たぶん）"
    quiz1Url.href = "https://monsun-higashikoganei.business.site/"
    quiz1Url.textContent = "モンスン のホームページ"
}
superAlps.onclick = function() {
    feedback.textContent = "正解！！近所のスーパーです♪"
    quiz1Url.href = "http://superalps.info/"
    quiz1Url.textContent = "ALPS のホームページ"
}