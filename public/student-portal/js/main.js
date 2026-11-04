AOS.init({
	once: true,
	disable: function() {
	  var maxWidth = 800;
	  return window.innerWidth < maxWidth;
	}
  });
	  
       
 $('.greenboardslider').slick({
	dots: true,
	infinite: true,
	// vertical: true,
	speed: 400,
	slidesToShow: 1 ,
	slidesToScroll:1,
	autoplay:true,
	autoplaySpeed: 9000,
	pauseOnHover: true,
	pauseOnFocus: true,
	rtl:true,
	
	});
	


$('.progslider').slick({
dots: false,
infinite: true,
// vertical: true,
speed: 400,
slidesToShow: 3 ,
slidesToScroll:3,
autoplay:false,
rtl:true,
responsive: [
	{
		breakpoint: 1920,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
		slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ]

});




$('.eventslider').slick({
dots: false,
infinite: true,
// vertical: true,
speed: 400,
slidesToShow: 1 ,
slidesToScroll:1,
autoplay:false,
rtl:true,

});


$('.newsslider').slick({
dots: false,
infinite: true,
// vertical: true,
speed: 400,
slidesToShow: 1 ,
slidesToScroll:1,
autoplay:false,
rtl:true,

});



$('.appsslider').slick({
dots: false,
infinite: true,
// vertical: true,
speed: 400,
slidesToShow: 3 ,
slidesToScroll:1,
autoplay:false,
rtl:true,
responsive: [
	{
		breakpoint: 1920,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  infinite: true,
		  dots: true
		}
	  },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 890,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]


});



$('.numbersContainer').slick({
	dots: false,
	infinite: true,
    // vertical: true,
	speed: 400,
	slidesToShow: 1 ,
	slidesToScroll:1,
	autoplay:false,
	rtl:true,
	
	});
