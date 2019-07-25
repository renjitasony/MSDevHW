function funeven()
{
//var n=document.forms["frm1"]["name"].value;

   var n1 = parseInt(document.getElementById("name").value);
   n1=(n1%2);
if(n1==0)
{   
  document.getElementById("lb1").innerHTML= "the number is even";  
}
else
{    
    document.getElementById("lb1").innerHTML= "the number is odd";
}
}