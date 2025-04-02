document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the blog post...');
        // You can add a redirect here, e.g., window.location.href = 'blog-post.html';
    });
});
