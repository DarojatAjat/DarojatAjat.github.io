$(window).on("load",function(){
let slideIndex=$(".slide-active").index();
const slideLen=$(".slide").length;

function slideshow(){
	$(".slide").removeClass("active").eq(slideIndex).addClass("active");
	if(slideIndex == slideLen-1){
		slideIndex = 0;
	}
	else{
		slideIndex++;
	}
	setTimeout(slideshow,5000);
}
slideshow();



});
$(document).ready(function(){
    $('.preloader').hide();
	$(window).scroll(function(){
            if($(this).scrollTop() >100){
                $('.header').addClass("fixed");
            }else{
              $('.header').removeClass("fixed");
            }
	})
const wHeight= $(window).height();
 $(".galery-popup .gp-img").css("max-height", wHeight+"px");
 let index=0;
 const totalGalleryItems=$(".galery-item").length;
 $(".galery-item").click(function(e){
 	itemIndex=$(this).index();
 	$(".galery-popup").addClass("open");
 	$(".galery-popup .gp-img").hide();
 	gpSlideShow();
 })
 $(".gp-controls .next").click(function(){
 	if(itemIndex == totalGalleryItems-1){
     itemIndex=0;
 	}else{
 itemIndex++;
 	}
 	$(".galery-popup .gp-img").fadeOut(function(){
    gpSlideShow();
 	})
 })
 $(".gp-controls .prev").click(function(){
 	if(itemIndex === 0){
     itemIndex=totalGalleryItems-1;
 	}else{
 itemIndex--;
 	}
 	$(".galery-popup .gp-img").fadeOut(function(){
    gpSlideShow();
 	})
 })
 function gpSlideShow(){
 const imgSrc=$(".galery-item").eq(itemIndex).find("img").attr("data-large");
 $(".galery-popup .gp-img").fadeIn().attr("src",imgSrc);
 $(".gp-counter").text((itemIndex+1)+"/"+totalGalleryItems);
 }

 $(".gp-close").click(function(){
$(".galery-popup").removeClass("open");
 });
 $(".galery-popup").click(function(e){
 	if($(e.target).hasClass("open")){
 		console.log("true");
 	$(".galery-popup").removeClass("open");
 	}
 })
 $(".bxs-music").click(function(){
    if($(this).hasClass("pause")){
        $("#myaudio")[0].play();
    }else{
         $("#myaudio")[0].pause();
    }
    $(this).toggleClass("pause");
 })
})
