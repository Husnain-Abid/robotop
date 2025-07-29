console.log("js working");


(function () {
  'use strict';

  // poppup

  $('.popup-frame').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.popup-img').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true
    }

  });

  $('.popup').magnificPopup({
    type: 'inline',
    preloader: false,
    closeOnContentClick: false,
    fixedContentPos: true,
    mainClass: 'mfp-zoom-in',

    callbacks: {
      open: function () {

      },
    }
  });

  //

  svg4everybody();


  //table

  if ($('table.responsive').length > 0) {
    $('table.responsive').ngResponsiveTables();
  }

  //select styler

  $('select').styler();


  //datepicker

  // $( ".datepicker" ).datepicker();

  // $("#weeklyDatePicker").datetimepicker({
  //   format: 'DD-MM-YYYY'
  // });

  // //Get the value of Start and End of Week
  // $('#weeklyDatePicker').on('dp.change', function (e) {
  //     var value = $("#weeklyDatePicker").val();
  //     var firstDate = moment(value, "DD-MM-YYYY").day(0).format("DD-MM-YYYY");
  //     var lastDate =  moment(value, "DD-MM-YYYY").day(6).format("DD-MM-YYYY");
  //     $("#weeklyDatePicker").val(firstDate + " - " + lastDate);
  // });

  //tabs

  $('.tabs__wrap').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
      $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();

        // $(".nicescroll-box").getNiceScroll().resize();
      });
    });
  });

  //tabs
  $('[data-tabs-btn]').click(function () {
    let tabsName = $(this).parent().attr('data-tabs-btns');
    let tabNo = $(this).attr('data-tabs-btn');
    let tabsWrapper = $('[data-tabs-wrapper=' + tabsName + ']');

    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    tabsWrapper.children().each(function (i, item) {
      $(item).hide();
      if ($(item).attr('data-tabs-item') === tabNo) {
        $(item).show();
      }
    });
  });

  function tabsInitialization() {
    let btns = $('[data-tabs-btns]');
    let wrapper = $('[data-tabs-wrapper]');

    $(wrapper).children().not(function () {
      if ($(this).attr('data-tabs-item') === '1') {
        return true;
      }
    }).hide();

    $(btns).children().not(function () {
      if ($(this).attr('data-tabs-btn') === '1') {
        return false;
      } else {
        return true;
      }
    }).addClass('active');
  }

  tabsInitialization();

  //accordion

  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.accordion__head');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
  }

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if ($('.nicescroll-box').length !== 0) {
      setTimeout(() => {
        $(".nicescroll-box").getNiceScroll().resize();
      }, 1000);
    }

    if (!e.data.multiple) {
      $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
    };
  }

  var accordion = new Accordion($('.accordion'), false);

  //nicescroll

  $(".nicescroll-box").niceScroll(".wrap", {
    cursorcolor: "#092abb",
    cursorwidth: "0px",
    cursorborder: "0px solid #fff",
    zindex: 20,
    emulatetouch: true,
    autohidemode: false,
    cursorborderradius: "0px",
    railalign: 'right',
  });

  $(window).on('resize', function () {
    setTimeout(() => {
      $(".nicescroll-box").getNiceScroll().resize();
    }, 1000);
  })




  // aos

  AOS.init(
    {
      // Global settings
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
      offset: 0, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    }
  );

  setTimeout(AOS.refreshHard, 1000);

  //clipboard

  // var affil1 = new Clipboard('#affil');
  // var banners = new Clipboard('.cab-banners__copy');

  var affil1 = new ClipboardJS('#affil');
  var banners = new ClipboardJS('.cab-banners__copy');



  function affiliatelink(id) {
    id.on('success', function (e) {
      // swal({
      //   title: "Your referral link copied!",
      //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
      //   type: "success",
      //   showCancelButton: false,
      //   confirmButtonClass: "btn-success",
      //   confirmButtonText: "OK!",
      //   closeOnConfirm: false,
      //   closeOnCancel: false
      // });

      // Lobibox.notify('success', {
      //   title: true,
      //   size: 'normal',
      //   icon: false,
      //   sound: false,
      //   iconSource: "bootstrap",
      //   msg: 'Your referral link copied!'
      // });

      $('.copy-success').fadeIn();
      $('.copy-success').delay(3000).fadeOut();
    });
  }

  affiliatelink(affil1);
  affiliatelink(banners);

  $('.header-burger').on('click', function () {
    console.log("click menu");

    $(this).toggleClass('active');
    $('.header-mob').toggleClass('active');

  })

  var mp3 = new Audio();
  // mp3.src = 'assets/img/music.mp3';

  try {
    mp3.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
  } catch (e) {
    console.error("Audio file could not be loaded", e);
  }


  function togglePlay() {
    return mp3.paused ? mp3.play() : mp3.pause();
  };

  $('.header-sound').on('click', function () {
    togglePlay()
    mp3.loop = true;
    $(this).toggleClass('active');

    if (mp3.paused) {
      $('.header-sound__anim div').remove()
    } else {
      for (let i = 0; i < 10; i++) {

        const left = (i * 2) + 1;
        const anim = Math.floor(Math.random() * 75 + 400);
        const height = Math.floor(Math.random() * 25 + 3);

        document.querySelector('.header-sound__anim').innerHTML += `<div class="bar" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`;//`<div class="bar" style="left:${left}px">Hello</div>`;
      }
    }

  })


  setInterval(function () {
    var date = moment(new Date());
    date = date.tz('Europe/London').format('HH:mm:ss');

    var currentDay = moment(new Date());
    currentDay = currentDay.tz('Europe/London').format('DD MMM YYYY');

    $('.header-time p').html(date)
    $('.header-time span').html(currentDay)
  }, 1000)

  if ($('.refs-scene').length !== 0) {
    let refsHead = $('.refs-scene__item-anim_1 div');
    let refsLogo = $('.refs-scene__item-anim_2 div');
    setInterval(function () {
      refsHead.removeAttr('style').addClass('animate__animated animate__bounceInRight');

      setTimeout(function () {
        refsHead.removeClass('animate__animated animate__bounceInRight').fadeOut();
      }, 5000)
    }, 6000)

    setInterval(function () {
      refsLogo.removeAttr('style').addClass('animate__animated animate__bounceInLeft');

      setTimeout(function () {
        refsLogo.removeClass('animate__animated animate__bounceInLeft').fadeOut();
      }, 5000)
    }, 6000)
  }


  // if ($('#smoke').length !== 0) {
  //   var canvas = document.getElementById('smoke')
  //   var ctx = canvas.getContext('2d')
  //   canvas.width = innerWidth
  //   canvas.height = innerHeight

  //   const party = smokeMachine(ctx, [255, 255, 255]);

  //   party.start() // start animating
  //   party.setPreDrawCallback(function (dt) {
  //     party.addSmoke(innerWidth / 2, innerHeight, .3)
  //     canvas.width = innerWidth
  //     canvas.height = innerHeight
  //   })
  // }


  if ($('#smoke').length !== 0) {
  const canvas = document.getElementById('smoke');
  const ctx = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const party = SmokeMachine(ctx, [255, 255, 255]); // ✅ Capital "S"
  party.start();
  party.setPreDrawCallback(function (dt) {
    party.addSmoke(innerWidth / 2, innerHeight, 0.3);
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  });
}



  // sliders

  var startSlider = new Swiper('.start-slider .swiper-container', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    direction: 'vertical',
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.start-slider__nav .swiper-button-next',
      prevEl: '.start-slider__nav .swiper-button-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 3
      }
    }
  });

  var newsThumbsSlider = new Swiper('.news-thumbs .swiper-container', {
    speed: 400,
    spaceBetween: 25,
    slidesPerView: 1,
    loop: false,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    //simulateTouch: false,
    // slideToClickedSlide: true,
    // autoplay: {
    //   delay: 3000,
    // },

    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
    }
  });

  var newsContentSlider = new Swiper('.news-content .swiper-container', {
    speed: 400,
    slidesPerView: 1,
    simulateTouch: false,
    loop: false,
    effect: 'fade',
    navigation: {
      nextEl: '.news-nav .swiper-button-next',
      prevEl: '.news-nav .swiper-button-prev',
    },
    pagination: {
      el: '.news-nav .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: newsThumbsSlider,
      autoScrollOffset: 1
    }
  });

  // parallax

  if ($('#header-scene').length !== 0) {
    var scene = document.getElementById('header-scene');
    var parallaxInstance = new Parallax(scene);
  }
  if ($('#invest-scene').length !== 0) {
    var scene = document.getElementById('invest-scene');
    var parallaxInstance = new Parallax(scene);
  }
  if ($('#refs-scene').length !== 0) {
    var scene = document.getElementById('refs-scene');
    var parallaxInstance = new Parallax(scene, {
      limitY: 1
    });
  }

  //menu fix mobile

  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


  // setTimeout(() => {
  //   $('.marquee').marquee({
  //     //speed in milliseconds of the marquee
  //     duration: 8000,
  //     //gap in pixels between the tickers
  //     gap: 0,
  //     //time in milliseconds before the marquee will start animating
  //     delayBeforeStart: 0,
  //     //'left' or 'right'
  //     direction: 'left',
  //     //true or false - should the marquee be duplicated to show an effect of continues flow
  //     duplicated: true
  //   });
  // }, 1000);

  //cabinet-Settings

  // $('.cabinet-table__settings-btn').on('click', function(e){
  //   e.preventDefault();



  //   $(this).siblings('.cabinet-table__settings-hide').fadeIn(300);
  //   $(this).parent().addClass('active');
  //   let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-table__settings-hide').offset().top - $(this).siblings('.cabinet-table__settings-hide').outerHeight(true));

  //   if(trueH <= 0){
  //     $(this).siblings('.cabinet-table__settings-hide').addClass('top');
  //   }
  // });

  // $(document).mouseup(function (e){ 
  //   var block = $(".cabinet-table__settings.active .cabinet-table__settings-hide"); 
  //   if (!block.is(e.target) 
  //       && block.has(e.target).length === 0) { 
  //       block.hide(); 

  //       block.parent().removeClass('active');

  //       if( block.hasClass('top')){
  //         block.removeClass('top');
  //       }
  //   }
  // });


  console.log("jquery working");

