var input=[1,2,3,4,5,6];
var arr=[];
var len=input.length;
var k=len-1;
 for(var i=len-1;i>=0;i--)
 {
     arr[len-1-k]=input[i];
     k--;
 }
 console.log(arr);
