import './Register.css'
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

const Register = () => {

    let navigate = useNavigate();

    const [nama, setNama] = React.useState('');
    const [jenisKelamin, setJenisKelamin] = React.useState('');
    const [alamat, setAlamat] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [tanggalLahir, setTanggalLahir] = React.useState('');
    const [nomorTelepon, setNomorTelepon] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [konfirmasiPassword, setKonformasiPassword] = React.useState('');

    const registerAccount = () => {
        if (password == konfirmasiPassword) {
            // penjelasan Axios.post('PORT-database', 'body-yang-di-db)
            Axios.post('http://localhost:3001/register', {
                nama: nama,
                jenisKelamin: jenisKelamin,
                alamat: alamat,
                email: email,
                tanggalLahir: tanggalLahir,
                nomorTelepon: nomorTelepon,
                password: password,
            }).then(() => {
                console.log("success")
            })
            navigate('/login')
            console.log("success")
        } else {
            alert("Password yang dimasukkan tidak sesuai dengan Konfirmasi Password")
        }
    }

    return (
        <div className="body">
            <div className="wrapper-register">
                <form className="register-form" action="">
                    <h1 className='title'>Register</h1>

                    {/* Nama Panjang */}
                    <div className="input-box">
                        <div className="input-field">
                            <label>Nama Lengkap</label>
                            <input
                                type="text" placeholder="Nama Lengkap" required
                                onChange={(event) => {setNama(event.target.value) }}
                            />
                        </div>

                        {/* Jenis kelamin */}
                        <div className="input-field">
                            <label>Jenis Kelamin</label> 
                            <select
                                value={jenisKelamin}
                                onChange={(event) => {setJenisKelamin(event.target.value)}}
                            >
                                <option value="" disabled>Select Jenis Kelamin</option>
                                <option value="Laki laki">Laki laki</option>
                                <option value="Perempuan">Perempuan</option>
                            </select>

                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="input-box">
                        <div className="input-field">
                        <label>Alamat</label>
                            <input
                                type="text" placeholder="Alamat" required
                                onChange={(event) => {setAlamat(event.target.value) }}
                            />
                        </div>

                        {/* Email */}
                        <div className="input-field">
                            <label>Email</label>
                            <input
                                type="email" placeholder="Email" required
                                onChange={(event) => {setEmail(event.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="input-box">
                        <div className="input-field">
                            <label>Tanggal Lahir</label>
                            <input
                                type="date" placeholder="Tanggal Lahir" required
                                onChange={(event) => {setTanggalLahir(event.target.value) }}
                            />
                        </div>

                        {/* Nomor Telpon */}
                        <div className="input-field">
                            <label>Nomor Telepon</label>
                            <input
                                type="text" placeholder="Nomor Telpon" required
                                onChange={(event) => {setNomorTelepon(event.target.value) }}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="input-box">
                        <div className="input-field">
                            <label>Password</label>
                            <input
                                type="password" placeholder="Password" required
                                onChange={(event) => {setPassword(event.target.value) }}
                            />
                        </div>

                        {/* Konfirmasi Password */}
                        <div className="input-field">
                            <label>Konfirmasi Password</label>
                            <input
                                type="password" placeholder="Konfirmasi Password" required
                                onChange={(event) => {setKonformasiPassword(event.target.value) }}
                            />
                        </div>
                    </div>

                    <label className='checkbox-container'>
                        <input type="checkbox"/>
                            Saya dengan ini menyatakan bahwa informasi yang diberikan di atas
                            adalah benar dan tepat
                        
                    </label>

                    <button type="submit" className="btn" onClick={registerAccount}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Register;