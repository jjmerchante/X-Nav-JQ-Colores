// Fade out text when clicking over some other...
// ...and fade it back when clicking over some other.
//
jQuery(document).ready(function() {
    $("#faq dt").click(function() {
	$(this).fadeOut("slow");
    });
    $("h3").click(function() {
	$("dt").fadeIn("slow");
    });

    $('#orderedlist').addClass('red');
    $('#orderedlist > li').addClass('blue');
    var orderedlists = $('#orderedlist')
    for (var i = 0; i<orderedlists.length; i++){
        $(orderedlists).children('li').last().hover(
            function(event) {
                $(this).addClass('green');
            },
            function(event) {
                $(this).removeClass('green');
            }
        );
    }
});
