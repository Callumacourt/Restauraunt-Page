/* eslint-disable import/prefer-default-export */
// infoContainer.js
// infoContainer.js
export const infoContainer = document.createElement('div');
infoContainer.classList.add('infoContainer');

export function infoAppend() {
  const info = document.createElement('div');
  info.classList.add('info');
  infoContainer.appendChild(info);
  const infoHeader = document.createElement('h1');
  infoHeader.classList.add('infoHeader');
  infoHeader.innerHTML = "'The world's best curry, period' - Jesus Christ";
  info.appendChild(infoHeader);
  const homeText = document.createElement('p');
  homeText.classList.add('homeText');
  homeText.innerHTML =
    "Here at Callun's Curries we've been serving the best curry since 200BCE, and today, like 2000 years ago you can only experience the magic of our milenia-old cooking inside our home and state of the art restauraunt in Croydon, UK.";
  info.appendChild(homeText);
  const homeText2 = document.createElement('p');
  homeText2.innerHTML =
    'We value our guests as members of our own family and as such everything that leaves our kitchen is world class quality, guaranteed.';
  info.appendChild(homeText2);
  const homeText3 = document.createElement('p');
  homeText3.classList.add('sale');
  homeText3.innerHTML =
    'Come and join the family, and see why Jesus says we have the best curries of all time';
  info.appendChild(homeText3);
}

infoAppend();
