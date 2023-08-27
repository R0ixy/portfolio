import '../css/normalize.css';
import '../css/style.css';
import '../css/background.scss';
import '../css/card.scss';
import { PreLoader } from "./preLoader.js";

PreLoader();

console.log('You\'re a curious one! I like you <3')

document.querySelectorAll('.icon svg').forEach((card, index) => {
  card.style.marginTop = `${1.2 * index}rem`;
});


