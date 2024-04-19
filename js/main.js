$(function () {

    $(".gnb").on("mouseenter", function() {
        $("header").addClass("expand");
    })
    $(".down").on("mouseleave", function() {
        $("header").removeClass("expand");
    });

    $(".navBtn").on("click", function() {
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });

    $(".gnb li").on("click", function() {
        $(this).addClass('active').siblings().removeClass('active');
        const i = $(this).index();
        $(".submenu .subwrap .sub").removeClass("active");
        $(".submenu .subwrap .sub").eq(i).addClass("active");
    });
    
   $('.row6 .con .item h4').click(function(){
        $(this).toggleClass('on')
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle();

        $(this).parent().siblings().children('h4').removeClass('active');
        $(this).parent().siblings().children('.content').stop().slideUp();

   });
   
  let swiper3 = new Swiper(".row4 .con-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //     nextEl: ".myNext2",
    //     prevEl: ".myPrev2",
    //   },
      breakpoints: {
        768: {
            slidesPerView: 3,
            
        }, //breakpoint 1000px
    }, 
    //responsive
        on : {
            breakpoint: function (slider, bp) {
                const breakPoint = slider.currentBreakpoint;
                // console.log(slider);
                if(breakPoint === "1000") {
                    // console.log("disbale")
                    // slider.detachEvents();
                    slider.disable();
                } else {
                    // console.log("enable")
                    slider.enable();
                }
            },
        },//event     
  });
  var quickMenu = $('.qucik_menu');
  var lastScrollTop = 0;

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    quickMenu.toggleClass('hidden', scrollTop > lastScrollTop);
    lastScrollTop = scrollTop;
  });

  // console.log(typeof swiper3 );
  
  //  $(window).resize(function() { 
  //   let ww = $(this).width();  
  //   if( ww < "1000") {
  //       swiper3.enalbe();
  //   } else {
  //       swiper3.disable();
  //   }
  // });
    
  // console.log(typeof swiper3);
  // window.resize(function() {
  //   if($(window).width() < "1000") {
  //       swiper2.enalbe();
  //   } else {
  //       swiper2.disable();
  //   }
  //   });
    

   let swiper = new Swiper(".row7 .con-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".myNext",
        prevEl: ".myPrev",
      },
  });
  $('.row7 .con-slide').mouseover(function(){
    swiper.autoplay.pause();
  });
  $('.row7 .con-slide').mouseout(function(){
    swiper.autoplay.resume();
  });

  let swiper2 = new Swiper(".row8 .con-slide", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".myNext2",
        prevEl: ".myPrev2",
      },
  });
  $('.row8 .con-slide').mouseover(function(){
    swiper2.autoplay.pause();
  });
  $('.row8 .con-slide').mouseout(function(){
    swiper2.autoplay.resume();
  });


  // const start = $('.row8').offset().top;
  // $(window).scroll(function(){
  //   let src = $(this).scrollTop();
  //   if(src >= start){
  //     $('.phone').stop().fadeIn(10);
  //   }else if(src < start){ 
  //     $('.phone').stop().fadeOut(10);
  //   }
  // });
  const show = $('.row9').offset().top;
  $(window).scroll(function(){
    let src = $(this).scrollTop();
    let scr2 = $(this).scrollTop() -400;
    let view =  $(window).innerWidth();
    if(scr2 >= show && view > 1200 ){
      $(' .row10_bg').addClass('expand');
      $('.row10 .circle').css({'background':'#fff'});
      $('.row10 .row10_bg .circle').addClass('active')
      console.log('add');
    }else if(scr2 < show && view > 1200 ){ 
      $(' .row10_bg').removeClass('expand');
      $('.row10 .circle').css({'background':'#ffcc00'});
      $('.row10 .row10_bg .circle').removeClass('active')
      // console.log('remove');
   }else if(src >= show){
    $(' .row10_bg').addClass('expand');
    $('.row10 .circle').css({'background':'#fff'});
    $('.row10 .row10_bg .circle').addClass('active')
    console.log('add');
   }else if(src < show ){
    $(' .row10_bg').removeClass('expand');
    $('.row10 .circle').css({'background':'#ffcc00'});
    $('.row10 .row10_bg .circle').removeClass('active')
    console.log('remove');
   }
  });

    // function resize() {
    //     var wt = $(window).width();    
    //     console.log("resized!!");
    //     if(wt >=320 && wt<1200){
    //         mo();
    //     }else if(wt>=1200){
    //         pc();
        
    //     }
    // }

    // function mo() {
        
        
    //     $('.navBtn').click(function(){
    //         $(this).toggleClass('active');

    //         if ($('nav').css('right') === '0px') {
    //             // 네비게이션 메뉴가 열려있으면 닫기
    //             $('nav').stop().animate({ 'right': '-100%' }, 300);
                
    //         } else {
    //             // 네비게이션 메뉴가 닫혀있으면 열기
    //             $('nav').stop().animate({ 'right': 0 }, 300);
    //         }
            
    //     });
            
        
  
    //    $('nav .gnb li').click(function(){
    //     $(this).css({
    //         'background':'#FFCC00',
    //         'color':'#fff'  
    //     }).siblings().css({
    //         'backgroundColor':'#f2f2f2',
    //         'color':'#545045'
    //     });
    //     let i = $(this).index();
    //     $('.submenu .subwrap .sub').eq(i).show()
    //     .siblings().hide();
    //    });
       
    // }
    // //mobile끝

    // function pc() {

    //  //  $('header .down').hover(
    //  //       function () {
    //  //           $('.submenu').stop().slideDown();
    //  //           $('.menubg').stop().slideDown();
    //  //       },
    //  //       function () {
    //  //           $('.submenu').stop().slideUp();
    //  //           $('.menubg').stop().slideUp();
    //  //       }
    //  //       
    //  //   );
        
    // }
    // //pc끝


    // $(window).resize(function() {
    //     resize();
    // });    

    
    // function init() { //initialize
    //     resize();
    // }

    // init();
  
      $('.qucik_menu .inner li').click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
      });
});




     //$('.navBtn').click(function(){
       // if($(this).hasClass('active')){
       //     $(this).removeClass('active');
       // }else{
       //     $(this).addClass('active')
       // }
       //});

          //$('header .util li').click(function(){
       //     $(this).addClass('active').siblings()
       //     .removeClass('active')
       //});

// const start = $(누군가).offset().top
// $(window).scroll(function() {
//   const src = $(this).scrollTop();
//   if(src >= start) {
//     짜잔
//   } else if(src < start) { 
//     숨기기
//   }
// });