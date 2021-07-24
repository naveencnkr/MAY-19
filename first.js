var input="she sells sea shells on tne see shore";
var letterCount=0;
var wordsInInput=input.split(" ");
for(var i=0;i<input.length;i++)
{
    letterCount++;
}
console.log(wordsInInput.length+" "+letterCount);