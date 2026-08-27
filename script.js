/* =================================
   ELEMENTS
================================= */

const intro =
  document.getElementById("intro");

const openSurprise =
  document.getElementById("openSurprise");

const music =
  document.getElementById("bgMusic");

const musicBtn =
  document.getElementById("musicBtn");

let musicPlaying = false;


/* =================================
   OPEN SURPRISE
================================= */

openSurprise.addEventListener("click", () => {

  intro.classList.add("hide");

  music.play()
    .then(() => {

      musicPlaying = true;

      musicBtn.textContent = "🔊";

    })
    .catch(() => {

      showToast(
        "Music play nahi ho pa raha 🎵"
      );

    });

  celebrate();

});


/* =================================
   MUSIC
================================= */

musicBtn.addEventListener("click", () => {

  if (musicPlaying) {

    music.pause();

    musicPlaying = false;

    musicBtn.textContent = "🔇";

  } else {

    music.play()
      .then(() => {

        musicPlaying = true;

        musicBtn.textContent = "🔊";

      })
      .catch(() => {

        showToast(
          "Music file nahi mil rahi. Path check karo 🎵"
        );

      });

  }

});


/* =================================
   PERSONAL MESSAGE
================================= */

function personalize() {

  const input =
    document.getElementById("nameInput");

  const name =
    input.value.trim();

  if (!name) {

    showToast(
      "Pehle naam enter karo ❤️"
    );

    return;

  }


  document.getElementById(
    "personalMessage"
  ).innerHTML = `

    Dear <strong>${escapeHTML(name)}</strong>,

    <br><br>

    Raksha Bandhan sirf ek festival nahi,
    balki humare beautiful bond ko celebrate
    karne ka ek special moment hai.

    <br><br>

    Chahe hum kitni bhi fights karein,
    ek doosre ko kitna bhi irritate karein,
    tumhari importance meri life mein
    kabhi kam nahi ho sakti.

    <br><br>

    Main dil se wish karta/karti hoon ki
    ${escapeHTML(name)}, tumhari life
    happiness, success, good health
    aur beautiful memories se hamesha
    bhari rahe.

    <br><br>

    Tumhara har dream complete ho,
    tumhari har wish poori ho,
    aur tumhari smile kabhi kam na ho.

    <br><br>

    Aur haan...

    <br><br>

    Fights aur teasing toh
    humari story ka permanent part hain 😂❤️

    <br><br>

    But no matter what happens,
    this beautiful bond will always
    remain special.

    <br><br>

    Happy Raksha Bandhan,
    ${escapeHTML(name)}! 🪢❤️

    <br><br>

    Always stay happy,
    always stay blessed.

    <br><br>

    With lots of love,
    <br>

    <strong>Always & Forever 💝</strong>

  `;


  showToast(
    `Message ${name} ke liye personalize ho gaya 💖`
  );


  celebrate();

}


/* =================================
   GIFT
================================= */

document
  .getElementById("gift")
  .addEventListener("click", () => {

    const message =
      document.getElementById(
        "giftMessage"
      );

    message.classList.toggle("show");

    celebrate();

  });


/* =================================
   ENVELOPE
================================= */

function openEnvelope() {

  const envelope =
    document.getElementById(
      "envelope"
    );

  envelope.classList.toggle(
    "open"
  );

  createSparkles(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

}


/* =================================
   RAKHI MAGIC
================================= */

function rakhiMagic() {

  celebrate();

  showToast(
    "Rakhi ke saath lots of love & blessings ❤️"
  );

}


/* =================================
   CELEBRATION
================================= */

function celebrate(big = false) {

  const amount =
    big ? 180 : 90;


  const colors = [
    "#e6395f",
    "#f4c542",
    "#ff8fab",
    "#ffffff",
    "#b8860b",
    "#ff6b6b"
  ];


  for (
    let i = 0;
    i < amount;
    i++
  ) {

    const piece =
      document.createElement(
        "div"
      );


    piece.className =
      "confetti";


    piece.style.left =
      Math.random() * 100 + "vw";


    piece.style.top =
      -Math.random() * 20 + "vh";


    piece.style.background =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];


    piece.style.setProperty(
      "--x",
      ((Math.random() - .5) * 400)
      + "px"
    );


    piece.style.animationDuration =
      (1.5 + Math.random() * 2)
      + "s";


    document.body.appendChild(
      piece
    );


    setTimeout(() => {

      piece.remove();

    }, 4000);

  }


  createSparkles(
    window.innerWidth / 2,
    window.innerHeight / 3
  );

}


