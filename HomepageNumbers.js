import { CountUp } from 'https://cdn.jsdelivr.net/gh/inorganik/CountUp.js@master/dist/countUp.js';

var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

var options;

options = {
    startVal: 0,
    decimalPlaces: 0,
    duration: 2,
    useEasing: true,
    separseparator: ','
  };

var countries = new CountUp('countries-num', 40, options);
var cagr = new CountUp('cagr-num', 39, options);
var market = new CountUp('market-num', 3860, options);
var production = new CountUp('prod-num', 2, options);
var growth = new CountUp('growth-num', 50, options);
var patents = new CountUp('patents-num', 300, options);

var numbersSection = document.getElementById('numbers-div');
window.addEventListener('scroll', function (event) {
  if (isInViewport(numbersSection)) {
    countries.start();
    cagr.start();
    market.start();
    production.start();
    growth.start();
    patents.start();
}}, false);