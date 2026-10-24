/*          1 */               
let number = 0;
while(number <= 12){
    if(number % 2 == 0){ 
console.log(number);
}
number ++
}

/*          2 */               
let result = 1;
let counter = 0;
while(counter < 10){
    result = result * 3;
    counter = counter + 1;
}
console.log(result);

/*  OR  */
 result = 1;
for( counter = 0; counter < 10; counter++){
    result = result * 2

}
console.log(result)

/*          3 */              
const prompt = require("prompt-sync")();
let yourName;
do {
yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);



/*          4. */
for(let number = 0; number <= 12; number +=2){
    console.log(number)
}

/*  OR  */
for(let number = 0; number <= 12; number ++){
    if(number % 2 == 0){
console.log(number);
} 
}  


switch (prompt("What is the weather like?")) {
case "rainy":
console.log("Remember to bring an umbrella.");
break;
case "sunny":
console.log("Dress lightly.");
//break;
case "cloudy":
console.log("Go outside.");
break;
default:
console.log("Unknown weather type!");
break;
}
