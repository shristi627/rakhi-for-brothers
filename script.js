/* =====================================================
   RAKHI 2026
   INTERACTIONS
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const openSurprise =
    document.getElementById("openSurprise");

const mainWebsite =
    document.getElementById("mainWebsite");

const musicButton =
    document.getElementById("musicButton");

const music =
    document.getElementById("rakhiMusic");

const musicIcon =
    document.getElementById("musicIcon");

const musicText =
    document.getElementById("musicText");

const photoModal =
    document.getElementById("photoModal");

const popupImage =
    document.getElementById("popupImage");


/* =====================================================
   OPEN SURPRISE
===================================================== */

openSurprise.addEventListener(
    "click",
    function () {

        openingScreen.style.transition =
            "opacity 1s ease, transform 1s ease";

        openingScreen.style.opacity = "0";

        openingScreen.style.transform =
            "scale(1.04)";


        setTimeout(
            function () {

                openingScreen.style.display =
                    "none";

                mainWebsite.classList.add(
                    "show"
                );


                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });


                heartExplosion();


                /* Try music after user interaction */

                if (music.paused) {

                    music.play()
                        .then(function () {

                            musicButton.classList.add(
                                "playing"
                            );

                            musicIcon.textContent =
                                "🎶";

                            musicText.textContent =
                                "Our Song Is Playing";

                        })
                        .catch(function () {

                            /* Browser may block
                               automatic audio */

                        });

                }

            },
            950
        );

    }
);


/* =====================================================
   MUSIC BUTTON
===================================================== */

musicButton.addEventListener(
    "click",
    function () {

        if (music.paused) {

            music.play()
                .then(function () {

                    musicButton.classList.add(
                        "playing"
                    );

                    musicIcon.textContent =
                        "🎶";

                    musicText.textContent =
                        "Our Song Is Playing";

                })
                .catch(function () {

                    musicText.textContent =
                        "Tap Again to Play";

                });

        }

        else {

            music.pause();

            musicButton.classList.remove(
                "playing"
            );

            musicIcon.textContent =
                "🎵";

            musicText.textContent =
                "Play Our Song";

        }

    }
);


/* =====================================================
   HEART EXPLOSION
===================================================== */

function heartExplosion() {

    const symbols = [
        "❤️",
        "💗",
        "✨",
        "🌸",
        "🌷",
        "💫",
        "♡"
    ];


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const element =
            document.createElement("div");


        element.innerText =
            symbols[
                Math.floor(
                    Math.random()
                    *
                    symbols.length
                )
            ];


        element.style.position =
            "fixed";

        element.style.left =
            Math.random() * 100 + "vw";

        element.style.top =
            Math.random() * 100 + "vh";

        element.style.fontSize =
            (12 +
            Math.random() * 18)
            + "px";

        element.style.zIndex =
            "9999";

        element.style.pointerEvents =
            "none";

        element.style.transition =
            "all 2.2s ease";


        document.body.appendChild(
            element
        );


        setTimeout(
            function () {

                element.style.transform =
                    `
                    translateY(-${100 +
                    Math.random() * 250}px)
                    translateX(${Math.random() *
                    100 - 50}px)
                    rotate(${Math.random() *
                    500}deg)
                    scale(1.4)
                    `;

                element.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                element.remove();

            },
            2300
        );

    }

}


/* =====================================================
   PHOTO MODAL
===================================================== */

function openPhoto(src) {

    popupImage.src =
        src;

    photoModal.classList.add(
        "show"
    );

    document.body.style.overflow =
        "hidden";

}


function closePhoto() {

    photoModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


/* =====================================================
   CLOSE MODAL OUTSIDE IMAGE
===================================================== */

photoModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target ===
            photoModal
        ) {

            closePhoto();

        }

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key ===
            "Escape"
        ) {

            closePhoto();

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        `
        .brother-card,
        .memory-item,
        .little-card,
        .letter-paper,
        .sister-box
        `
    );


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    function (element) {

        element.style.opacity =
            "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   DOUBLE CLICK HEART
===================================================== */

document.addEventListener(
    "dblclick",
    function (event) {

        const heart =
            document.createElement(
                "div"
            );

        heart.innerText =
            "❤️";

        heart.style.position =
            "fixed";

        heart.style.left =
            event.clientX + "px";

        heart.style.top =
            event.clientY + "px";

        heart.style.fontSize =
            "30px";

        heart.style.zIndex =
            "10000";

        heart.style.pointerEvents =
            "none";

        heart.style.transition =
            "1s ease";

        document.body.appendChild(
            heart
        );


        setTimeout(
            function () {

                heart.style.transform =
                    "translateY(-90px) scale(1.5)";

                heart.style.opacity =
                    "0";

            },
            50
        );


        setTimeout(
            function () {

                heart.remove();

            },
            1100
        );

    }
);


/* =====================================================
   PAGE LOAD
===================================================== */

window.addEventListener(
    "load",
    function () {

        document.body.classList.add(
            "loaded"
        );

    }
);