$(document).ready(function(){

  $('#background').mousedown(function(){return false});

	$('.main-menu__button-1, .main-menu__dropdown-menu-1').hover(function(){
		$('.main-menu__dropdown-menu-1').toggle();
	});
	$('.main-menu__button-2, .main-menu__dropdown-menu-2').hover(function(){
		$('.main-menu__dropdown-menu-2').toggle();
	});
	$('.main-menu__button-3, .main-menu__dropdown-menu-3').hover(function(){
		$('.main-menu__dropdown-menu-3').toggle();
	});
	$('.main-menu__button-4, .main-menu__dropdown-menu-4').hover(function(){
		$('.main-menu__dropdown-menu-4').toggle();
  });


  var isRunning=false;

  $('.main-carousel__arrow-right').click(function(){
    if (isRunning == false){
      isRunning = true;
      var currentImg = $('.main-carousel__img-box--visible');
      var nextImg = currentImg.next();
      if(nextImg.length == 0){
        nextImg = $('.main-carousel__img-box').first();
      };
      currentImg.animate({left:'-=980px'},500,function(){
        currentImg.removeClass('main-carousel__img-box--visible').addClass('main-carousel__img-box--hidden').css('left','980px');
      });
      nextImg.animate({left:'-=980px'},500).removeClass('main-carousel__img-box--hidden').addClass('main-carousel__img-box--visible');
      setTimeout(function(){isRunning = false;},500);
   };
    });

  $('.main-carousel__arrow-left').click(function(){
    if (isRunning == false){
      isRunning = true;
    var currentImg = $('.main-carousel__img-box--visible');
    var prevImg = currentImg.prev();
    if(prevImg.length == 0){
      prevImg = $('.main-carousel__img-box').last();
    }
    currentImg.animate({left:'+=980px'},500,function(){
      currentImg.removeClass('main-carousel__img-box--visible');
      currentImg.addClass('main-carousel__img-box--hidden');
     // currentImg.css('left','980px');
    });
    prevImg.css('left','-980px');
    prevImg.animate({left:'+=980px'},500).removeClass('main-carousel__img-box--hidden').addClass('main-carousel__img-box--visible');
    setTimeout(function(){isRunning = false;},500);
    };
    });

    var mallsOnRight = $('.mall-carousel__mall').length - 4;
    var mallsOnLeft = 0;


    $('.mall-carousel__arrow-right').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (mallsOnRight > 4){
          $('.mall-carousel__malls-container').animate({left:'-=960px'},700);
          mallsOnRight -= 4;
          mallsOnLeft +=4;
          $('.mall-carousel__arrow-left').removeClass('mall-carousel__arrow--hidden');
        }
        else{
          $('.mall-carousel__malls-container').animate({left:'-='+mallsOnRight*240+'px'},700);
          mallsOnLeft += mallsOnRight;
          mallsOnRight = 0;
          $('.mall-carousel__arrow-left').removeClass('mall-carousel__arrow--hidden');
          $('.mall-carousel__arrow-right').addClass('mall-carousel__arrow--hidden');
        }
        setTimeout(function(){isRunning = false;},700);
      };
    });
    $('.mall-carousel__arrow-left').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (mallsOnLeft > 4){
          $('.mall-carousel__malls-container').animate({left:'+=960px'},700);
          mallsOnLeft -= 4;
          mallsOnRight +=4;
          $('.mall-carousel__arrow-right').removeClass('mall-carousel__arrow--hidden');
        }
        else{
          $('.mall-carousel__malls-container').animate({left:'+='+mallsOnLeft*240+'px'},700);
          mallsOnRight += mallsOnLeft;
          mallsOnLeft = 0;
          $('.mall-carousel__arrow-right').removeClass('mall-carousel__arrow--hidden');
          $('.mall-carousel__arrow-left').addClass('mall-carousel__arrow--hidden');
        }

        setTimeout(function(){isRunning = false;},700);
      };
    });

    var photosOnRight = $('.content__photo-carousel__photos-container__photo').length - 5;
    var photosOnLeft = 0;

    $('.content__photo-carousel__arrow-right').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (photosOnRight > 5){
          $('.content__photo-carousel__photos-container').animate({left:'-=860px'},700);
          photosOnRight -= 5;
          photosOnLeft +=5;
          $('.content__photo-carousel__arrow-left').removeClass('content__photo-carousel__arrow--hidden');
        }
        else {

          $('.content__photo-carousel__photos-container').animate({"left":'-=' + photosOnRight*172 + 'px'},700);
          photosOnLeft += photosOnRight;
          photosOnRight = 0;
          $('.content__photo-carousel__arrow-left').removeClass('content__photo-carousel__arrow--hidden');
          $('.content__photo-carousel__arrow-right').addClass('content__photo-carousel__arrow--hidden');
        }
        setTimeout(function(){isRunning = false;},700);
      };
    });
    $('.content__photo-carousel__arrow-left').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (photosOnLeft > 5){
          $('.content__photo-carousel__photos-container').animate({left:'+=860px'},700);
          photosOnLeft -= 5;
          photosOnRight +=5;
          $('.content__photo-carousel__arrow-right').removeClass('content__photo-carousel__arrow--hidden');
        }
        else{
          $('.content__photo-carousel__photos-container').animate({left:'+='+photosOnLeft*172+'px'},700);
          photosOnRight += photosOnLeft;
          photosOnLeft = 0;
          $('.content__photo-carousel__arrow-right').removeClass('content__photo-carousel__arrow--hidden');
          $('.content__photo-carousel__arrow-left').addClass('content__photo-carousel__arrow--hidden');
        }

        setTimeout(function(){isRunning = false;},700);
      };
    });

    var monthsBelow = 0;
    var monthsAbove = $('.calendar__month').length - 3;

    $('.calendar__arrow-up').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (monthsAbove > 3){
          $('.calendar__months').animate({bottom:'-=672px'},700);
          monthsAbove -= 3;
          monthsBelow +=3;
          $('.calendar__arrow-down').removeClass('calendar__arrow--hidden');
        }
        else {
          $('.calendar__months').animate({bottom:'-=' + monthsAbove*224 + 'px'},700);
          monthsBelow += monthsAbove;
          monthsAbove = 0;
          $('.calendar__arrow-down').removeClass('calendar__arrow--hidden');
          $('.calendar__arrow-up').addClass('calendar__arrow--hidden');
        }
        setTimeout(function(){isRunning = false;},700);
      };
    });
    $('.calendar__arrow-down').click(function(){
      if (isRunning == false){
        isRunning = true;
        if (monthsBelow > 3){
          $('.calendar__months').animate({bottom:'+=672px'},700);
          monthsBelow -= 3;
          monthsAbove +=3;
          $('.calendar__arrow-up').removeClass('calendar__arrow--hidden');
        }
        else{
          $('.calendar__months').animate({bottom:'+='+monthsBelow*224+'px'},700);
          monthsAbove += monthsBelow;
          monthsBelow = 0;
          $('.calendar__arrow-up').removeClass('calendar__arrow--hidden');
          $('.calendar__arrow-down').addClass('calendar__arrow--hidden');
        }

        setTimeout(function(){isRunning = false;},700);
      };
    });

    ymaps.ready(init);
          var myMap,
              myPlacemark;

          function init(){
              myMap = new ymaps.Map("map", {

                  center: [55.452082,37.763273],
                  zoom: 15
              });

              myPlacemark = new ymaps.Placemark([55.452082,37.763273], {
                balloonContent: 'Каширское ш., 3А, Домодедово, Московская обл.'        }, {preset: 'islands#blueDotIcon'
              });

              myMap.geoObjects.add(myPlacemark);
          }

