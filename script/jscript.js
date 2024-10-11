$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
          $('.navbar').addClass("colorSticky");
        }
        else {
          $('.navbar').removeClass("colorSticky");
        };
    });
  
  });