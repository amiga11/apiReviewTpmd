import { DataTypes } from "sequelize";
import { databaseRegfaskes } from "../config/Database.js";


export const trans_final = databaseRegfaskes.define("trans_final", {
    id_faskes: {
        type: DataTypes.INTEGER
    },

    kode_faskes_baru: {
        type: DataTypes.STRING
    },
    kode_regional_link: {
        type: DataTypes.STRING
    }
});

export const data_sisdmk = databaseRegfaskes.define("data_sisdmk", {
    id_faskes: {
        type: DataTypes.INTEGER
    },
    NIK: {
        type: DataTypes.STRING
    },
    NAMA: {
        type: DataTypes.STRING
    },
    JENIS_KELAMIN: {
        type: DataTypes.STRING
    },
    TEMPAT_LAHIR: {
        type: DataTypes.STRING
    },
    TANGGAL_LAHIR: {
        type: DataTypes.STRING
    },
    KODE_PROV: {
        type: DataTypes.INTEGER
    },
    NAMA_PROV: {
        type: DataTypes.STRING
    },
    KODE_KAB: {
        type: DataTypes.STRING
    },
    NAMA_KAB: {
        type: DataTypes.STRING
    },
    ALAMAT: {
        type: DataTypes.TEXT
    }
})

export const data_sisdmk_pekerjaan = databaseRegfaskes.define("data_sisdmk_pekerjaan", {
    data_sisdmk_id: {
        type: DataTypes.INTEGER
    },
    id_faskes: {
        type: DataTypes.INTEGER
    },
    ALAMAT: {
        type: DataTypes.TEXT
    },
    ID_JENIS_SDMK: {
        type: DataTypes.STRING
    },
    JENIS_SDMK: {
        type: DataTypes.STRING
    },
    KABKOT: {
        type: DataTypes.STRING
    },
    KODE_KAB: {
        type: DataTypes.INTEGER
    },
    KODE_PROV: {
        type: DataTypes.INTEGER
    },
    KODE_UNIT: {
        type: DataTypes.STRING
    },
    NIP: {
        type: DataTypes.STRING
    },
    PROVINSI: {
        type: DataTypes.STRING
    },
    SIP: {
        type: DataTypes.STRING
    },
    STATUS: {
        type: DataTypes.STRING
    },
    STR: {
        type: DataTypes.STRING
    },
    TANGGAL_AKHIR: {
        type: DataTypes.STRING
    },
    TANGGAL_AKHIR_STR: {
        type: DataTypes.STRING
    },
    TANGGAL_MULAI: {
        type: DataTypes.STRING
    },
    TANGGAL_SIP: {
        type: DataTypes.STRING
    },
    TANGGAL_STR: {
        type: DataTypes.STRING
    },
    UNIT: {
        type: DataTypes.STRING
    },

})

export const data_pm = databaseRegfaskes.define("data_pm", {
    id_kategori: {
        type: DataTypes.INTEGER
    },
    berjejaring_fktp: {
        type: DataTypes.STRING
    },
    nama_pm: {
        type: DataTypes.STRING
    },
    id_faskes: {
        type: DataTypes.INTEGER
    },
    no_sip: {
        type: DataTypes.STRING
    },
    dokumen_sip: {
        type: DataTypes.TEXT
    },
    tgl_berakhir_sip: {
        type: DataTypes.STRING
    },
    no_str: {
        type: DataTypes.STRING
    },
    dokumen_str: {
        type: DataTypes.TEXT
    },
    tgl_berakhir_str: {
        type: DataTypes.STRING
    },
    id_prov_pm: {
        type: DataTypes.INTEGER
    },
    id_kota_pm: {
        type: DataTypes.INTEGER
    },
    id_camat_pm: {
        type: DataTypes.INTEGER
    },
    alamat_faskes: {
        type: DataTypes.TEXT
    },
    latitude: {
        type: DataTypes.STRING
    },
    longitude: {
        type: DataTypes.STRING
    },
    no_telp: {
        type: DataTypes.STRING
    },
    no_hp: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    no_ktp: {
        type: DataTypes.STRING
    },
    jam_praktik_senin_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_senin_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_selasa_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_selasa_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_rabu_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_rabu_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_kamis_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_kamis_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_jumat_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_jumat_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_sabtu_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_sabtu_sore: {
        type: DataTypes.STRING
    },
    jam_praktik_minggu_pagi: {
        type: DataTypes.STRING
    },
    jam_praktik_minggu_sore: {
        type: DataTypes.STRING
    },
    puskesmas_pembina: {
        type: DataTypes.TEXT
    },
    dokumen_registrasi: {
        type: DataTypes.TEXT
    },
    status_pm: {
        type: DataTypes.STRING
    },
    cek_nik: {
        type: DataTypes.STRING
    },
    cek_nama_pm: {
        type: DataTypes.STRING
    },
    cek_no_sip: {
        type: DataTypes.STRING
    },
    cek_tgl_berakhir_sip: {
        type: DataTypes.STRING
    },
    cek_no_str: {
        type: DataTypes.STRING
    },
    cek_tgl_berakhir_str: {
        type: DataTypes.STRING
    },
    jumlah_peserta: {
        type: DataTypes.STRING
    },
    rasio_dokter_peserta: {
        type: DataTypes.STRING
    },
    menyelenggarakan_prolanis: {
        type: DataTypes.STRING
    },
    waktu_layanan_dokter_per_pasien: {
        type: DataTypes.STRING
    },
    kewenangan_tambahan: {
        type: DataTypes.STRING
    },
    berjejaring_puskesmas: {
        type: DataTypes.STRING
    },
    program_prioritas: {
        type: DataTypes.STRING
    },
    dokumen_perubahan: {
        type: DataTypes.STRING
    },
    program_prioritas_lainnya: {
        type: DataTypes.STRING
    },
    kewenangan_tambahan_lainnya: {
        type: DataTypes.STRING
    },
    rme: {
        type: DataTypes.INTEGER
    },
})


data_sisdmk.hasMany(data_sisdmk_pekerjaan, { as: 'detail_pekerjaan', foreignKey: "data_sisdmk_id" })
data_sisdmk_pekerjaan.belongsTo(data_sisdmk, { foreignKey: "id" })