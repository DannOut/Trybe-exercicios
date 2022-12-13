import { Model, STRING, INTEGER } from 'sequelize';
import Author from './AuthorModel';
import db from './index';

class Book extends Model {
  declare id: number;
  declare title: string;
  declare authorId: number;
  declare genreId: number;
}

Book.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
      allowNull: false,
    },
    authorId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
    genreId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'id',
      },
    },
  },
  { sequelize: db, modelName: 'books', underscored: true, timestamps: false }
);

Book.belongsTo(Author, { foreignKey: 'id' });
Author.hasMany(Book, { foreignKey: 'authorId' });

export default Book;
