import 'dotenv/config';
import { Dialect, Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER as string,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) as number,
  dialect: 'mysql' as Dialect,
};

export = config;
