var hubOb = function() {
    if (Cookies.get("housing-hub-logged-in") != "true") {
        /*$("p").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lacinia metus. Praesent sollicitudin, metus vel molestie dignissim, purus ex auctor arcu, eget commodo ligula massa sed dui. Cras eu consequat lectus, id convallis lorem. Proin pulvinar nulla sit amet tellus blandit, id commodo nisl volutpat.");
        $("h3:not(.panel-title)").html("Header 3");
        $("ul:not(.nav,.nav-browser) > li").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        $("td").html("Nullam eget lacinia metus.");*/

        $('#edit-links').remove();
        $('#alert-msg').remove();
    }
}