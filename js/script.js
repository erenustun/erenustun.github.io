// Smooth Scroll Funktion
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

// Arrow Up Button anzeigen ab 500px
    $(".up").hide();
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('.up').fadeIn(500);
            } else {
                $('.up').fadeOut(200);
            }
        });
    });

    // Document mit .mobile-nav versteck starten
    $(() => {
        $('.mobile-nav').hide();
    });

    // .change und .mobile-nav togglen nach Klicken vom Hamburger Icon
    $('.hamburger').on('click', (e) => {
        $('.hamburger').toggleClass('change');
        $('.mobile-nav').toggle();
        e.preventDefault();
    })

    // .mobile-nav togglen ("verstecken") lassen, nach Anchor-Link Klick
    $("#a-main, #a-about, #a-contact, #a-skills").on('click', (e) => {
        $('.hamburger').toggleClass('change');
        $('.mobile-nav').toggle();
    })
});
