// Mobile Menu Toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';

    // Add simple animation logic here if needed, currently handled by CSS transitions if cleaner
    if (navMenu.style.display === 'flex') {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '70px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'rgba(15, 23, 42, 0.95)';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid rgba(255,255,255,0.1)';
    }
}

// Theme Toggle Placeholder
function toggleModernTheme() {
    console.log('Toggling theme...');
    const body = document.body;
    // Example: Toggle a 'light-mode' class
    // body.classList.toggle('light-mode');

    const icon = document.getElementById('themeModeIcon');
    if (icon) {
        icon.textContent = icon.textContent === '☀️' ? '🌙' : '☀️';
    }
}

// Download Placeholder
// Download Flow
function openDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function redirectToSteam() {
    window.open('https://store.steampowered.com/app/2564460/Banter', '_blank');
    closeDownloadModal();
}

function proceedDownload() {
    // Placeholder for actual download link
    alert('Starting download for BanterVR Plugin Manager...');
    // window.location.href = 'https://github.com/BanterVR/BanterVR-Plugin-Manager/releases/latest/download/Setup.exe'; 
    closeDownloadModal();
}

// Show Join Guide Info
function showJoinInfo() {
    const modal = document.getElementById('joinIdModal');
    modal.style.display = 'flex';
}

function closeJoinInfo() {
    const modal = document.getElementById('joinIdModal');
    modal.style.display = 'none';
}

// Close modal if clicked outside of content
window.onclick = function (event) {
    const joinModal = document.getElementById('joinIdModal');
    const downloadModal = document.getElementById('downloadModal');

    if (event.target == joinModal) {
        joinModal.style.display = "none";
    }
    if (event.target == downloadModal) {
        downloadModal.style.display = "none";
    }
}

// Cookie Consent Placeholders
function acceptCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'true');
}

function declineCookies() {
    document.getElementById('cookieConsent').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'false');
}

function showCookieSettings() {
    alert('Cookie settings are not available in this demo.');
}

// Check for cookie consent on load
window.addEventListener('load', () => {
    /* 
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieConsent').style.display = 'block'; // Make sure to add this ID to HTML if you want it visible
    }
    */

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                const navMenu = document.querySelector('.nav-menu');
                if (window.innerWidth <= 768 && navMenu.style.display === 'flex') {
                    toggleMobileMenu();
                }
            }
        });
    });
});

// Feature Details Toggle
function toggleFeature(button) {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.classList.toggle('active');

    // Update button text if needed, or just leave as 'View Details'
    /*
    const textSpan = button.querySelector('span');
    if (button.classList.contains('active')) {
        textSpan.textContent = 'Hide Details';
    } else {
        textSpan.textContent = 'View Details';
    }
    */
}
