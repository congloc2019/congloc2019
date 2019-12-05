
$(document).ready(function() {
$('#slideshow .slide:eq(0)').css('display', 'block'); // Hien slide dau tien
var dot = $('#slideshow ul li.dot');
var slide = $('#slideshow .slide');
// Slide chay tu dong
//khai báo biến set (global)
var set;
//Hàm tự động chuyển slide
function auto() {
set = setInterval(next, 6000);
}
function stop() {
clearInterval(set); 
}
auto();
$('#slideshow').on({
mouseenter: function() {
return stop();
},
mouseleave: function() {
return auto();
}
});

function next() {
var currentSlide = $('#slideshow .slide-active');
var nextSlide = currentSlide.next();
var currentDot = $('#slideshow .dot-active');
var nextDot = currentDot.next();
if (nextSlide.length === 0) {
nextSlide = slide.first();
}
if (nextDot.length === 0) {
nextDot = dot.first();
}
currentSlide.fadeOut(1000).removeClass('slide-active');
nextSlide.fadeIn(1000).addClass('slide-active');
currentDot.removeClass('dot-active');
nextDot.addClass('dot-active');
}
 
$('.next').click(function() {
next();
});

$('.prev').click(function() {
var currentSlide = $('#slideshow .slide-active');
var prevSlide = currentSlide.prev();
var currentDot = $('#slideshow .dot-active');
var prevDot = currentDot.prev();
if (prevSlide.length === 0) {
prevSlide = slide.last();
}
if (prevDot.length === 0) {
prevDot = dot.last();
}
currentSlide.fadeOut(1000).removeClass('slide-active');
prevSlide.fadeIn(1000).addClass('slide-active');
currentDot.removeClass('dot-active');
prevDot.addClass('dot-active');
});

function call(n) {
$('#slideshow ul li:eq(' + n + ')').click(function() {
dot.removeClass('dot-active');
$(this).addClass('dot-active');
slide.fadeOut(1000).removeClass('slide-active');
$('#slideshow .slide:eq(' + n + ')').fadeIn(1000).addClass('slide-active');
});
}
for (var i = 0; i < dot.length; i++) {
call(i);
}
});