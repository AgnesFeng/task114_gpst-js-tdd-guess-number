// Write your cade below:
function main(real,input) {
    let a = 0;
    let b = 0;
    let str = '';

    for(let i = 0; i<4;i ++){
        //判断存在
        if(input.indexOf(real.charAt(i)) >-1){
            a +=1;
            console.log(a);
        }
        //判断位置
        if(input.charAt(i) ===real.charAt(i)){
            b +=1;
            console.log(b);
        }
    }
    console.log(str);
    str = a+'A' + b +'B';


    return str;

}


module.exports = main;