// ==UserScript==
// @name         Generic Tampermonkey search tempalte
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fill this in to extend 
// @author       Template by Markus Leben, final version by you!
// @match        https://yoururl.here?tmpayload=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    //search term id dict, TODO: update to allow for different element finding methods or different interaciton.
    //maintext is the default variable name of a plain search. 
    //example_other_var is used for advanced search features
    //for example, if you had a field labeled "artist name"
    const search_term_id_dict = {
        "maintext":"Paste Search Bar ID Here",
        "example_other_var":"Paste ID of other search field here",
        };
    
    let searchdict = {};
    for (const i of payload){ //not sure how loops affect scope, not looking to mess around right now
        var keyval = i.split(":");
        if (keyval.length == 1){
            keyval = ["maintext",keyval[0]];
        }
        if (!(keyval[0] in searchdict)){
            searchdict[keyval[0]] = keyval[1];
        }
        else{
            searchdict[keyval[0]] = searchdict[keyval[0]] + " " + keyval[1];
        }
    }
    
    //if you have to do any preprep before sending your payload, it goes here
   

    //this is the loop for putting search terms into their fields. 
    for (const key in search_term_id_dict){
        if (key in searchdict){
            document.getElementById(search_term_id_dict[key]).value = searchdict[key];
        }
    }
    
    //click search button
    document.getElementById("Paste Click Button ID Here").click();
    //alternatively, you can send an enter keypress, but clicking is usually easier
})();
