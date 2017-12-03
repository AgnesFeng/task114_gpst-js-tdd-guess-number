// Write your cade below:
function main(real,input) {
    let a = 0;
    let b = 0;
    console.log(a);
    input = input.split('');
    real = real.split('');

    input.map((temp) =>{
        let comp = real.map((tt,ind,array) =>{
            if(array.indexOf(temp)>-1){
                a +=1;
            }

        });
        console.log(a);
    });


}


module.exports = main;