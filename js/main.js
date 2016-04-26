  /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.featurette').each(function(i){      
            
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the top of the object is 100px above the bottom of the screen, trigger animation */
            if( bottom_of_window  > top_of_object + 200 ){
                
                $(this).children('div').first().addClass("feature-fade-in");
                    
            }
            
        }); 
    
    });

    var counter = 1;

    function imgSources (){
      
      if(counter === 0){
        counter = 1
        return "./assets/AutomatedSmartLists.svg"
      }else if (counter === 1){
        counter = 2
        return "./assets/MakeEmails.svg"
      }else{
        counter = 0
        return "./assets/Stats.svg"
      }
    };


    setTimeout(function(){
      $('.drag-drop').remove();
    }, 10000);
    
    setInterval(function(){
      $('.main-graphic').children('.feature-graphic').attr('src', imgSources);
    }, 10000)