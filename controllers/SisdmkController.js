import { kabkota, propinsi } from "../models/RegionalModel.js";
import { data_pm, data_sisdmk, data_sisdmk_pekerjaan, trans_final } from "../models/SisdmkModel.js";


// export const getListNakesbyCodeFaskes = async (req, res) => {
//     trans_final.findOne({
//         where: {
//             kode_faskes: req.query.kodefaskes
//         }
//     }).then((results) => {
//         const idFaskes = results.dataValues.id_faskes;
//         data_sisdmk.findAll({
//             attributes: ["NAMA"],
//             where: {
//                 id_faskes: idFaskes,

//             },
//             include: {
//                 model: data_sisdmk_pekerjaan,
//                 attributes: ["JENIS_SDMK", "SIP", "STR"]
//             }
//         }).then((resultsdata) => {
//             res.status(200).send({
//                 status: true,
//                 message: "data found",
//                 dataRS: results,
//                 dataNakes: resultsdata,
//             });
//         }).catch((err) => {
//             res.status(422).send({
//                 status: false,
//                 message: err,
//             });
//             return;
//         })
//     })
// }


///////////////////////////////////////

// export const getListNakesbyCodeFaskes = async (req, res) => {
//     trans_final.findOne({
//         where: {
//             kode_faskes: req.query.kodefaskes
//         }
//     }).then((results) => {
//         const idFaskes = results.dataValues.id_faskes;
//         data_pm.findOne({
//             attributes: ["nama_pm"],
//             where: {
//                 id_faskes: idFaskes
//             }
//         }).then((resultsFasyankes) => {
// data_sisdmk.findAll({
//     attributes: ["NAMA"],
//     where: {
//         id_faskes: idFaskes,

//     },
//     include: {
//         model: data_sisdmk_pekerjaan,
//         attributes: ["JENIS_SDMK", "SIP", "STR"]
//     }
//             })
//         }).then((resultsdata) => {
//             res.status(200).send({
//                 status: true,
//                 message: "data found",
//                 dataRS: resultsFasyankes.dataValues.nama_pm,
//                 dataNakes: resultsdata,
//             });
//         }).catch((err) => {
//             res.status(422).send({
//                 status: false,
//                 message: err,
//             });
//             return;
//         })
//     })
// }



// export const getListNakesbyCodeFaskes = async (req, res) => {
//     trans_final.findOne({
//         where: {
//             kode_faskes: req.query.kodefaskes
//         }
//     }).then((results) => {
//         const idFaskes = results.dataValues.id_faskes;
//         data_pm.findOne({
//             attributes: ["nama_pm"],
//             where: {
//                 id_faskes: idFaskes
//             }
//         }).then((resultsFasyankes) => {
//             res.status(200).send({
//                 status: true,
//                 message: "data found",
//                 kodeFasyankes: results.dataValues.kode_faskes_baru,
//                 namaFasyankes: resultsFasyankes.dataValues.nama_pm,

//             });
//         }).catch((err) => {
//             res.status(422).send({
//                 status: false,
//                 message: err,
//             });
//             return;
//         })
//     })
// }



export const getListNakesbyCodeFaskes = async (req, res) => {
    trans_final.findOne({
        where: {
            kode_faskes: req.query.kodefaskes
        }
    }).then((results) => {
        const idFaskes = results.dataValues.id_faskes;
        data_pm.findOne({
            attributes: ["nama_pm"],
            where: {
                id_faskes: idFaskes
            }
        }).then((resultsFasyankes) => {
            data_sisdmk.findAll({
                attributes: [["NAMA", "nama"]],
                where: {
                    id_faskes: idFaskes,
                },
                include: {
                    model: data_sisdmk_pekerjaan, as: "detail_pekerjaan",
                    attributes: [["JENIS_SDMK", "spesialisasi"], ["SIP", "sip"], ["STR", "str"]]
                }
            }).then((resultsNakes) => {
                res.status(200).send({
                    status: true,
                    message: "data found",
                    data: {
                        kodeFasyankes: results.dataValues.kode_faskes_baru,
                        namaFasyankes: resultsFasyankes.dataValues.nama_pm,
                        dataNakes: resultsNakes
                    }
                });
            }).catch((err) => {
                res.status(422).send({
                    status: false,
                    message: err,
                });
                return;
            })
        })
    })
}

export const getDataFasyankes = async (req, res) => {
    trans_final.findOne({
        where: {
            kode_faskes: req.query.kodefaskes
        }
    }).then((results) => {
        const idFaskes = results.dataValues.id_faskes;
        data_pm.findOne({
            attributes: ["nama_pm", "alamat_faskes", "id_prov_pm", "id_kota_pm"],
            where: {
                id_faskes: idFaskes
            }
        }).then((resultsFasyankes) => {
            const idprop = resultsFasyankes.dataValues.id_prov_pm;
            propinsi.findOne({
                attributes: ["nama_prop"],
                where: {
                    id_prop: idprop,
                }
            }).then((resultsprop) => {
                const idkabkot = resultsFasyankes.dataValues.id_kota_pm
                kabkota.findOne({
                    attributes: ["nama_kota"],
                    where: {
                        id_kota: idkabkot,
                    }
                }).then((resultskabkot) => {
                    res.status(200).send({
                        status: true,
                        message: "data found",
                        data: {
                            namaFasyankes: resultsFasyankes.dataValues.nama_pm,
                            propinsi: resultsprop.dataValues.nama_prop,
                            kabKota: resultskabkot.dataValues.nama_kota,
                            alamat: resultsFasyankes.dataValues.alamat_faskes,
                        }
                    });
                }).catch((err) => {
                    res.status(422).send({
                        status: false,
                        message: err,
                    });
                    return;
                })
            })

        })
    })
}



// const namakabkota = kabkota.findOne({
//     attributes: ["nama_kota"],
//     where: {
//         id_prop: idkabkot,
//     }
// })