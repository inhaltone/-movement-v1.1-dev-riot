
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

});