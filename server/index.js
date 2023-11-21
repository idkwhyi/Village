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

// make a request from localhost:3001/create
app.post('/register', (req, res) => {
    const nama = req.body.nama
    const jenisKelamin = req.body.jenisKelamin
    const alamat = req.body.alamat
    const email = req.body.email
    const tanggalLahir = req.body.tanggalLahir
    const nomorTelepon = req.body.nomorTelepon
    const password = req.body.password
    // const konfirmasiPassword = req.body.konformasiPassword

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


const PORT = 3001;
app.listen (PORT, () => {
    console.log('Your server is running on port' + PORT)
})