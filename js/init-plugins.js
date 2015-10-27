
//If the user resizes there browser window we need to check the size and if it has gotten too small do not load the onepage_scroll.js
if($(window).height() > 400){
    $(".main").onepage_scroll({
        pagination: false
    });
}
$( window ).resize(function() {
    location.reload();
});

$('#slides').superslides({pagination : false});

$('.onepage-nav a').click(function(){
   var index = $(this).attr('href').split('_');
   $('#main').moveTo(index[1]); 
});

//                $('#whatwedo-nav a').click(function(){
//                   var index = $(this).attr('href').split('_');
//                   $('#slides').superslides('animate',index[1]); 
//                });
