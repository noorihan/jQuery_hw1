$(function(){
    //jquery
   let openModalBtn=  $(".openModalBtn");
   openModalBtn.click(function(){
     $(".modal").fadeIn(500);
     $(".modalBox").delay(300).slideDown(500);
     


   })
   let closeBtn = $(".btnClose");
   
   function modalClosing() { 
    $(".modal").fadeOut(500);
    $(".modalBox").slideUp(500);

   }
   closeBtn.click(modalClosing);
   $(".modal").click(modalClosing);

   let togglerBtn = $('button');

   togglerBtn.click(function(){

   let type = $('input').attr('type');

   if(type=='password'){
    $('input').attr("type",'text');
   }
   else{
    $('input').attr("type",'password')
   }



   })

    

})
