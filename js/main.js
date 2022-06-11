$(function(){
    

  //sc-visual

  const gauge = gsap.to('.curr',8,{
    width:"100%",
    ease:"none",
    paused:true,
    onComplete:function(){
      mainSlide.slideNext();
    }
  })

var mainSlide = new Swiper(".visual-slide.swiper", {
    loop: true,
    speed:1000,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      on:{
        init:function(){
          //초기세팅 init
          gauge.play();
        },
        slideChange:function(){
          gauge.restart();
        }
      }
  });


  $('.btn-play').click(function(e){
    e.preventDefault();

      if ($(this).find('.btn-pause').hasClass('active')) {

        gauge.pause();
        $(this).find('.btn-start').addClass('active').siblings().removeClass('active')

      } else {
        gauge.resume();
        $(this).find('.btn-pause').addClass('active').siblings().removeClass('active')
      }
  })



  gsap.to('video',{
    scrollTrigger:{
      trigger:".video-area",
      start:"top bottom",
      end:"bottom 100%",
      markers:true,
      scrub:1,
    },
    'clip-path': "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  })



  






///////////%^$#%?////

$('[data-fade]').each(function(){


  gsap.fromTo($(this),{
    opacity:0,
    y: 50
    
  },{

    scrollTrigger:{
      trigger:$(this),
      start:"top 80%",
      end:"bottom top",
      markers:true,
    },
    duration:1,
    opacity:1,
    y: -50
  })

})


})