document.getElementById('r-kaluga').onmouseover = function(){
  document.getElementById('r-kaluga-info').style.opacity="1";}
document.getElementById('r-kaluga').onmouseout = function(){
  document.getElementById('r-kaluga-info').style.opacity="0";}
document.getElementById('r-moskva').onmouseover = function(){
  document.getElementById('r-moskva-info').style.opacity="1";}
document.getElementById('r-moskva').onmouseout = function(){
  document.getElementById('r-moskva-info').style.opacity="0";}
document.getElementById('r-domodedovo').onmouseover = function(){
  document.getElementById('r-domodedovo-info').style.opacity="1";}
document.getElementById('r-domodedovo').onmouseout = function(){
  document.getElementById('r-domodedovo-info').style.opacity="0";}
document.getElementById('r-tambov').onmouseover = function(){
  document.getElementById('r-tambov-info').style.opacity="1";}
document.getElementById('r-tambov').onmouseout = function(){
  document.getElementById('r-tambov-info').style.opacity="0";}
document.getElementById('r-vladikavkaz').onmouseover = function(){
  document.getElementById('r-vladikavkaz-info').style.opacity="1";}
document.getElementById('r-vladikavkaz').onmouseout = function(){
  document.getElementById('r-vladikavkaz-info').style.opacity="0";}
document.getElementById('r-krasnoyarsk').onmouseover = function(){
  document.getElementById('r-krasnoyarsk-info').style.opacity="1";}
document.getElementById('r-krasnoyarsk').onmouseout = function(){
  document.getElementById('r-krasnoyarsk-info').style.opacity="0";}
document.getElementById('r-novgorod').onmouseover = function(){
  document.getElementById('r-novgorod-info').style.opacity="1";}
document.getElementById('r-novgorod').onmouseout = function(){
  document.getElementById('r-novgorod-info').style.opacity="0";}

});
