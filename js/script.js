$(document).ready(function(){
    //dimmer
    $('.special.cards.image').dimmer({
        on:'hover'
    })
    //sidebar
    $('.ui.sidebar')
        .sidebar('attach events','.toc.item');
    
    //modal
    $('$card1').click(function(){
        $('.ui.modal .modal1').modal('toggle');
    })

});
