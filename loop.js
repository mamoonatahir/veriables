// var num = parseInt(prompt("please enter the number"));
// var l = parseInt(prompt("please enter the table length")); 
// for(var i = 1; i<= l ; i++) {
    // console.log(num + " X "+ i +" = " +(num*i));

// }
var num = parseInt(prompt("please enter number"));
var isPrime = true;
for(var i=2;i <num;i++){
    var result = num % i;
    if (result == 0){
            console.log("number is not prime = " +num + " I " + i);
            isPrime = false;
            break;
        }
}
if(isPrime){
    console.log("number is Prime " + " " + num );
}
