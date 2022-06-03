// ==UserScript==
// @name         Generic Tampermonkey search tempalte
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fill this in to extend 
// @author       Template by Markus Leben, final version by you!
// @match        https://yoururl.here?tmpayload=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diamondcomics.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var payload = window.location.href.replace("yoururl.here?tmpayload=", "").replace("+"," "); //format payload
    //add additional text formating for payload as needed
    document.getElementById("SearchWords").value = payload; //you can use other ways of finding elements too
    document.getElementById("btnSearch").click(); //you're going to have to click something to send it
    //alternatively, you can send an enter keypress, but clicking is usually easier
})();
