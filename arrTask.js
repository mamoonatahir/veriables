var arr = [23, 2, 45, 67, 78, 89, 80, 56, 34];
var input =parseInt(prompt("enter number to find"));
console.log("user input  " + input);
var found = false;
for(var i=0; i< arr.length; i++) {
    if(arr[i] === input) { 
        console.log("found " + input + "on index = " + i);
        found = true
        break;
    }
}
if(!found){
    console.log("not found");
}