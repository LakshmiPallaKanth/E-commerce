const container = document.querySelector('.image-container');

container.addEventListener('mouseover', () => {
    container.style.animationPlayState = 'running';
});

container.addEventListener('mouseout', () => {
    container.style.animationPlayState = 'running';
});
