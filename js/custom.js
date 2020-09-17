$(document).ready(function(){

   $('.claim').click(function() {
     $('.card-slide-one').hide();
     $('.card-slide-two').addClass('animated zoomIn');   
     $('.card-slide-two').show();
        setTimeout(function(){
     $('.card-slide-two').hide();
     $('.card-slide-three').addClass('animated zoomIn');   
     $('.card-slide-three').show();
   
   },4000); 
    });
   $('.aa').click(function() {
     $('.card-slide-three').hide();
     $('.card-slide-four').addClass('animated zoomIn');   
     $('.card-slide-four').show();
  
    });
   $('.bb').click(function() {
     $('.card-slide-four').hide();
     $('.card-slide-five').addClass('animated zoomIn');   
     $('.card-slide-five').show();
  
    });
   $('.cc').click(function() {
     $('.card-slide-five').hide();
     $('.card-slide-six').addClass('animated zoomIn');   
     $('.card-slide-six').show();
       setTimeout(function(){
             $('.stock-items').addClass('animated flash');   
             $('.stock-items').html("2");
},2000); 
    });




});

