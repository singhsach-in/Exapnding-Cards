var images = document.querySelectorAll(".images");
// for(var i=0; i<document.querySelectorAll(".images").length; i++){
    
//     document.addEventListener("click",function(e){
//         removeClass();
//     // activeElement.classList.remove("active");
//     e.classList.add("active");
// })
// }

images.forEach(image => {
    image.addEventListener("click",()=>{
        removeClass();
        image.classList.add("active");
    })
});

function removeClass() {
    images.forEach(image => {
        image.classList.remove("active");
    })
}