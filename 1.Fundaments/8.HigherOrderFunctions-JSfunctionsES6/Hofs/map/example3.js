const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// expected -  listProducts = [{ Arroz: 2.99 },...]

const listProducts = (listProduct, listPrice) => {
 return listProduct.map((element, array) => {
    return { [element]: listPrice[array] };
  });
};
console.log(listProducts(products, prices));
;
