// Theme Toggle (Always Dark Mode for This Version)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme() {
    // Since we're using a premium dark theme, we'll keep it dark
    body.classList.remove('light-mode');
}

themeToggle.addEventListener('change', setTheme);
setTheme();

// Bottom Sheet Functionality
let isDragging = false;
let startY;
let currentY;

function openBottomSheet(id) {
    const sheet = document.getElementById('bottom-sheet');
    const sheetTitle = document.getElementById('sheet-title');
    const sheetImage = document.getElementById('sheet-image');
    const sheetContent = document.getElementById('sheet-content');
    const content = document.getElementById(`${id}-content`);

    sheetTitle.textContent = content.querySelector('h2').textContent;
    sheetImage.src = document.querySelector(`[alt="${id.replace('item', 'Item ').replace('blog', 'Blog ')}"]`).src;
    sheetContent.innerHTML = content.innerHTML.replace('<h2>' + sheetTitle.textContent + '</h2>', '');
    sheet.classList.remove('hide');
    sheet.classList.add('show');
    sheet.classList.add('haptic-feedback');
}

function closeBottomSheet() {
    const sheet = document.getElementById('bottom-sheet');
    sheet.classList.remove('show');
    sheet.classList.add('hide');
    sheet.classList.add('haptic-feedback');
}

// Draggable Bottom Sheet
const sheet = document.getElementById('bottom-sheet');
sheet.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
});

sheet.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    if (deltaY > 0) {
        sheet.style.transform = `translateY(${deltaY}px)`;
    }
});

sheet.addEventListener('touchend', () => {
    isDragging = false;
    if (currentY - startY > 100) {
        closeBottomSheet();
    } else {
        sheet.style.transform = 'translateY(0)';
    }
});

// Sidebar Toggle
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
    sidebar.classList.add('haptic-feedback');
}

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
});

// Fade-in Animation on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.blog-card, .store-card, .pricing-card').forEach(card => {
    observer.observe(card);
});

// Seamless Page Transitions (Slide-in Effect)
document.querySelectorAll('a[href^="index.html"], a[href^="blogs.html"], a[href^="store.html"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        document.body.style.transition = 'transform 0.5s ease';
        document.body.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

window.addEventListener('load', () => {
    document.body.style.transition = 'transform 0.5s ease';
    document.body.style.transform = 'translateX(0)';
});
