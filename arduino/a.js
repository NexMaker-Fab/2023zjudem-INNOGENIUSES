document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function() {
        var currentScroll = window.scrollY || 0;
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            document.getElementById("banner").classList.add("hide");
        } else {
            // Scrolling up
            document.getElementById("banner").classList.remove("hide");
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, false);
});






// Code BOx JS Code
let codeBox = document.getElementById("codeBox");
let codeButton = document.getElementById("codeButton");
codeButton.onclick = function() {
    codeBox.select();
    document.execCommand("copy");
    codeButton.innerText = "Codes Copied";
};