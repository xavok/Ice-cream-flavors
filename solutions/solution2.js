$( document ).ready(function() {
    $.each(window.iceCreamFlavors, function (i, item) {
        $('ul.ice-cream-list').append('<li class="ice-cream-flavor">' + item + '</li>');
    });
});