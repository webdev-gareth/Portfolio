const socialBtn = document.getElementById('social-btn').addEventListener("click", displayMenu);

function displayMenu() {
    let x = document.getElementById('social-menu');
    x.classList.toggle('social-hidden');
}
