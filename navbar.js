// Function to load navbar HTML
function loadNavbar() {
    const navbarContainer = document.querySelector('#navbar-container');
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
}

// Expose the function globally
window.loadNavbar = loadNavbar;