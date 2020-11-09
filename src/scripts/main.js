'use strict';

const burger = document.getElementById('burger-menu');
const menu = document.getElementById('mob-menu');
const main = document.getElementById('main-section');

burger.addEventListener('click', () => {
  burger.classList.toggle('active-burger');
  menu.classList.toggle('active-menu');
  main.classList.toggle('is-blured');
});

const btn = document.querySelectorAll('.btn');
const popup = document.getElementById('popup');
const content = document.getElementById('content');

btn.forEach(element => {
  element.addEventListener('click', () => {
    popup.classList.add('open');
    content.classList.add('content-visible');
  });
});

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup')) {
    popup.classList.remove('open');
    content.classList.remove('content-visible');
  }
});
