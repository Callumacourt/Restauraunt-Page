import pageLoad, { infoContainer } from './pageLoad';
import './style.css';
import clear, { menuLoad } from './menu';
import { infoAppend } from './infoContainer';
import { contactLoad } from './contact';

const content = document.querySelector('#content');
pageLoad();

const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const contactButton = document.querySelector('.contactButton');

homeButton.addEventListener('click', () => {
  clear();
  infoAppend();
});
menuButton.addEventListener('click', () => {
  clear();
  menuLoad();
});
contactButton.addEventListener('click', () => {
  clear();
  contactLoad();
});
