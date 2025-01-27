document.getElementById('menu-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
        navbar.classList.remove('active');
    }
});