// fake stats 

  $(document).ready(function () {
    // Format today's date as "Jul-28-2025"
    const today = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = months[today.getMonth()] + '-' +
                          String(today.getDate()).padStart(2, '0') + '-' +
                          today.getFullYear();

    // Replace date part in all span inside .stat-table__title
    $('.stat-table__title span').each(function () {
      const fullText = $(this).text();
      const timePart = fullText.match(/\d{2}:\d{2}:\d{2} [AP]M/)?.[0] || "12:00:00 PM";
      $(this).text(`${formattedDate} ${timePart}`);
    });
  });


})();








var _____WB$wombat$assign$function_____ = function (name) { return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function (obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function () {
    'use strict';

    // poppup

    $('.popup-frame').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    $('.popup-img').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }

    });

    $('.popup').magnificPopup({
      type: 'inline',
      preloader: false,
      closeOnContentClick: false,
      fixedContentPos: true,
      mainClass: 'mfp-zoom-in',

      callbacks: {
        open: function () {

        },
      }
    });

    //

    svg4everybody();


    //table

    if ($('table.responsive').length > 0) {
      $('table.responsive').ngResponsiveTables();
    }

    //select styler

    $('select').styler();
 
    //datepicker

    // $( ".datepicker" ).datepicker();

    // $("#weeklyDatePicker").datetimepicker({
    //   format: 'DD-MM-YYYY'
    // });

    // //Get the value of Start and End of Week
    // $('#weeklyDatePicker').on('dp.change', function (e) {
    //     var value = $("#weeklyDatePicker").val();
    //     var firstDate = moment(value, "DD-MM-YYYY").day(0).format("DD-MM-YYYY");
    //     var lastDate =  moment(value, "DD-MM-YYYY").day(6).format("DD-MM-YYYY");
    //     $("#weeklyDatePicker").val(firstDate + " - " + lastDate);
    // });

    //tabs

    $('.tabs__wrap').each(function () {
      $(this).find('.tab').each(function (i) {
        $(this).parents('.tabs__wrap').find('.tab_content').children().not(':first').hide();
        $(this).click(function () {
          $(this).addClass('active').siblings().removeClass('active')
          $(this).parents('.tabs__wrap').find('.tab_content').children().eq(i).fadeIn(0).siblings('.tab_item').hide();

          // $(".nicescroll-box").getNiceScroll().resize();
        });
      });
    });

    //tabs
    $('[data-tabs-btn]').click(function () {
      let tabsName = $(this).parent().attr('data-tabs-btns');
      let tabNo = $(this).attr('data-tabs-btn');
      let tabsWrapper = $('[data-tabs-wrapper=' + tabsName + ']');

      $(this).siblings().removeClass('active');
      $(this).addClass('active');

      tabsWrapper.children().each(function (i, item) {
        $(item).hide();
        if ($(item).attr('data-tabs-item') === tabNo) {
          $(item).show();
        }
      });
    });

    function tabsInitialization() {
      let btns = $('[data-tabs-btns]');
      let wrapper = $('[data-tabs-wrapper]');

      $(wrapper).children().not(function () {
        if ($(this).attr('data-tabs-item') === '1') {
          return true;
        }
      }).hide();

      $(btns).children().not(function () {
        if ($(this).attr('data-tabs-btn') === '1') {
          return false;
        } else {
          return true;
        }
      }).addClass('active');
    }

    tabsInitialization();

    //accordion

    var Accordion = function (el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.accordion__head');
      // Evento
      links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
      var $el = e.data.el,
        $this = $(this),
        $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('active');

      if ($('.nicescroll-box').length !== 0) {
        setTimeout(() => {
          $(".nicescroll-box").getNiceScroll().resize();
        }, 1000);
      }

      if (!e.data.multiple) {
        $el.find('.accordion__body').not($next).slideUp().parent().removeClass('active');
      };
    }

    var accordion = new Accordion($('.accordion'), false);

    //nicescroll

    $(".nicescroll-box").niceScroll(".wrap", {
      cursorcolor: "#092abb",
      cursorwidth: "0px",
      cursorborder: "0px solid #fff",
      zindex: 20,
      emulatetouch: true,
      autohidemode: false,
      cursorborderradius: "0px",
      railalign: 'right',
    });

    $(window).on('resize', function () {
      setTimeout(() => {
        $(".nicescroll-box").getNiceScroll().resize();
      }, 1000);
    })




    // aos

    AOS.init(
      {
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      }
    );

    setTimeout(AOS.refreshHard, 1000);

    //clipboard

    var affil1 = new ClipboardJS('#affil');
    var banners = new ClipboardJS('.cab-banners__copy');

    function affiliatelink(id) {
      id.on('success', function (e) {
        // swal({
        //   title: "Your referral link copied!",
        //   text: "You can paste text that has been copied by pressing Ctrl + V. The text that was copied last will be pasted.",
        //   type: "success",
        //   showCancelButton: false,
        //   confirmButtonClass: "btn-success",
        //   confirmButtonText: "OK!",
        //   closeOnConfirm: false,
        //   closeOnCancel: false
        // });

        // Lobibox.notify('success', {
        //   title: true,
        //   size: 'normal',
        //   icon: false,
        //   sound: false,
        //   iconSource: "bootstrap",
        //   msg: 'Your referral link copied!'
        // });

        $('.copy-success').fadeIn();
        $('.copy-success').delay(3000).fadeOut();
      });
    }

    affiliatelink(affil1);
    affiliatelink(banners);


    var mp3 = new Audio();
    // mp3.src = 'assets/img/music.mp3';
    var mp3 = new Audio();

    try {
      mp3.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    } catch (e) {
      console.error("Audio file could not be loaded", e);
    }




    function togglePlay() {
      return mp3.paused ? mp3.play() : mp3.pause();
    };

    $('.header-sound').on('click', function () {
      togglePlay()
      mp3.loop = true;
      $(this).toggleClass('active');

      if (mp3.paused) {
        $('.header-sound__anim div').remove()
      } else {
        for (let i = 0; i < 10; i++) {

          const left = (i * 2) + 1;
          const anim = Math.floor(Math.random() * 75 + 400);
          const height = Math.floor(Math.random() * 25 + 3);

          document.querySelector('.header-sound__anim').innerHTML += `<div class="bar" style="left:${left}px;animation-duration:${anim}ms;height:${height}px"></div>`;//`<div class="bar" style="left:${left}px">Hello</div>`;
        }
      }


    })


    setInterval(function () {
      var date = moment(new Date());
      date = date.tz('Europe/London').format('HH:mm:ss');

      var currentDay = moment(new Date());
      currentDay = currentDay.tz('Europe/London').format('DD MMM YYYY');

      $('.header-time p').html(date)
      $('.header-time span').html(currentDay)
    }, 1000)

    if ($('.refs-scene').length !== 0) {
      let refsHead = $('.refs-scene__item-anim_1 div');
      let refsLogo = $('.refs-scene__item-anim_2 div');
      setInterval(function () {
        refsHead.removeAttr('style').addClass('animate__animated animate__bounceInRight');

        setTimeout(function () {
          refsHead.removeClass('animate__animated animate__bounceInRight').fadeOut();
        }, 5000)
      }, 6000)

      setInterval(function () {
        refsLogo.removeAttr('style').addClass('animate__animated animate__bounceInLeft');

        setTimeout(function () {
          refsLogo.removeClass('animate__animated animate__bounceInLeft').fadeOut();
        }, 5000)
      }, 6000)
    }




    // if ($('#smoke').length !== 0) {
    //   var canvas = document.getElementById('smoke')
    //   var ctx = canvas.getContext('2d')
    //   canvas.width = innerWidth
    //   canvas.height = innerHeight

    //   var party = Smokemachine(ctx, [255, 255, 255])
    //   party.start() // start animating
    //   party.setPreDrawCallback(function (dt) {
    //     party.addSmoke(innerWidth / 2, innerHeight, .3)
    //     canvas.width = innerWidth
    //     canvas.height = innerHeight
    //   })
    // }

    // sliders

    var startSlider = new Swiper('.start-slider .swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'vertical',
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: '.start-slider__nav .swiper-button-next',
        prevEl: '.start-slider__nav .swiper-button-prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 3
        }
      }
    });

    var newsThumbsSlider = new Swiper('.news-thumbs .swiper-container', {
      speed: 400,
      spaceBetween: 25,
      slidesPerView: 1,
      loop: false,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      //simulateTouch: false,
      // slideToClickedSlide: true,
      // autoplay: {
      //   delay: 3000,
      // },

      breakpoints: {
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
      }
    });

    var newsContentSlider = new Swiper('.news-content .swiper-container', {
      speed: 400,
      slidesPerView: 1,
      simulateTouch: false,
      loop: false,
      effect: 'fade',
      navigation: {
        nextEl: '.news-nav .swiper-button-next',
        prevEl: '.news-nav .swiper-button-prev',
      },
      pagination: {
        el: '.news-nav .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      fadeEffect: {
        crossFade: true
      },
      thumbs: {
        swiper: newsThumbsSlider,
        autoScrollOffset: 1
      }
    });

    // parallax

    if ($('#header-scene').length !== 0) {
      var scene = document.getElementById('header-scene');
      var parallaxInstance = new Parallax(scene);
    }
    if ($('#invest-scene').length !== 0) {
      var scene = document.getElementById('invest-scene');
      var parallaxInstance = new Parallax(scene);
    }
    if ($('#refs-scene').length !== 0) {
      var scene = document.getElementById('refs-scene');
      var parallaxInstance = new Parallax(scene, {
        limitY: 1
      });
    }

    //menu fix mobile

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    // setTimeout(() => {
    //   $('.marquee').marquee({
    //     //speed in milliseconds of the marquee
    //     duration: 8000,
    //     //gap in pixels between the tickers
    //     gap: 0,
    //     //time in milliseconds before the marquee will start animating
    //     delayBeforeStart: 0,
    //     //'left' or 'right'
    //     direction: 'left',
    //     //true or false - should the marquee be duplicated to show an effect of continues flow
    //     duplicated: true
    //   });
    // }, 1000);

    //cabinet-Settings

    // $('.cabinet-table__settings-btn').on('click', function(e){
    //   e.preventDefault();



    //   $(this).siblings('.cabinet-table__settings-hide').fadeIn(300);
    //   $(this).parent().addClass('active');
    //   let trueH = ($(document).outerHeight(true) - $(this).siblings('.cabinet-table__settings-hide').offset().top - $(this).siblings('.cabinet-table__settings-hide').outerHeight(true));

    //   if(trueH <= 0){
    //     $(this).siblings('.cabinet-table__settings-hide').addClass('top');
    //   }
    // });

    // $(document).mouseup(function (e){ 
    //   var block = $(".cabinet-table__settings.active .cabinet-table__settings-hide"); 
    //   if (!block.is(e.target) 
    //       && block.has(e.target).length === 0) { 
    //       block.hide(); 

    //       block.parent().removeClass('active');

    //       if( block.hasClass('top')){
    //         block.removeClass('top');
    //       }
    //   }
    // });


  })();



}










