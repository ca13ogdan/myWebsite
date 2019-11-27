//JQuery
//Images Click Events
$('.slide').click(function(e){
    //Display Viewer
    $('.slider').toggle(); 
    //Get Img 
    const getImgAlt = e.currentTarget.childNodes[1].alt;
    //Set Viewer Img !!!!!!!!!!!!!!!!ERROR, BACKGROUDN STYLE
    $('.slider-view').css('background','url(images/slide'+getImgAlt+'.jpg)');
    //Set Img Number (bottom left)
    $('.slide-number').html(`${getImgAlt} of ${document.querySelectorAll('.slide').length}`);
    //Sync Radio Buttons With Image Clicked
    $(".dots > input").prop('checked', false);
    $("input[id=" + getImgAlt + "]").prop('checked', true);
    
});
//Close VIewer by Clicking "X" Button
$('.fa-close').click(function(){
    $('.slider').hide();
});
//Close Viewer by Pressing "ESC" Button
    $(document).keyup(function(e){
        if(e.which==27){ //27 = ESC code
            $('.slider').css('display','none');
        }
    });
//Next Img by Clicking Right Arrow Button




