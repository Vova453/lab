const img = document.querySelector(".slider__img");
const dots = document.querySelectorAll(".slider__dot");
const imgArray =["1.jpg","2.jpg","3.jpg"];

let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextSlide(direction) {
    currentIndex += direction;
    if(currentIndex >= imgArray.length) {
        currentIndex = 0;
    }else if(currentIndex < 0) {
        currentIndex = imgArray.length - 1;
    }
    
    slide(currentIndex);
}
function slide(index) {
    img.style.display = 'none';
    setTimeout(() =>{
        img.style.display = 'block';
    }, 10);
    img.src = imgArray[index];
    updateDots(index);
}
function updateDots(index){
    for(let dot of dots){
        dot.classList.remove('active');
    }
   dots[index].classList.add('active');
}


