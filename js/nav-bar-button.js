document.addEventListener('DOMContentLoaded', function(){
    console.log('nav-bar-button.js loaded');

    var navBar = document.querySelector('.nav-bar');
    var navBarButton = document.querySelector('.nav-bar-button');
    //console.log(navBarButton);

    navBarButton.addEventListener('click', function(){
        this.classList.toggle('active-nav-bar-button');
        navBar.classList.toggle('nav-bar-shown');

    })
})