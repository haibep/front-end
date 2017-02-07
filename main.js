/**
 * Created by Admin on 23/12/2016.
 */
var slideIndex = 0;
showSlides();
function showSlides() {
	// $('#button').on('click', function() {
	// 	$(this).next().slideToggle(400);
	// 	$(this).toggleClass('active');
	// 	$(this).toggleClass('highlighted');
	// });
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex> slides.length) {slideIndex = 1}
	slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides, 3000);

}
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.
// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.
// Set to nth slide
$('.carousel').carousel('set', 4);

$(document).ready(function(){
	$('.carousel').carousel();
});