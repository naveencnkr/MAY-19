var input="Madam";
var str=input.toLowerCase();
var reversedString="";
var count=0;
for(var i of str)
{
    reversedString=reversedString+i;
}
for(var j=0;j<reversedString.length;j++)
{
    if(str.charAt(j)==reversedString.charAt(j))
    {
         count++;
    }
}
if(count==str.length)
{
    console.log("input is palindrome");
}
else{
    console.log("input is not a palindrome");
}
