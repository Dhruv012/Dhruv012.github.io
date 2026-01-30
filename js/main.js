/*
 * Main JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Accessibility
            const isExpanded = navLinks.classList.contains('active');
            mobileBtn.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Highlight active page in navigation
    const currentPath = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-links a');

    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPath.split('/').pop() ||
            (currentPath.endsWith('/') && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
    });
    // Video Modal Logic
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && modalVideo && closeBtn) {
        // Close modal on 'X' click
        closeBtn.addEventListener('click', closeVideoModal);

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeVideoModal();
            }
        });

        // Close on Escape key
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                closeVideoModal();
            }
        });
    }
});

function openVideoModal(videoPath) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    if (modal && modalVideo) {
        modalVideo.src = videoPath;
        modal.style.display = 'flex';
        modalVideo.play();
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    if (modal && modalVideo) {
        modal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
        modalVideo.src = ""; // Clear source
    }
}
