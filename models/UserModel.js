import { DataTypes, QueryTypes } from "sequelize";
import { databaseReview } from "../config/Database.js";

export const users = databaseReview.define(
  "users",
  {
    nama: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

export const insertData = (data, callback) => {
  const sqlInsert =
    "INSERT INTO users (nama,email,password) VALUES ( ? )";
  databaseReview
    .query(sqlInsert, {
      type: QueryTypes.INSERT,
      replacements: [data],
    })
    .then((res) => {
      callback(null, res);
    })
    .catch((error) => {
      callback(error, null);
    });
};
