function scrollTrending(direction) {
    const container = document.querySelector('.trending-container');
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const scrollAmount = container.clientWidth * 0.5;

    if ((direction === -1 && container.scrollLeft > 0) || 
        (direction === 1 && container.scrollLeft < maxScrollLeft)) {
        container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
}


document.querySelector('.hero-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Thank you for signing up! You'll receive updates soon.");
});

document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.toggle-icon');
        
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        icon.textContent = answer.style.display === 'block' ? '−' : '+';
    });
});