document.addEventListener('DOMContentLoaded', function(){
    console.log('Nav-bar-button.js loaded');

    var navBarButton = document.querySelector('.nav-bar-button');
    console.log(navBarButton);

    navBarButton.addEventListener('click', function(){
        this.classList.toggle('active-nav-bar-button');

    });



})