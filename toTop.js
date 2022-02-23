function initToTop() {


    toTop = document.getElementById("toTop");
    window.onscroll = function() {scrollFunction()};
    
};



function scrollFunction() {

    var firstDivLength = document.getElementById('firstDiv').offsetHeight;
    console.log(firstDivLength);

    if (document.body.scrollTop > firstDivLength-100 || document.documentElement.scrollTop > firstDivLength-100) {
        toTop.classList.add("showToTopButton");
    } else {
        toTop.classList.remove("showToTopButton");
    }
}