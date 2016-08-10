var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var playing = false;
var slideTimes;
var time = 241;
var currentSlide = 0;

$(function(){
  $("[data-slide=0]").show();

  document.body.onkeyup = function(e){
    if(e.keyCode == LEFT_KEY){
      slideBack();
    } else if (e.keyCode == RIGHT_KEY){
      slideForward();
    }
  }
});

function slideForward() {
  $(`[data-slide=${currentSlide}]`).fadeOut("slow", () => {
    $(`[data-slide=${currentSlide}]`).fadeIn("slow");
  });

  currentSlide++;
}

function slideBack() {
  console.log("bbb")
  $(`[data-slide=${currentSlide}]`).fadeOut("slow", () => {
    $(`[data-slide=${currentSlide}]`).fadeIn("slow");
  });

  currentSlide--;
}
