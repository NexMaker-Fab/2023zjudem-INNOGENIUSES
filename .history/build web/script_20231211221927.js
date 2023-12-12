// Code Box JS Code
let codeBox = document.getElementById("codeBox");
let codeButton = document.getElementById("codeButton");
codeButton.onclick = function() {
    codeBox.select();
    document.execCommand("copy");
    codeButton.innerText = "Codes Copied";
};