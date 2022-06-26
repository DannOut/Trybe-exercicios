const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const books = [... {...}]
// Adicione o código do exercício aqui:

//Q01
const arrayNameGenreWriter = () =>
  books.map(
    (valueIndice) =>
      console.log(`${valueIndice.name} - ${valueIndice.genre} - ${valueIndice.author.name}`)
  );
// arrayNameGenreWriter();

//Q02
const arrayAgeAuthor = () => {
  const ageRelease = [];
  // criando o novo objeto com age e o nome do autor
  books.map((teste) => {
    ageRelease.push({
      age: teste.releaseYear - teste.author.birthYear,
      author: teste.author.name,
    });
    //ordenando por age
    ageRelease.sort((a, b) => a.age - b.age);
  });
  return console.log(ageRelease);
};
// arrayAgeAuthor();

//Q03