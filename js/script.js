// ===========count down part start ==========
// Set the date we're counting down to
var countDownDate = new Date("june 14, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
// ===========count down part end ==========

// ============team part start ===========

$('.team_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow:'<i class="fa-solid fa-angle-left prevarrow"></i>',
  nextArrow:'<i class="fa-solid fa-angle-right nextarrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});
// ============team part end ===========
 // =========sticky menu part ========
 var main_menu = document.getElementById("main_menu");
 window.addEventListener("scroll",function(){
 main_menu.classList.toggle("sticky",window.scrollY > 100);
 })
 // =========sticky menu part ========

  // ========back to top part ======
  var back_to_top = document.querySelector(".back_to_top")

  window.addEventListener("scroll",function(){
  
    back_to_top.classList.toggle("bottom_to_top",window.scrollY > 150)
  })
  // ========back to top part ======
