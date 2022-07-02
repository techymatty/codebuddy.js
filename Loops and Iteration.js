Loops and Iteration Level 1


function Patt(n){
let row = n;
let string =" ";
for (let i=1; i<=row; i++){
for (let j=1; j<=row-i; j++){
string+= " ";
}

for (let j=1; j<=i; j++){
string+= j;
}

for (let j=i-1; j>=1; j--){
string+=j;
}
console.log(string, "\n");
string = " ";
}
}
Patt(4);