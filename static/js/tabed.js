$(document).ready(function () {
    $('#app').load('/inicio');
    $('#str-s').click(function (e) { 
        $('#app').load('/inicio');
    });
    $('#new-s').click(function (e) { 
        $('#app').load('/buscar');
    });
    $('#rec-s').click(function (e) { 
        $('#app').load('/recientes');
    });
    $('#pop-s').click(function (e) { 
        $('#app').load('/populares');
    });
    $('#ldc-s').click(function (e) { 
        $('#app').load('/lista');
    });
    
});