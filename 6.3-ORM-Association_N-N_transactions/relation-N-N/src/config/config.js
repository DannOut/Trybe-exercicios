require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'root',
  host: process.env.MYSQL_HOST || 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'books_database_development',
  },
  test: {
    ...config,
    database: 'books_database_test',
    logging: false,
  },
  production: {
    ...config,
    database: 'books_database_production',
  },
};
