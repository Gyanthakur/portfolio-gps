var typed = new Typed(".text",{
    strings:["","Web Designer","Problem Solver","Frontend Developer","Backend Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// back to top button

// Get the button:
let mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}