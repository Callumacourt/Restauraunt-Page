import { infoContainer } from './infoContainer';

const content = document.querySelector('#content');

const pageLoad = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  content.appendChild(header);

  const restaurantName = document.createElement('h1');
  restaurantName.innerHTML = "Callum's Curries";
  header.appendChild(restaurantName);

  const tabNav = document.createElement('nav');
  tabNav.classList.add('tabNav');
  header.appendChild(tabNav);

  const buttonNav = document.createElement('button');
  buttonNav.innerHTML = 'Home';
  buttonNav.classList.add('homeButton');

  const buttonNav2 = document.createElement('button');
  buttonNav2.innerHTML = 'Menu';
  buttonNav2.classList.add('menuButton');

  const buttonNav3 = document.createElement('button');
  buttonNav3.innerHTML = 'Contact';
  buttonNav3.classList.add('contactButton');

  tabNav.appendChild(buttonNav);
  tabNav.appendChild(buttonNav2);
  tabNav.appendChild(buttonNav3);

  content.appendChild(infoContainer);

  const backgroundDiv = document.createElement('div');
  backgroundDiv.classList.add('backgroundImg');
  document.body.appendChild(backgroundDiv);

  return buttonNav;
};
export { infoContainer };
export default pageLoad;
