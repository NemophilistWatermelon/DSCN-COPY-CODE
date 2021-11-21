var hookAjax = function() {
    var node = document.createElement("script");
    node.src = chrome.extension.getURL('csdnCode.js');
    node.class = 'authorGua'
    document.body.appendChild(node);
}
var __main = function() {
    console.log("%c csdnCode.js By Author:：https://github.com/nemophilistwatermelon","color:red")
    hookAjax()
}


$(document).ready(function() {
    __main();
});