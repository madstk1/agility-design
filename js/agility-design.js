$(document).ready(function() {
    // Closable alerts.
    function closableReact(){
        const par = $(this).parent();
        par.css({"opacity": 0});
        setTimeout(function() {
            par.css({"display": "none"});
        }, parseFloat( $(this).parent().css("transition-duration").replace('s','') ) * 1000);
    }

    $(".closable button[action='alert-close'].close").click( closableReact );
    $(".closable button[action='callout-close'].close").click( closableReact );

    // Animations
    $("div[class *= 'animate-fade']").css( "opacity", 1 );
    $("div[class *= 'animate-fade-from-left']").css(   "right",  0 );
    $("div[class *= 'animate-fade-from-top']").css(    "bottom", 0 );
    $("div[class *= 'animate-fade-from-right']").css(  "left",   0 );
    $("div[class *= 'animate-fade-from-bottom']").css( "top",    0 );

    // Animation groups
    $(".animation-group").children().each((i, v) => {
        // Only accept elements with a .animate-* class.
        if(~$(v).attr("class").indexOf("animate-")) {
            $(v).css({
                "animation-delay":
                ( parseFloat( $(v).parent().attr("data-delay-initial") )
                + parseFloat( $(v).parent().attr("data-delay-incremental") ) * i )
                + "s",
                "animation-duration": (typeof $(v).parent().attr("data-duration") != "undefined") ?
                $(v).parent().attr("data-duration") + "s" :
                "0.25s"
            });
        }
    });

    // Page Fades
    $("body.fade-on-leave").css("transition-duration", $("body.fade-on-leave").attr("fade-duration") + "s");
    $("body.fade-on-load").css({
        "transition-duration": $("body.fade-on-load").attr("fade-duration") + "s",
        "opacity": 1
    });

    $("body.fade-on-leave a").click(function(e) {
        const t = this;
        e.preventDefault();
        $("body.fade-on-leave").css("opacity", 0);
        setTimeout(function(){
            window.location.href = $(t).attr("href");
        },
        parseFloat( $("body.fade-on-leave").css("transition-duration") ) * 1000);
    });
});