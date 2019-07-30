import { CountUp } from 'https://cdn.jsdelivr.net/gh/inorganik/CountUp.js@master/dist/countUp.js';

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

$('.numbers-div').waypoint(function() {
  countries.start();
  cagr.start();
  market.start();
  production.start();
  growth.start();
  patents.start();
}, {
  offset: '100%'
});