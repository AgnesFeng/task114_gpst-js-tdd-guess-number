

//**********************************实例1：我叫小明*******************************
/**
 * Created by Administrator on 2015/9/10.
 */
// 引入readline模块
// var readline = require('readline');
//
// //创建readline接口实例
// var  rl = readline.createInterface({
//         input:process.stdin,
//         output:process.stdout
//      });
//
// // question方法
// rl.question("你叫什么？",function(answer){
//         console.log("名字是："+answer);
//         // 不加close，则不会结束
//         rl.close();
//     });

//close事件监听
// rl.on("close", function(){
//         // 结束程序
//         process.exit(0);
//     });

//**********************************实例2：输入与输出,（各个模块不能连着运行）*******************************
/**
 * Created by Administrator on 2015/9/10.
 */
// 引入readline模块
//  var readline2 = require('readline');
//
// var r2 = readline2.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// r2.on('line', function(line){
//     switch(line.trim()) {
//         case 'copy':
//             console.log("复制");
//             break;
//         case 'hello':
//             r2.write("Write");
//             console.log('world!');
//             break;
//         case 'close':
//             r2.close();
//             break;
//         default:
//             console.log('没有找到命令！');
//             break;
//     }
// });
// r2.on('close', function() {
//     console.log('bye bye');
//     process.exit(0);
// });
//***********************************实例3：类似命令行的输入输出******************
// var readline = require('readline');
// var  rl = readline.createInterface(process.stdin, process.stdout);
//
// rl.setPrompt('Test> ');
// rl.prompt();
//
// rl.on('line', function(line) {
//     switch(line.trim()) {
//         case 'copy':
//             console.log("复制");
//             break;
//         case 'hello':
//             console.log('world!');
//             break;
//         case 'close':
//             rl.close();
//             break;
//         default:
//             console.log('没有找到命令！');
//             break;
//     }
//     rl.prompt();
// });
//
// rl.on('close', function() {
//     console.log('bye bye!');
//     process.exit(0);
// });


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
console.log(ran);

//得到键盘输入
function guessNumber() {
    // let readlineSync = require('readline');
    let guessArr = [];
    let readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    //let guessNumberString =
    readline.question('请输入猜测的四位数：', function (answer) {
        console.log("输入值：" + answer);//answer作用范围仅限于这个函数
        // 不加close，则不会结束
        //console.log(answer.charCodeAt());//answer 是个字符串
        guessArr.push(answer);
        console.log(guessArr);   //函数外面没有事件的时候，这里是可以打印的，即去掉 console.log(arr),否则不行
        readline.close();

    });
    readline.on('close', function() {
       console.log('输入完毕');
       process.exit(0);
    });
    return guessArr;
}
let arr = guessNumber();
//console.log(arr);//此时会不能输入，而是直接打印了空数组。它没有等待键盘输入就执行完程序了


//*************
//let guess = guessNumber();
// function getGuessNumber() {
//     let readlineSync = require('readline-sync');//readline-sync没有
//     let guessNumberString = readlineSync.question('input your guess number： ');
//     let guessNumber = [];
//     for (let i = 0; i < guessNumberString.length; i++) {
//         guessNumber.push(Number(guessNumberString[i]));
//     }
//     return guessNumber;
// }
// let guess = getGuessNumber();