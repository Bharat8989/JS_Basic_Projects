const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const icon = accordion.querySelector('.icon');
        const answer = accordion.querySelector('.answer');

        icon.classList.toggle('active');

        if (icon.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});
