let string = "Hello";
let reverseString = "";

for(let i = string.length - 1; i >= 0; i--)
{
    //console.log(string.substr(i, 1));
    reverseString += string.substr(i, 1);
}

console.log(reverseString);