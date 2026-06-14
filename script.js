// Selezioniamo gli elementi necessari
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Indice della foto attuale e variabile per il timer
let currentIndex = 0;
let autoSlideTimer;

// Funzione che sposta fisicamente il "binario"
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Funzione per andare alla slide successiva
function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // Torna alla prima
    }
    updateCarousel();
}

// Funzione per andare alla slide precedente
function moveToPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // Vai all'ultima
    }
    updateCarousel();
}

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