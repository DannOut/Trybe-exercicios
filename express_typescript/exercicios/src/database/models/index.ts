import { Sequelize } from 'sequelize';
// para trazer tudo do config, precisa ser feito dessa forma
import * as config from '../config/database';

export default new Sequelize(config);
