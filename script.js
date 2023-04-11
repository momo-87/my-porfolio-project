    let openMobileMenu = document.querySelector('#openMobileMenu');
    let menuList = document.querySelector('#navMenu')
    openMobileMenu.addEventListener('click', function(){
        let menuList = document.querySelector('#navMenu');
        if(window.innerWidth < 768){
            menuList.classList.toggle('mobileMenu');
            let closeMobileMenu = document.querySelector('#closeMobileMenu');
            closeMobileMenu.classList.toggle('closeMobileMenu');
        }
    })

    closeMobileMenu.addEventListener('click', function() {
        if(window.innerWidth < 768) {
            menuList.classList.remove('mobileMenu');
            closeMobileMenu.classList.remove('closeMobileMenu')
        }
    });