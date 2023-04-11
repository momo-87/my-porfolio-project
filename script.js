    let openMobileMenu = document.querySelector('#openMobileMenu');
    let menuList = document.querySelector('#navMenu')
    let closeMobileMenu = document.querySelector('#closeMobileMenu');
    
    openMobileMenu.addEventListener('click', function(){
            menuList.classList.add('mobileMenu');
            closeMobileMenu.classList.add('closeMobileMenu');
    })

    closeMobileMenu.addEventListener('click', function() {
            menuList.classList.remove('mobileMenu');
            closeMobileMenu.classList.remove('closeMobileMenu')
    });

    let navMenuLink = document.querySelectorAll('.navMenuLink');
    for(let i = 0; i < navMenuLink.length; i++){
        navMenuLink[i].addEventListener('click', function(){
                menuList.classList.remove('mobileMenu');
                closeMobileMenu.classList.remove('closeMobileMenu');
        }) 
    }