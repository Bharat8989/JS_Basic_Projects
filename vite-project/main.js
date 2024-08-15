import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { populateCurrencyOptions, convertCurrency } from './counter.js';

document.addEventListener('DOMContentLoaded', populateCurrencyOptions);

document.getElementById('convertBtn').addEventListener('click', convertCurrency);
