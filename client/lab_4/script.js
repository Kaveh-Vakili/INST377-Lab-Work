let slidePosition=0;
const slides=document.getElementsByClassName('carousel_item');
const totalSlides=slides.length;

document.
getElementById('carousel_button--next')
.addEventListener("click",function(){
    moveToNextSlide();
});

document.
getElementById('carousel_button--prev')
.addEventListener("click",function(){
    moveToPrevSlide();
});

function moveToNextSlide(){

if(slidePosition===totalSlides-1){

    slidePosition=0;
}

}

function moveToPrevSlide(){

    console.log('hello prev')
}