
const dragElement = document.getElementById('drag-element');

let isDragging = false;
let initialX;
let offsetX;
let dragElementCenter = (dragElement.getBoundingClientRect().right - dragElement.getBoundingClientRect().left)/2;

dragElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    initialX = e.clientX;
    offsetX = initialX - dragElement.getBoundingClientRect().left;
    dragElement.classList.add('grabbing');
    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        dragElement.style.transform = `translateX(${e.clientX - dragElementCenter}px)`;
        document.addEventListener('mouseup', () => {
            isDragging = false;
            dragElement.classList.remove('grabbing');
        });
    });
});


