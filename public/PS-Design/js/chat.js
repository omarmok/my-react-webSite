"use strict";
var connection = new signalR.HubConnectionBuilder().withUrl(AppUrl + "/chatHub").build();

connection.on("ReceiveMessage", function (user, msg) {
    const frag = document.createRange().createContextualFragment(msg);
    if (document.getElementById("mailbody") != null) {
        document.getElementById("mailbody").prepend(frag);
    }
});



connection.start().then(function () {
}).catch(function (err) {
    return console.error(err.toString());
});
 