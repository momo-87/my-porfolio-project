    let openMobileMenu = document.querySelector('#openMobileMenu');
    openMobileMenu.addEventListener('click', function(){
        let menuList = document.querySelector('#navMenu');
        if(window.innerWidth < 768){
            menuList.classList.toggle('mobileMenu');
            let closeMobileMenu = document.querySelector('#closeMobileMenu');
            closeMobileMenu.classList.toggle('closeMobileMenu');
        }
    })
