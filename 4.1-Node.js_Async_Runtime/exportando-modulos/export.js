const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;
const change = (name) =>console.log(name);
module.exports = {
  usdToBrl,
  change,
};