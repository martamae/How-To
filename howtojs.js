document.addEventListener("DOMContentLoaded", function() { 
    var popcorn = Popcorn( "#catVid" );

     popcorn.footnote({
        start: 4,
        end: 5,
        target: "footnote",
        text: "Boo!"
    });

}, false );