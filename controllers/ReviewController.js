import { databaseReview } from "../config/Database.js";
import { review, reviewDetail } from "../models/ReviewModel.js";
import Joi from "joi";

export const insertReview = async (req, res) => {
  const schema = Joi.object({
    doctor: Joi.object().keys({
      fasyankes_code: Joi.string().required(),
      str_code: Joi.string().required(),
      health_worker_name: Joi.string().required(),
      specialization: Joi.string().required(),
    }),
    info: Joi.object().keys({
      ['checkin-time']: Joi.string().required(),
      ['review-time']: Joi.string().required(),
    }),
    reviews: Joi.array()
      .items(Joi.object().keys({
        question: Joi.string().required(),
        description: Joi.string().required(),
        answer: Joi.string().required(),
      })
      )
      .required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(400).send({
      error: true,
      message: error.details[0].message,
    });
    return;
  }


  console.log(req.body)

  const transaction = await databaseReview.transaction();

  try {
    const rlInsertHeader = await review.create(
      {
        fasyankes_code: req.body.doctor.fasyankes_code,
        str_code: req.body.doctor.str_code,
        health_worker_name: req.body.doctor.health_worker_name,
        specialization: req.body.doctor.specialization,
        checkin_time: req.body.info['checkin-time'],
        review_time: req.body.info['review-time'],
      },
      { transaction: transaction }
    );

    const dataDetail = req.body.reviews.map((value, index) => {
      return {
        question: value.question,
        description: value.description,
        answer: value.answer,
        review_id: rlInsertHeader.id,
      };
    });

    await reviewDetail.bulkCreate(dataDetail, {
      transaction: transaction,
    });

    await transaction.commit();
    res.status(201).send({
      code: 200,
      success: true,
      data: "Data Berhasil Diambil.",
      message: ""
    });
  } catch (error) {
    await transaction.rollback();
    console.log(error);
    res.status(400).send({
      status: false,
      message: "Data Tidak Berhasil Disimpan",
      error: error,
    });
  }
};
