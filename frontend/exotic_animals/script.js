var $container = $("#container");

$container.on('mouseenter', 'img', function(e){
  // $container.find('figcaption').finish();
  $(this).next('figcaption').delay(2000).fadeIn();
});

$container.on('mouseleave', 'img', function(e){
  // $container.find('figcaption').finish();
  $(this).next('figcaption').stop(true).fadeOut(200);
});