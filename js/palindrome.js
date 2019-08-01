function checkPalindrome(num){
    var rev = 0;            
    for(var copy =num;copy>0;copy = Math.floor(copy/10)){
        rev = (rev*10)+(copy%10);             
    }
    if(rev == num){
        return true;
    }
    return false;
}
function validate(){
    if($("#palno").val()==""){
        alert("Please enter a number to continue!");
        return false;
    }
    return true;
}
$(document).ready(function(){
    
  $("#check").click(function(){        
    var myPro = new Promise((resolve,reject)=>{
    var num = $("#palno").val();
    
    if(!validate()){
        return false;
    }    
    var isPal = checkPalindrome(num);
    if(isPal){
        resolve("My promise is resolved.");
    }else{        
        reject("My promise is rejected");
    }            
  });
  myPro.then((msg)=>{
    $("#result").text(msg);
    }).catch((msg)=>{
        $("#result").text(msg);
    });
});
});