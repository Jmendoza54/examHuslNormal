$(function() {
    $('.icon-search .icon').on('click', function(){
        $('.search').animate({
            top: "90px"
        }, 700);
    });

    $('.search .close-search').on('click', function(){
        $('.search').animate({
            top: "-200px"
        }, 700);
    });

    $('.menu-activador a').on('click', function(){
        if($(this).hasClass('menu-abierto')){
            $('.nav-menu').addClass('menu-mob-show');
        }else{
            $('.nav-menu').removeClass('menu-mob-show');
        }
    });

    $('.has-dropdown a').on('click', function(){
        if($(this).hasClass('menu-mob-show')){
            $('.submenu').removeClass('menu-mob-show');
        }else{
            $('.submenu').addClass('menu-mob-show');
        }
    });

    $('.close-submenu').on('click', function(){
        $('.submenu').removeClass('menu-mob-show');
        console.log('CERRADO')
    });
});

(function () {

    const menu = document.querySelector('.menu-activador a');

    menu.addEventListener('click', function (event) {
        event.preventDefault();
        this.classList.toggle('menu-abierto');
    })

}());