$(document).ready(function () {
    window.iceCreamFlavorsLi = [];
    window.iceCreamFlavors.forEach((i,n) => {
        let targetObj = {flavor: i};
        let targetProxy = new Proxy(targetObj, {
            set: function (target, key, val) {
                $('ul.ice-cream-list li:eq(' + n +')').text(val);
                target[key] = val;
                return true;
            }
        });
        window.iceCreamFlavorsLi.push(targetProxy);
        $('ul.ice-cream-list').append('<li class="ice-cream-flavor">' + i + '</li>');
    });
});