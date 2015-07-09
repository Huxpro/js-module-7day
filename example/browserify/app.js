// app.js
var $ = require('jquery')


var button = $("<button />").html("hello world").click(function(){
        alert("helloworld!!!!!!")
    });

$("body").html(button)
