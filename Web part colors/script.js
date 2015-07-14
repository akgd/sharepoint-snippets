//Requires jQuery. Add to content editor or HTML form web part.
$( document ).ready(function() {
//Green Web Part
$('h3.ms-standardheader nobr span:contains("YOUR EXACT WP TITLE HERE")').closest(".s4-wpTopTable").addClass("green-web-part");
//Yellow Web Part
$('h3.ms-standardheader nobr span:contains("YOUR EXACT WP TITLE HERE")').closest(".s4-wpTopTable").addClass("yellow-web-part");
//Force long WP Titles to wrap
$('h3.ms-standardheader nobr span:contains("YOUR EXACT WP TITLE HERE")').closest(".s4-wpTopTable").addClass("long-wpHeader");
});