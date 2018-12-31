$(document).ready(function() {
$('.slider').fractionSlider({
		'fullWidth': 			false,
		'controls': 			false, 
		'pager': 				false,
		'responsive': 			true,
		'dimensions': 			"747,363",
		'slideTransitionSpeed' : 600,
		'timeout' : 7000,

	});
//$('#yapis').affix({
 // offset: {
 //   top: 89,
 //   bottom: function () {
 //     return (this.bottom = $('.footer').outerHeight(true))
  //  }
 // }
//});

$(window).scroll(function(){//sayfadaki scroll oynarsa

});

$("[id=sSolalt]").hide();

$("[id=sSola]").mouseover(function(){
	$(this).children().css("color","#95979c");
});
$("[id=sSola]").mouseout(function(){
	$(this).children().css("color","#616367");
});
$("[id=sSola_]").mouseover(function(){
$(this).children().show();
});
$("[id=sSola_]").mouseout(function(){
$("[id=sSolalt]").hide();
});
//var sliderGenislik = $('.slide').css("width");
// $("[id=sSag]").css("width",sliderGenislik);




});