let num = ('0101101')

const toMorseCode = function(num){
    let str = new Array()
    for(let i = 0; i < num.length; i++){
        if(num[i]　=== '1'){str.push('-')}
        else{str.push('・')}
    }
    return str
}

console.log(toMorseCode(num))