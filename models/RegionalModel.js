import { DataTypes } from "sequelize";
import { databaseRegfaskes } from "../config/Database.js";


export const propinsi = databaseRegfaskes.define("propinsi", {
    nama_prop: {
        type: DataTypes.STRING
    }
});

export const kabkota = databaseRegfaskes.define("kota", {
    nama_kota: {
        type: DataTypes.STRING
    }
});

propinsi.hasMany(kabkota, { foreignKey: "id_prop" })
kabkota.belongsTo(propinsi, { foreignKey: "id" })

