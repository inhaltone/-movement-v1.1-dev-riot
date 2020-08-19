
$(document).ready(function(){
  //MENU ICON => EVENT LISTENERS
$('#mega-menu-collapse').on('hidden.bs.collapse', function () {
    $('#menuIcon .menu-open').removeClass('d-none')
    $('#menuIcon .menu-close').addClass('d-none')
 console.log('hidden')
  })

$('#mega-menu-collapse').on('shown.bs.collapse', function () {
    $('#menuIcon .menu-close').removeClass('d-none')
    $('#menuIcon .menu-open').addClass('d-none')
    console.log('shown')
  })

  var owl = $('.owl-carousel');

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:false,
    margin:0,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$( ".right-arrow-owl" ).click(function() {
    owl.trigger('next.owl.carousel');
});
$( ".left-arrow-owl" ).click(function() {
  owl.trigger('prev.owl.carousel');
});

owl.on('mousewheel', '.owl-stage', function (e) {
  if (e.deltaY>0) {
      owl.trigger('next.owl');
  } else {
      owl.trigger('prev.owl');
  }
  e.preventDefault();
});

});

