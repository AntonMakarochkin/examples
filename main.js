let door1 = document.querySelector(".door-1");
let door2 = document.querySelector(".door-2");
let btn = document.querySelector(".ide");
let imgGo = document.querySelector("img");



btn.addEventListener("mousemove", function(){
  door1.classList.add("door-1-drug");
  door2.classList.add("door-2-drug");

});
let popupfirst = document.querySelector("#popupfirst");
let div = document.createElement("div");
//---нажимаю на go
imgGo.addEventListener("click", function() {
  door1.classList.remove("door-1-drug");
  door2.classList.remove("door-2-drug");
  imgGo.classList.add("img-hover");


  setTimeout(function() {
    door1.classList.add("door-move");
    door2.classList.add("door-move");
  }, 1000);


  setTimeout(function() {
    popupfirst.style.opacity = 1;
    popupfirst.style.visibility = "visible";
  }, 4200);
 
});
//---нажимаю на go
let popupSecond = document.querySelector("#popupsecond");
let closebtn = document.querySelector("#btn");
closebtn.addEventListener("click", function() {
  popupfirst.style.opacity = 0;
  popupfirst.style.visibility = "hidden";
  setTimeout(() => {
    popupsecond.style.opacity = 1;
    popupsecond.style.visibility = "visible";
  }, 3000);
  door1.classList.add("door-move-2");
  door2.classList.add("door-move-2");
});

let myVideo = document.querySelector("#myVideo");
let closeBtnSecond = document.querySelector("#btn2");
closeBtnSecond.addEventListener("click", function() {
  popupsecond.style.opacity = 0;
  popupsecond.style.visibility = "hidden";
  door1.classList.add("door-move-3");
  door2.classList.add("door-move-3");
  setTimeout(function() {
    myVideo.play();
    myVideo.style.opacity = 1;
    myVideo.style.visibility = "visible";
  }, 3000);
  setTimeout(function() {
    window.location.reload()
    window.scrollTo(0, 0);
  }, 8000);
});

let refresh = document.querySelector(".refresh");

refresh.addEventListener("click", function() {
  window.location.reload()
  window.scrollTo(0, 0);
  
});



$(document).ready(function() {
  $("#btn2").click(function(eventBtnSecond){
    setTimeout(function(){
      $('html, body').animate({scrollTop: '+=500px'}, 1100);  
      }, 100);
  });
});

$(document).ready(function() {
  $("#btn").click(function(eventBtn){
    setTimeout(function(){
      $('html, body').animate({scrollTop: '+=1400px'}, 2990);  
      });
  });
});

$(document).ready(function() {
  $("img").click(function(event){
    setTimeout(function(){
      $('html, body').animate({scrollTop: '+=1250px'}, 2950);  
      }, 1000);
  });
});


/* let popupModal23 = document.querySelector("#modal-popup-2");
let popupModalClose = document.querySelector("#modalClose-popup");

popupModalClose.addEventListener("click", function() {
  popupModal23.classList.remove("non-active");
 
})

console.log(popupModalClose); */

$('.swot').each(function() {
	let ths = $(this);
	ths.find('.tab-item').not(':first').hide();
	ths.find('.tabs').click(function() {
		ths.find('.tabs').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.tab-item').hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass('active');
});


let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function() {
document.body.classList.toggle('newbg');
});