/* =================================
   SPARKLES
================================= */

function createSparkles(x, y) {

  const symbols = [
    "✨",
    "💖",
    "⭐",
    "🌟"
  ];


  for (
    let i = 0;
    i < 20;
    i++
  ) {

    const sparkle =
      document.createElement(
        "div"
      );


    sparkle.className =
      "sparkle";


    sparkle.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    sparkle.style.left =
      x + "px";


    sparkle.style.top =
      y + "px";


    sparkle.style.setProperty(
      "--sx",
      ((Math.random() - .5) * 250)
      + "px"
    );


    sparkle.style.setProperty(
      "--sy",
      ((Math.random() - .5) * 250)
      + "px"
    );


    document.body.appendChild(
      sparkle
    );


    setTimeout(() => {

      sparkle.remove();

    }, 900);

  }

}


/* =================================
   CURSOR SPARKLES
================================= */

let lastSparkle = 0;


document.addEventListener(
  "pointermove",
  event => {

    const now =
      Date.now();


    if (
      now - lastSparkle < 100
    ) {

      return;

    }


    lastSparkle = now;


    createSmallSparkle(
      event.clientX,
      event.clientY
    );

  }
);


function createSmallSparkle(
  x,
  y
) {

  const sparkle =
    document.createElement(
      "div"
    );


  sparkle.className =
    "sparkle";


  sparkle.textContent =
    "✦";


  sparkle.style.left =
    x + "px";


  sparkle.style.top =
    y + "px";


  sparkle.style.setProperty(
    "--sx",
    ((Math.random() - .5) * 50)
    + "px"
  );


  sparkle.style.setProperty(
    "--sy",
    ((Math.random() - .5) * 50)
    + "px"
  );


  document.body.appendChild(
    sparkle
  );


  setTimeout(() => {

    sparkle.remove();

  }, 800);

}


/* =================================
   SCROLL ANIMATION
================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("active");

          }

        }
      );

    },
    {
      threshold: .15
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(
    element =>
      observer.observe(
        element
      )
  );


/* =================================
   SHARE
================================= */

async function shareWish() {

  const name =
    document
      .getElementById(
        "nameInput"
      )
      .value
      .trim();


  const text =
    name
      ? `Happy Raksha Bandhan ${name}! ❤️🪢`
      : `Happy Raksha Bandhan! ❤️🪢`;


  if (
    navigator.share
  ) {

    try {

      await navigator.share({

        title:
          "Rakhi Wish ❤️",

        text:
          text

      });

    } catch (error) {}

  } else {

    const whatsapp =
      "https://wa.me/?text=" +
      encodeURIComponent(
        text
      );


    window.open(
      whatsapp,
      "_blank"
    );

  }

}


/* =================================
   TOAST
================================= */

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  setTimeout(() => {

    toast.classList.remove(
      "show"
    );

  }, 2500);

}


/* =================================
   HTML SAFETY
================================= */

function escapeHTML(value) {

  return value

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =================================
   TOUCH SPARKLES
================================= */

document.addEventListener(
  "touchstart",
  event => {

    if (
      event.touches.length === 1
    ) {

      const touch =
        event.touches[0];


      createSmallSparkle(
        touch.clientX,
        touch.clientY
      );

    }

  },
  {
    passive: true
  }
);


/* =================================
   PHOTO VIEWER
================================= */

function openPhoto(imagePath) {

  const viewer =
    document.getElementById(
      "photoViewer"
    );

  const photo =
    document.getElementById(
      "fullPhoto"
    );


  photo.src =
    imagePath;


  viewer.classList.add(
    "show"
  );


  document.body.style.overflow =
    "hidden";


  createSparkles(
    window.innerWidth / 2,
    window.innerHeight / 2
  );

}


/* =================================
   CLOSE PHOTO
================================= */

function closePhoto(event) {

  if (event) {

    event.stopPropagation();

  }


  const viewer =
    document.getElementById(
      "photoViewer"
    );


  viewer.classList.remove(
    "show"
  );


  document.body.style.overflow =
    "";

}


/* =================================
   ESCAPE TO CLOSE PHOTO
================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closePhoto();

    }

  }
);