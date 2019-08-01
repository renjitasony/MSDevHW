function printsum(sum){
    $("#result").text("Sum:"+sum);
}
function getSum(n,callback){
    for(var dg=0,sum=0;n>0;n = Math.floor(n/10)){
        dg++;
        sum += n%10;
    }
    if(dg!=4){
        return false;
    } 
    callback(sum);
    return true;
}

$(document).ready(function(){
    
    $("#check").click(function(){        
      
      var num = $("#frno").val();
      
      if(!getSum(num,printsum)){
          alert("Please enter a 4 digit number to continue:");
          return false;
      }    
      
    
    });
});