$(document).ready(function () {
    $('#bsq-i').load('/bsqA');

    $('#ing').click(function (e) { 
        $('#bsq-i').load('/bsqA');
    });
    $('#nre').click(function (e) { 
        $('#bsq-i').load('/bsqB');
    });

    $('.frs li a').click(function (e) { 
        $('.frs li a').removeClass('active text-dark');
        $(this).addClass('active text-dark'); 
    });

    
});