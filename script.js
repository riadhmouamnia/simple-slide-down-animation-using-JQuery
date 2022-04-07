$(document).ready(function(){

    var item = $("button");

   item.on("click", function(){
       console.log(item);
    $(this).next(" p").slideToggle(500);
   })
   


});