$( document ).ready(() => {
    window.iceCreamFlavors.forEach((i) => {
        $("ul.ice-cream-list").append('<li class="ice-cream-flavor">' + i + '</li>');
    });
});

