import { DataTypes, QueryTypes } from "sequelize";
import { databaseReview } from "../config/Database.js";

export const review = databaseReview.define("review", {
  fasyankes_code: {
    type: DataTypes.STRING,
  },
  str_code: {
    type: DataTypes.STRING,
  },
  health_worker_name: {
    type: DataTypes.STRING,
  },
  specialization: {
    type: DataTypes.STRING,
  },
  checkin_time: {
    type: DataTypes.DATE,
  },
  review_time: {
    type: DataTypes.DATE,
  },
});

export const reviewDetail = databaseReview.define("review_detail", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  nama: {
    type: DataTypes.STRING,
  },

  review_id: {
    type: DataTypes.STRING,
  },
  question: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  answer: {
    type: DataTypes.STRING,
  },
});

review.hasMany(reviewDetail, { foreignKey: "review_id" });
reviewDetail.belongsTo(review, { foreignKey: "id" });
