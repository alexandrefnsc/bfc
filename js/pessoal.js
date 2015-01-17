//Meu código de JQuery Pessoal
$(document).ready(function(){

//--------------------------------------------------TUDO REFERENTE AO FAUX-MENU-----//
	$(window).scroll(function(){
		if($(this).scrollTop() > 321){
			$('#subtitle-logo').slideUp("slow");
		} else{
			$('#subtitle-logo').slideDown("slow");
		}
		return false;
   });
// ------------------------------------------------- BX SLIDER ----------//
	$('.bxslider').bxSlider({
		mode:'fade',
		controls: false,
		auto: true
	});
//--------------------------------------------------TUDO REFERENTE AO FAUX-MENU CLICK-----//
	$(".home").click(function(){
   		 $('body,html').animate({scrollTop: $("#slideshow").offset().top-321}, "slow");
   		 return false;
   });

	$(".cardapio").click(function(){
   		 $('body,html').animate({scrollTop: $("#cardapio").offset().top -246}, "slow");
   		 return false;
   });

   $(".seja-franqueado").click(function(){
   		 $('body,html').animate({scrollTop: $("#seja-franqueado").offset().top-246}, "slow");
   		 return false;
   });

   $(".quem-somos").click(function(){
   		 $('body,html').animate({scrollTop: $("#quem-somos").offset().top-246}, "slow");
   		 return false;
   });

   $(".trabalhe-conosco").click(function(){
   		 $('body,html').animate({scrollTop: $("#trabalhe-conosco").offset().top-246}, "slow");
   		 return false;
   });


   $(".contatos").click(function(){
   		 $('body,html').animate({scrollTop: $("#contatos").offset().top-246}, "slow");
   		 return false;
   });


});
