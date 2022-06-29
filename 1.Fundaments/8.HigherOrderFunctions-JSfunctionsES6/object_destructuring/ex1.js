const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

for (let produ in product) {
  console.log(product[produ]);
}

const productArray = ['Smart TV Crystal UHD', '1899.05', 'Casas de Minas'];
for (let produ of productArray) {
  console.log(produ);
}


const { name, seller } = product;
console.log(name); // Smart TV Crystal UHD

