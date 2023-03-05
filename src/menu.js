import { infoContainer } from './pageLoad';
import butterChicken from './butterChicken.png';

const menuButton = document.querySelector('.button2');

const clear = () => {
  infoContainer.removeChild(infoContainer.firstChild);
};

function createDishElement(menu, dishName, imagePath) {
  const dishWrapper = document.createElement('div');
  dishWrapper.classList.add('dishWrapper');
  menu.appendChild(dishWrapper);

  const dishNameElement = document.createElement('h4');
  dishNameElement.innerHTML = dishName;
  dishWrapper.appendChild(dishNameElement);

  const dishImage = new Image();
  dishImage.src = imagePath;
  dishImage.classList.add('dishImage');
  dishWrapper.appendChild(dishImage);

  return dishWrapper;
}

export const menuLoad = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');
  infoContainer.appendChild(menu);

  const menuHeader = document.createElement('h1');
  menuHeader.classList.add('menuHeader');
  menuHeader.innerHTML = 'Our menu';
  menu.appendChild(menuHeader);

  const dish1Wrapper = createDishElement(menu, 'Butter Chicken', butterChicken);

  const dish2Wrapper = createDishElement(
    menu,
    'Chicken Bhunaa',
    'path/to/chickenBhuna.jpg'
  );

  const dish3Wrapper = createDishElement(
    menu,
    'Rogan Josh',
    'path/to/roganJosh.jpg'
  );

  const dish4Wrapper = createDishElement(
    menu,
    'Sagaloo',
    'path/to/sagaloo.jpg'
  );

  const dish5Wrapper = createDishElement(menu, 'Korma', 'path/to/korma.jpg');

  const dish6Wrapper = createDishElement(menu, 'Katsu', 'path/to/katsu.jpg');
};

export default clear;
