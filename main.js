let slides = document.querySelectorAll(".slide")
let about=document.getElementById("about");
let counter = 0;
console.log(slides);
slides.forEach(function (slide, index)
 { 
    slide.style.left = `${index * 100}%`
 }
)

function slideImage(counter) {
    slides.forEach(function (slide)
     { 
        slide.style.transform = `translateX(${counter * 100+100}%)`
     }
    )
}
function gonext() {
    // console.log(slides);
    counter++;
    // alert();
    slideImage(counter)
}
function goprev() {
    counter--;
    // alert();
    slideImage(counter)
}