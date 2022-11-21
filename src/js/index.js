import '../scss/style.scss';

import _ from 'lodash';

import { showHelp } from './help';
import { search } from './search';
//import { add, SHA256 } from './util';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', '!!!'], ' ');
  element.classList.add('colorful');
  showHelp();

  console.log(search(['hallo', 'welt'], 'hallo'));
  // console.log(add(4, 9));
  // console.log(SHA256('hallo welt'));

  return element;
}

document.body.appendChild(component());
