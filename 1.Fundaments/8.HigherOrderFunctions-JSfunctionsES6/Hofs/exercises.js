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
  books.map((valueIndice) =>
    console.log(
      `${valueIndice.name} - ${valueIndice.genre} - ${valueIndice.author.name}`
    )
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
// slow and steady
const fantasyOrScienceFictionTipped = () => {
  const ficFanty = [];
  books.filter((book) => {
    if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
      ficFanty.push(book);
    }
  });
  return ficFanty;
};
// console.log(fantasyOrScienceFictionTipped());

//One Liner
const fantasyOrScienceFictionOneLiner = () =>
  books.filter((book) =>
    book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
      ? book
      : null
  );
// console.log(fantasyOrScienceFictionOneLiner());

//Q04
// slow and steady
function oldBooksOrderedTipped() {
  const oldBooks = [];
  const actualYear = 2022;
  books.filter((book) => {
    if (actualYear - book.releaseYear > 60) {
      oldBooks.push(book);
    }
  });
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}
// console.log(oldBooksOrdered());

// One Liner
const oldBooksOrderedOneLiner = () =>
  books
    .filter((book) => (2022 - book.releaseYear > 60 ? book : null))
    .sort((a, b) => a.releaseYear - b.releaseYear);
// console.log(oldBooksOrderedOneLiner());

//Q05
// One Liner
const fantasyOrScienceFictionMap = () =>
  books
    .filter((book) =>
      book.genre === 'Fantasia' || book.genre === 'Ficção Científica'
        ? book
        : null
    )
    .map((elements) => elements.author.name)
    .sort();

// console.log(fantasyOrScienceFictionMap());

//Q06
// One Liner
const oldBooksOrderedOneLinerMAP = () =>
  books
    .filter((book) => (2022 - book.releaseYear > 60 ? book : null))
    .sort((a, b) => a.releaseYear - b.releaseYear)
    .map((element) => element.name);
// console.log(oldBooksOrderedOneLinerMAP());

//Q07
function authorWith3DotsOnName() {
return books.filter((element) => {
if ( element.author.name[1] === '.' && element.author.name[4] === '.' && element.author.name[7] === '.'){
  return element;
}
}).map((element) => element.name)

}
console.log(authorWith3DotsOnName());
