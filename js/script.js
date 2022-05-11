let menu = document.getElementById('menu-btn');
let navbar = document.querySelector('.header .navbar');
let popup = document.getElementById('popup');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// DarkMode 
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');

	// Guardamos el modo en localstorage.
	if(document.body.classList.contains('dark')){
		localStorage.setItem('dark-mode', 'true');
	} else {
		localStorage.setItem('dark-mode', 'false');
	}
});

// Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true'){
	document.body.classList.add('dark');
	btnSwitch.classList.add('active');
} else {
	document.body.classList.remove('dark');
	btnSwitch.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    //navbar.classList.remove('active');
    //popup.classList.remove('active')

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
};
function toggle1(){ 
    popup.classList.toggle('desp');
}

//Slider
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btns');
let currentSlide = 1;


var manualNav = function(manual){
slides.forEach((slide) => {
    slide.classList.remove('active'); //on

    btns.forEach((btn) => {
    btn.classList.remove('active');  //on
    });
});

slides[manual].classList.add('active');  //on
btns[manual].classList.add('active');    //on
}

btns.forEach((btn, i) => {
btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
});
});

// Javascript for image slider autoplay navigation
var repeat = function(activeClass){
let active = document.getElementsByClassName('active');   //on
let i = 0;

var repeater = () => {
    setTimeout(function(){
    [...active].forEach((activeSlide) => {
        activeSlide.classList.remove('active');   //on
    });

    slides[i].classList.add('active');   //on
    btns[i].classList.add('active');     //on
    i++;

    if(slides.length == i){
    i = 0;
    }
    if(i >= slides.length){
    return;
    }
    repeater();
}, 10000);
}
repeater();
}
repeat();

var IconWhatsapp = document.querySelector('#icon-whatsapp');
var formulariowtsp = document.getElementById('formulariowtsp');
var closemodal = document.querySelector('.closemodal');
var sendbttn = document.querySelector('#sendbttn');


IconWhatsapp.addEventListener('click' , function(){
    formulariowtsp.classList.toggle('entrarysalir')
})

closemodal.addEventListener('click' , function(){
    formulariowtsp.classList.remove('entrarysalir')
})

let cont = document.getElementById('con');
cont.addEventListener('click', function(){ 
    formulariowtsp.classList.add('entrarysalir')
    console.log('borw')
})

sendbttn.addEventListener('click' , EnviarMensaje)

function EnviarMensaje(){


    let name = document.querySelector('#inputname').value;
    let mensaje = document.querySelector('#inputmensaje').value;

    let url = "https://api.whatsapp.com/send?phone=525586129057&text=Hola!%20: %0A" + name + "%0A%0AMensaje: %0A" + mensaje + "%0A";
    window.open(url);
    // Salto de línea con %0A

}
