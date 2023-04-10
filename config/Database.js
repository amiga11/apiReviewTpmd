import { Sequelize } from "sequelize";

export const databaseReview = new Sequelize(
  process.env.DB_DATABASE_REVIEW,
  process.env.DB_USERNAME_REVIEW,
  process.env.DB_PASSWORD_REVIEW,
  {
    host: process.env.DB_HOST_REVIEW,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    dialectOptions: {
      // useUTC: false
    },
    timezone: "+07:00", //for writing to database
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export const databaseRegfaskes = new Sequelize(
  process.env.DB_DATABASE_REGFASKES,
  process.env.DB_USERNAME_REGFASKES,
  process.env.DB_PASSWORD_REGFASKES,
  {
    host: process.env.DB_HOST_REGFASKES,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: false,
    },
    dialectOptions: {
      // useUTC: false
    },
    timezone: "+07:00", //for writing to database
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);