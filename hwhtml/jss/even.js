function funeven()
{
var n=document.forms["frm1"]["name"].value;

   //var n1 = parseInt(document.getElementById("name").Value);
   var n1=(n%2);
if(n1==0)
{
   
  document.getElementById("lb1").innerHTML= "the number is even";
  console.log("even");
  //console.log(n1);
}
else
{
    //console.log("odd");
    console.log(n);
    document.getElementById("lb1").innerHTML= "the number is odd";
}
}