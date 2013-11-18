
// DOM ready
$(function() {
 	   
    // Create the dropdown base
    $("<div />").appendTo("nav");
         
     //Icon font
    $("<i />", {
        "class": "fa fa-list"
    }).appendTo("nav div");
         
    // Create the dropdown base
    $("<select />").appendTo("nav div");
       
    // Create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value"   : " ",
        "text"    : "",
    }).appendTo("nav div select");

       
    // Populate dropdown with menu items
    $("nav a").each(function() {
        var el = $(this);
        $("<option />", {
            "value"   : el.attr("href"),
            "text"    : el.text()
       }).appendTo("nav div select");
    });
       
 	   // To make dropdown actually work
 	   // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $("nav div select").change(function() {
         window.location = $(this).find("option:selected").val();
    });
    
});
