// Navegation Menu
let btnMenu = document.querySelector('.btn-menu');
let barIconX = document.querySelector('.btn-menu i');
let menu = document.querySelector('.list-container');
let menuContent = document.querySelector('.menu');
var activador = true;

btnMenu.addEventListener('click', (event) => {

  //Icon X
  barIconX.classList.toggle('fa-times');

   if(activador){
     menu.style.left = '0%'; 
     menu.style.transition = '0.5s';
  
     activador = false;
   }
   else{
    activador = false;
    menu.style.left = '-100%';

    activador = true;
   }

});

// Add class "active"
let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});

//Scroll Efect

 let prevScrollPos = window.pageYOffset;
 let goTop = document.querySelector('.go-top');

window.onscroll = () => {
  
  //Hide & Show - Scroll Menu (Function)
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    menuContent.style.top = '0px';
    menuContent.style.transition = '0.5s';
  }else{
    menuContent.style.top = '-60px';
    menuContent.style.transition = '0.5s';
  }
  prevScrollPos = currentScrollPos;
  
  //Scoll Menu & Go Top & See Down (Styles)
  let arriba = window.pageYOffset;

  //Conditions
  if(arriba <= 100){
    menuContent.style.borderBottom = 'none';
    menuContent.style.background = 'none';

    //Ocultar Go Top
    goTop.style.right = '-100px';
  }else{
    menuContent.style.borderBottom = '3px solid #ff2e63';
    menuContent.style.background = '#000';

    //Mostrar Go Top
    goTop.style.right = '0px';
  }
  
}

//Funcion Boton Comprar Pedido
function comprar_producto() {
  window.location.href = "../realizar-pedido.html";
}


//Go Top Click
goTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
  
});

// Loading page
var loaderPage = function() {
  $(".site-loader").fadeOut("slow");

  
};
loaderPage();


  //Imagenes Modal/Pop-up
  
  //Img Pop-up Netflix
  function imgNetflix() {
    div = document.getElementById('imgNetflix');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgNetflix() {
    div = document.getElementById('imgNetflix');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}

  //Img Pop-up Disney+
  function imgDisneyPlus() {
    div = document.getElementById('imgDisneyPlus');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgDisneyPlus() {
    div = document.getElementById('imgDisneyPlus');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}

  //Img Pop-up Amazon Prime
  function imgAmazonPrime() {
    div = document.getElementById('imgAmazonPrime');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgAmazonPrime() {
    div = document.getElementById('imgAmazonPrime');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}



// Promociones


  //Img Pop-up Promo1
  function imgPromo1() {
    div = document.getElementById('imgPromo1');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgPromo1() {
    div = document.getElementById('imgPromo1');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}

  //Img Pop-up Promo 2
  function imgPromo2() {
    div = document.getElementById('imgPromo2');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgPromo2() {
    div = document.getElementById('imgPromo2');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}

  //Img Pop-up Promo 3
  function imgPromo3() {
    div = document.getElementById('imgPromo3');
    div.style.display = '';

    div = document.getElementById('header');
    div.style.display = 'none';
}

function Cerrar_imgPromo3() {
    div = document.getElementById('imgPromo3');
    div.style.display = 'none';

    div = document.getElementById('header');
    div.style.display = '';
}

 //Mensaje Pedido Realizado

 //Funcion Cerrar Mensaje
 function realizar_nuevo_pedido() {
  div = document.getElementById('mensaje-pedido-realizado');
  div.style.display = 'none';

  div = document.getElementById('formulario-de-pedido');
  div.style.display = '';
}

 //Funcion Cerrar Mensaje 0
 function realizar_nuevo_pedido_0() {
  window.location.href = "./realizar-pedido.html";
}

 //Funcion Cerrar Ventana Emergente
 function cerrar_ventana_emer() {
  div = document.getElementById('light-box');
  div.style.display = 'none';
}

 //Funcion Ventana Iniciar Sesion
 function iniciar_sesion_admi() {
  div = document.getElementById('light-box-admi');
  div.style.display = '';

  div = document.getElementById('login-box-fondo');
  div.style.display = '';

  div = document.getElementById('menu');
  div.style.display = 'none';

  div = document.getElementById('footer');
  div.style.display = 'none';
  
}

function iniciar_sesion_admi_cerrar() {
  div = document.getElementById('light-box-admi');
  div.style.display = 'none';

  div = document.getElementById('login-box-fondo');
  div.style.display = 'none';

  div = document.getElementById('menu');
  div.style.display = '';

  div = document.getElementById('footer');
  div.style.display = '';
 
}

 //Funcion Ventana Iniciar Sesion
 function iniciar_sesion_afil() {
  div = document.getElementById('light-box-afil');
  div.style.display = '';

  div = document.getElementById('login-box-fondo');
  div.style.display = '';

  div = document.getElementById('menu');
  div.style.display = 'none';

  div = document.getElementById('footer');
  div.style.display = 'none';
  
}

function iniciar_sesion_afil_cerrar() {
  div = document.getElementById('light-box-afil');
  div.style.display = 'none';

  div = document.getElementById('login-box-fondo');
  div.style.display = 'none';

  div = document.getElementById('menu');
  div.style.display = '';

  div = document.getElementById('footer');
  div.style.display = '';
 
}