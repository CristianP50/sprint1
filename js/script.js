const btnCerrar = document.getElementById('btnCerrar');
let btnTrailer = document.getElementById('btnTrailer');
let contentCard = document.querySelectorAll('.movie');

console.log(contentCard);

contentCard.forEach(openTrailer => {
        openTrailer.addEventListener('click');
        console.log('hola');
});

const openContentTrailer = (e) => {
    e.target
    console.log('Hola');
}