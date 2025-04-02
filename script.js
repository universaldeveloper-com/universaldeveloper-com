// Modal Functionality
function openModal(blogId) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalContent = document.getElementById('modal-content');
    const blogContent = document.getElementById(`${blogId}-content`);

    modalTitle.textContent = blogContent.querySelector('h2').textContent;
    modalImage.src = document.querySelector(`.blog-card img[alt="${blogId.replace('blog', 'Blog ')}"]`).src;
    modalContent.innerHTML = blogContent.querySelector('p').textContent;

    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Fade-in Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card, .pricing-card').forEach(card => {
    observer.observe(card);
});

// Floating Action Button Click
document.getElementById('fab').addEventListener('click', () => {
    alert('Create a new blog post!');
    // You can add functionality to open a form or redirect to a new page
});
