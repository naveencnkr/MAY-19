var input=[0,1,false,2, 5,'',3,null];
var arr=[];
var len=input.length;          
var j=0;
 for(var i=0;i<len;i++)
 {
     if(isNaN(input[i]) || input[i]==0 || input[i]===true || input[i]===false || input[i]===null)
     {

     }
     else
     {
         arr[j]=input[i];
         j++;
     }
 }
 console.log(arr);