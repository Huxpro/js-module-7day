// app.js
var $ = require('jquery')

var button = $("<button />").html("hey").click(function(){
        alert("hey!!")
    });

$("body").html(button)
