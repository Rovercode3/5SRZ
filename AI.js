
// JavaScript to toggle the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var dropdownButton = document.querySelector('.dropbtn');
    var dropdownContent = document.querySelector('.dropdown-content');
    
    // Click event to toggle the dropdown menu
    dropdownButton.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
    });
    
    // Close the dropdown menu when clicking outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    }
});



