
const dragElement = document.getElementById('drag-element');

let isDragging = false;
let initialX;
let offsetX;

dragElement.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    initialX = e.clientX;
    offsetX = initialX + dragElement.getBoundingClientRect().left;
    dragElement.classList.add('grabbing');
});

document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (isDragging) {
        dragElement.style.transform = `translateX(${e.clientX - initialX}px)`;
        document.addEventListener('mouseup', () => {
            isDragging = false;
            dragElement.classList.remove('grabbing');
        });
    }
});

