// Exercise 1 //
const firstArg = parseInt(process.argv[2]);
const secondArg = parseInt(process.argv[3]);
const thirdArg = parseInt(process.argv[4]);

function a(num1, num2, num3) {
    // logic here
    if((num1 >= num2) && (num1 >= num3)){
        
    console.log('largest number is ' +num1);
    }
    else if((num2 >= num1) && (num2 >= num3)){
        console.log('largest number is ' +num2);
    }
    else{
        console.log('largest number is ' + num3);
    }
        
    // end
    
}

a(firstArg, secondArg, thirdArg);



//Exercise 4 //
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
console.log(genCharArray('a', 'z'))
