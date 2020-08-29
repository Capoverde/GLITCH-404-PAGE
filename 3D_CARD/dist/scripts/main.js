'use strict';

var trigger = document.getElementById('trigger');
var card = document.querySelector('.card');
var send = document.getElementById('send__message');
var thanks = document.querySelector('.thank__you__card');
console.log(thanks);

function cardSlide() {
  card.classList.add('show');
}

function sendMessage(e, thanksRemover) {
  e.preventDefault();
  card.classList.remove('show');
  thanks.classList.add('showThx');

  function thanksRemover() {
    thanks.classList.remove('showTHx');
    thanks.classList.add('thanksUp');
  }

  setTimeout(thanksRemover, 3000);
}

trigger.addEventListener('click', cardSlide);
send.addEventListener('click', sendMessage);
