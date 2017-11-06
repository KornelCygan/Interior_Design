document.addEventListener('DOMContentLoaded', function(){
    console.log('nav-bar-button.js loaded');

    var navBar = document.querySelector('.nav-bar');
    var navBarButton = document.querySelector('.nav-bar-button');
    //console.log(navBarButton);

    navBarButton.addEventListener('click', function(){
        this.classList.toggle('active-nav-bar-button');
        navBar.classList.toggle('nav-bar-shown');
    })

    var mql768px = window.matchMedia('(min-width: 768px)');

    function hideNavbar(event){
        if(event.matches){
            console.log('zmiana stanu');
            if(navBar.className.indexOf('nav-bar-shown')){
                navBar.classList.remove('nav-bar-shown');
                navBarButton.classList.remove('active-nav-bar-button');
            }
        } else {
            console.log('zmiana stanu 2');
            if(navBar.className.indexOf('nav-bar-shown')){
                navBar.classList.remove('nav-bar-shown');
                navBarButton.classList.remove('active-nav-bar-button');
            }
        }
    }

    mql768px.addListener(hideNavbar);


})