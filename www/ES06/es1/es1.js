// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button.color-change');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'red';
            button.style.color = 'yellow';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'blue';
            button.style.color = 'white';
        });
    });
});
