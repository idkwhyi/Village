const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'smart_village_test',
});

// REGISTER ROUTER HERE
app.post('/register', (req, res) => {
    const nama = req.body.nama
    const jenisKelamin = req.body.jenisKelamin
    const alamat = req.body.alamat
    const email = req.body.email
    const tanggalLahir = req.body.tanggalLahir
    const nomorTelepon = req.body.nomorTelepon
    const password = req.body.password

    db.query(
        'INSERT INTO user_data (nama, jenis_kelamin, alamat, email, tanggal_lahir, nomor_telepon, password) VALUES(?,?,?,?,?,?,?)', 
        [nama, jenisKelamin, alamat, email, tanggalLahir, nomorTelepon, password], 
        (err, result) => {
            if (err){
                console.log(err)
            } else {
                res.send("Values Inserted")
            }
        }
    )
})

// LOGIN ROUTER HERE
app.post('/login', (req, res) => {
    const nama = req.body.nama
    const password = req.body.password

    db.query(
        'SELECT * FROM user_data WHERE nama=? AND password=?', 
        [nama, password], 
        (err, result) => {
            if(err) {
                res.send({err: err})
            } 
                
            if(result.length > 0){
                res.send(result)
            } else {
                res.send({message: "Wrong username/password"})
            }
            
        }
    );
})

// GUDANG ROUTER HERE
// post data barang
app.post('/tambah', (req, res) => {
    const namaProduk = req.body.namaProduk
    const jenisProduk = req.body.jenisProduk
    const jumlahStok = req.body.jumlahStok
    const harga = req.body.harga
    const keteranganHarga = req.body.keteranganHarga
    const tanggalMasuk = req.body.tanggalMasuk

    db.query(
        'INSERT INTO barang (nama_barang, jenis_produk, jumlah_stok, harga, keterangan_harga, tanggal_masuk) VALUES (?,?,?,?,?,?)', 
        [namaProduk, jenisProduk, jumlahStok, harga, keteranganHarga, tanggalMasuk],
        (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("Berhasil Memasukkan Data Barang")
            }
        }

    )
})




const PORT = 3001;
app.listen (PORT, () => {
    console.log('Your server is running on port' + PORT)
})