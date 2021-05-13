//Menu Show e Hide

$('.acolyte').click(function(){
    $('.menuLateral ul .subClassAcolyte').toggleClass('mostra');
});

$('.magician').click(function(){
    $('.menuLateral ul .subClassMagician').toggleClass('mostra');
});

$('.swordsman').click(function(){
    $('.menuLateral ul .subClassSwordsman').toggleClass('mostra');
});

$('.thief').click(function(){
    $('.menuLateral ul .subClassThief').toggleClass('mostra');
});

$('.merchant').click(function(){
    $('.menuLateral ul .subClassMerchant').toggleClass('mostra');
});

$('.archer').click(function(){
    $('.menuLateral ul .subClassArcher').toggleClass('mostra');
});

//Botão para abrir menu
$('.btnAbre').click(function(){
    $('.menuLateral').toggleClass('mostra')
});
//botão para fechar menu
$('.btnFecha').click(function(){
    $('.menuLateral').toggleClass('mostra')
});

//Abrir subgrupos
$('.acolyte').click(function(){
    $('.menuLateral ul .seta1').toggleClass('gira')
});

/* Versão Mouseover
$('.acolyte').mouseover(function(){
    $('.menuLateral ul .seta1').toggleClass('gira')
});
$('.acolyte').mouseout(function(){
    $('.menuLateral ul .seta1').toggleClass('gira')
});
*/

$('.magician').click(function(){
    $('.menuLateral ul .seta2').toggleClass('gira')
});

$('.swordsman').click(function(){
    $('.menuLateral ul .seta3').toggleClass('gira')
});


$('.thief').click(function(){
    $('.menuLateral ul .seta4').toggleClass('gira')
});

$('.merchant').click(function(){
    $('.menuLateral ul .seta5').toggleClass('gira')
});

$('.archer').click(function(){
    $('.menuLateral ul .seta6').toggleClass('gira')
});

const $menuLateral = $('.menuLateral');
$(document).mouseup(e =>{
    if(!$menuLateral.is(e.target)
        && $menuLateral.has(e.target).length ===0)
    {
        $menuLateral.removeClass('mostra');
    }
})