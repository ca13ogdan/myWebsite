//Particles Background
particlesJS.load('particles-js','particles.json');

//JQUERY
// Icon Click Event
$(document).ready(function(){
    $('.socialIcons > p').click(function(){
        $('.socialIcons .fa').fadeToggle();
    });
    //Change Icons After Click
    $('.fa').slice(0,8).click(function(){
        if($(this).css('color') === 'rgb(77, 77, 77)'){
            $('.fa').css('color','rgb(77, 77, 77)');
            $(this).css('color','rgb(8, 253, 216)');               
        }else{
            $('.fa').css('color','rgb(77, 77, 77)');
            $(this).css('color','rgb(77, 77, 77)'); 
        }
    });
    //Display 'Home' Page on click
    $('.fa-home').click(function(){
        $('#aboutMe, #skills, #portfolio').hide();
        $('#homeIcon').fadeToggle(1000)       
    });
    //Display 'About Me' page on click
    $('.fa-address-book-o').click(function(){
        $('#homeIcon, #skills, #portfolio').hide();
        $('#aboutMe').fadeToggle(1000)       
    });
    //Display 'Skills&Experience' page on click
    $('.fa-code').click(function(){
        $('#homeIcon, #aboutMe, #portfolio').hide();
        $('#skills').fadeToggle(1000)       
    });
    //Display 'Portfolio' page on click
    $('.fa-image').click(function(){
        $('#homeIcon, #aboutMe, #skills').hide();
        $('#portfolio').fadeToggle(1000)       
    });
    //Toggle Class runnerBand ( animation class for every letter)
    $('.rubber').hover(function(){
        $(this).addClass('rubberBand', 3000, callbackRubber());
    });
        function callbackRubber(){
            setTimeout(function(){
                $('.rubber').removeClass('rubberBand');
            }, 1000);
        }


});


















