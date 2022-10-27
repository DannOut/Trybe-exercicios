const convert = require('./export.js');

const usd = 10;
const brl = convert.usdToBrl(usd);
console.log(brl);
convert.change('daniel');

