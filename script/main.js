/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
        nav.classList.toggle('ham');
    toggle.classList.toggle('click');
    })
 }
 const mobileElement = document.querySelector('.mobile');
const hamMenu = document.querySelector(".links-mobile");
mobileElement.addEventListener('click', () => {
    mobileElement.classList.toggle('ham');
    hamMenu.classList.toggle('click');
  });
 
 showMenu('nav-toggle','nav-menu')

 window.onscroll = function() {
    let navbar = document.getElementById("navbarFun");
    let bg= document.querySelector(".bg-img");
    if (window.pageYOffset > 100) { 
        navbar.classList.add("show");
        bg.classList.add("opacity")

    } else {
        navbar.classList.remove("show");
        bg.classList.remove("opacity");
    }
    
};