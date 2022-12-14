import { INTEGER, Model, STRING } from 'sequelize';
import db from './index';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

User.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    // modelName: 'Users',
    // tableName: 'Users',
    timestamps: false,
    //! com o underscored true aqui o Users vira users
    //! sem o underscored aqui users vira Users
    // underscored: true,
    paranoid: true,
  }
);

//  Note we added the option paranoid: true to our model; this imposes a soft delete on the model by adding a deletedAt attribute that marks records as deleted when invoking the destroy method.

export default User;
