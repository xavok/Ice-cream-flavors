$(document).ready(function () {
    window.iceCreamFlavorsLi = [];
    window.iceCreamFlavors.forEach((i) => {
        var li = $('<li/>');
        window.iceCreamFlavorsLi.push({
            flavorInternal: i,
            flavorListener: function (val) {
            },
            set flavor(val) {
                this.flavorInternal = val;
                this.flavorListener(val);
            },
            get flavor() {
                return this.flavorInternal;
            },
            registerListener: function (listener) {
                this.flavorListener = listener;
            },
        })
    });
    window.iceCreamFlavorsLi.forEach((i,n) => {
        i.registerListener(function(val) {
            $('ul.ice-cream-list li:eq(' + n +')').text(val);
        });
        $("ul.ice-cream-list").append('<li class="ice-cream-flavor">' + i.flavor + '</li>');
    })

});