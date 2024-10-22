// script.js

let currentIndex = 0;

function moveCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.team-member');
    const itemWidth = items[0].getBoundingClientRect().width;
    const totalItems = items.length;
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    
    const newTransformValue = -currentIndex * itemWidth;
    carouselTrack.style.transform = `translateX(${newTransformValue}px)`;
}
