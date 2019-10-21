var callback = function(){
    for (var i = 0; i < window.iceCreamFlavors.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        item.setAttribute('class','ice-cream-flavor');

        // Set its contents:
        item.appendChild(document.createTextNode(window.iceCreamFlavors[i]));

        // Add it to the list:
        document.getElementsByClassName('ice-cream-list')[0].appendChild(item);
    }
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
    callback();
} else {
    document.addEventListener("DOMContentLoaded", callback);
}