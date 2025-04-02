// Smooth scrolling for the main content
document.querySelector('.main-content').addEventListener('scroll', function() {
    this.style.scrollBehavior = 'smooth';
});

// Add hover animation for buttons
document.querySelectorAll('.read-more, .download, .share, .see-all').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the blog post...');
        // You can add a redirect here, e.g., window.location.href = 'blog-post.html';
    });
});
