window.onload = function() {
    var img_box = document.createElement('script');
    var toTop = document.createElement('script');

    img_box.onload = function() {
        init_img_box();
    };
    toTop.onload = function() {
        initToTop();
    }

    img_box.src = 'img_box.js';
    toTop.src = 'toTop.js';
    document.head.appendChild(img_box);
    document.head.appendChild(toTop);
}
