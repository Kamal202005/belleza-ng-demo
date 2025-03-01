document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById("popup");

    // Show popup after 2 seconds
    setTimeout(() => {
        popup.style.display = "flex";
    }, 2000);
});

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.querySelector(".popup");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.style.display = "block"; // Show the popup on page load (optional)
});
