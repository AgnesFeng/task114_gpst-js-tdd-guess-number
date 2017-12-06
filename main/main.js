// Write your cade below:
function main(real,input) {
    let a = 0;
    let b = 0;
    let str = '';
    for(let i = 0; i<4;i ++){
        //判断存在
        if(input.indexOf(real.charAt(i)) >-1){
            a +=1;
        }
        //判断位置
        if(input.charAt(i) ===real.charAt(i)){
            b +=1;
        }
    }
    str = a+'A' + b +'B';
    console.log(str);
    console.log('正确数字为：' + ran);
    return str;
}

//得到四位的随机数
function getGiveNumberArr() {
    let arr=[];
    function getRandom(){
        let random=Math.floor(Math.random()*10);
        if(random.toString().length===1&&arr.indexOf(random)===-1){
            arr.push(random)
        }else{
            getRandom();
        }
    }
    for(let i=0;i<4;i++){
        getRandom();
    }
    return arr;
}
let ran = getGiveNumberArr().join('');

//得到键盘输入
function guessNumber() {
    let guessArr = [];
    let readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('请输入猜测的四位数：', function (answer) {
        console.log("输入的值为：" + answer);//answer作用范围仅限于这个函数
        main(ran,answer);
        readline.close();
    });
    readline.on('close', function() {
        //console.log('输入完毕');
        process.exit(0);
    });
    return guessArr;
}

guessNumber();
module.exports = guessNumber;