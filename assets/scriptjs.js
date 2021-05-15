$(document).ready(function(){
  $('.p-article').hide();
  $('.p-article:eq(0)').show();
  


});

$('.p-innermenu li').click(function(){
  $selector = $(this).attr('data-menu');
  $('.p-article').hide();
 
  $('#'+$selector).show();
});

