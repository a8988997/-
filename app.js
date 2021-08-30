let answer = Math.floor(Math.random()*100);
let n1=0;
let n2=99;

while (true){
    let guess=prompt("請輸入"+n1+"至"+n2+"之間的數字");
    if(guess<n1||guess>n2) {
    alert("請輸入正確範圍（1~99)");
    continue;
}

    if (guess==answer){
        alert("秘密數字為"+answer);
        alert("恭喜贏得遊戲");
        break;
    }else if(guess<=answer){
      n1=guess;
    }else if(guess>answer){
        n2=guess;
    }
}

