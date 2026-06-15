// Selezioniamo gli elementi necessari
const track = document.querySelector('#carouselTrack');
let slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

// Indice della foto attuale e variabile per il timer
let currentIndex = 0;
let autoSlideTimer;

const toAppend = slides[0]


// Funzione per andare alla slide successiva
function moveToNextSlide() {
    const firstSlide = track.firstElementChild;

    track.style.transition = "transform 0.5s ease";
    track.style.transform = "translateX(calc(-100%))";

    track.addEventListener("transitionend", function handler() {
        track.style.transition = "none";

        track.append(firstSlide);

        track.style.transform = "translateX(0)";

        track.removeEventListener("transitionend", handler);
    });
}

// Funzione per andare alla slide precedente


// Funzione che fa partire lo scorrimento automatico ogni 3 secondi
function startAutoPlay() {
    // 3000 millisecondi = 3 secondi
    autoSlideTimer = setInterval(moveToNextSlide, 3000); 
}

// Funzione per resettare il timer quando si clicca a mano
function resetAutoPlay() {
    clearInterval(autoSlideTimer); // Ferma il timer attuale
    startAutoPlay();               // Ne fa ripartire uno nuovo da zero
}

// Click su Avanti
nextBtn.addEventListener('click', () => {
    moveToNextSlide();
    resetAutoPlay();
});

// Click su Indietro
prevBtn.addEventListener('click', () => {
    moveToPrevSlide();
    resetAutoPlay();
});

// Avvia il carosello automatico appena la pagina si carica
startAutoPlay();