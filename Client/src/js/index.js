import {Workbox} from 'worbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
    <div class="loading-container">
    <div class ="loading-spinner"/>
    </div>
    `;
    main.appendChild(spinner);
};

const Editor = new Editor();

if (typeof editor === 'undefined') {
    loadSpinner();
}

if ('serviceWorker' in navigator) {
    const workboxSW = new Workbox('/src-sw.js');
    workboxSW.register();
} else {
    console.erro('Service workers are not supported in this browser');
}