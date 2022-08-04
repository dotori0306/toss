$(function(){


//패밀리사이트
$('.c-title').click(function(e){
    e.preventDefault();

    if($(this).siblings('.familysite-group').css('display') == 'block'){

        $(this).siblings().stop().slideUp();
        
    }else{
        $(this).siblings().stop().slideDown();
    }
})




//지우지말것
})