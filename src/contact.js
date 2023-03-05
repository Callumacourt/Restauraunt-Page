/* eslint-disable import/prefer-default-export */
import { infoContainer } from './infoContainer';
import addressImg from './address.png';
import addressIconImg from './addressIcon.png';
import phoneIconImg from './phone.png';

export const contactLoad = () => {
  const contactMenu = document.createElement('div');
  contactMenu.classList.add('contactMenu');
  infoContainer.appendChild(contactMenu);

  const phoneWrapper = document.createElement('div');
  phoneWrapper.classList.add('phoneWrapper');
  contactMenu.appendChild(phoneWrapper);

  const phoneIcon = new Image();
  phoneIcon.src = phoneIconImg;
  phoneIcon.classList.add('phoneIcon');
  phoneWrapper.appendChild(phoneIcon);

  const phoneNumber = document.createElement('p');
  phoneNumber.classList.add('phoneNumber');
  phoneNumber.innerHTML = '+44 7123 456 789';
  phoneWrapper.appendChild(phoneNumber);

  const addressWrapper = document.createElement('div');
  addressWrapper.classList.add('addressWrapper');
  contactMenu.appendChild(addressWrapper);

  const addressIcon = new Image();
  addressIcon.src = addressIconImg;
  addressIcon.classList.add('addressIcon');
  addressWrapper.appendChild(addressIcon);

  const address = document.createElement('p');
  address.classList.add('address');
  address.innerHTML = '42 Invisible Road, Nowhere';
  addressWrapper.appendChild(address);

  const addressImage = new Image();
  addressImage.src = addressImg;
  addressImage.classList.add('addressImage');
  contactMenu.appendChild(addressImage);
};
