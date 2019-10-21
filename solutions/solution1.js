$( document ).ready(function() {
    var items = [];
    $.each(window.iceCreamFlavors, function (i, item) {
        items.push('<li class="ice-cream-flavor">' + item + '</li>');
    });
    $('ul.ice-cream-list').append(items.join(''));
});