import Navbar from "../../components/Navbar";
import './Gudang.css'
import React, { useState } from "react";
import Axios from "axios";
import axios from "axios";

const Gudang = () => {

    const [data, setData] = React.useState([])

    const [namaProduk, setNamaProduk] = React.useState('')
    const [jenisProduk, setJenisProduk] = React.useState('')
    const [jumlahStok, setJumlahStok] = React.useState('')
    const [harga, setHarga] = React.useState('')
    const [keteranganHarga, setKeteranganHarga] = React.useState('')
    const [tanggalMasuk, setTanggalMasuk] = React.useState('')
    
    const submitDataBarang = async () => {
        try {
            await Axios.post('http://localhost:3001/tambah', {
                namaProduk: namaProduk,
                jenisProduk: jenisProduk,
                jumlahStok: jumlahStok,
                harga: harga,
                keteranganHarga: keteranganHarga,
                tanggalMasuk: tanggalMasuk,
            })
            // .then(() => {
                console.log("success insert items data")
            // }).catch(error => {
            //     console.error("Error submitting data: ", error)
            // })
            console.info("axios boom")
            
            const response = await Axios.get('http://localhost:3001/barang')
            setData(response.data) 
            console.log("Data retrieved successfully: ", response.data)
        } catch (err) {
            console.error("Error: ", err)
        }
    }



    return (
        <div className="gudang-container">
            <Navbar/>
            <div className="form-container drop-shadow-xl">
                <h1 className="title">Daftar Barang</h1>
                <div className="input-data">
                    <div className="input-container">
                        <label>Nama Produk</label>
                        <input type="text" onChange={(e) => setNamaProduk(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label>Jenis Produk</label>
                        <input type="text" onChange={(e) => setJenisProduk(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label>Jumlah Stok</label>
                        <input type="number" onChange={(e) => setJumlahStok(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label>Harga</label>
                        <input type="text" onChange={(e) => setHarga(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label>Keterangan Harga</label>
                        <input type="text" onChange={(e) => setKeteranganHarga(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label>Tanggal Masuk</label>
                        <input type="date" required onChange={(e) => setTanggalMasuk(e.target.value)}/>
                    </div>
                </div>
                <button onClick={submitDataBarang}>Save</button>
            </div>
            <div className="table">
                <div className="title">Daftar Tabel Barang</div>
                <div className="items-container">
                {data.map((value) => {
                    return (
                        <div className="input-item-container" key={value.id}>
                            <input 
                                value={value.nama_barang}
                                placeholder="Nama barang"
                                // disabled
                            />
                            <input 
                                value={value.jenis_produk}
                                placeholder="Jenis Produk"
                                // disabled
                            />
                            <input 
                                value={value.jumlah_stok}
                                placeholder="Jumlah Stock"
                                // disabled
                            />
                            <input 
                                value={value.harga}
                                placeholder="Harga"
                                // disabled
                            />
                            <input 
                                value={value.keterangan_harga}
                                placeholder="Keterangan Harga"
                                // disabled
                            />
                            <input 
                                value={value.tanggal_masuk}
                                placeholder="Tanggal Masuk"
                                // disabled
                            />
                            <div className="button-container">
                                <button className="update">Update</button>
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                    )
                })}
                    {/* <div className="input-item-container">
                        <input 
                            placeholder="Nama barang"
                            // disabled
                        />
                        <input 
                            placeholder="Jenis Produk"
                            // disabled
                        />
                        <input 
                            placeholder="Jumlah Stock"
                            // disabled
                        />
                        <input 
                            placeholder="Harga"
                            // disabled
                        />
                        <input 
                            placeholder="Keterangan Harga"
                            // disabled
                        />
                        <input 
                            placeholder="Tanggal Masuk"
                            // disabled
                        />
                        <div className="button-container">
                            <button className="update">Update</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div>
                    <div className="input-item-container">
                        <input 
                            placeholder="Nama barang"
                            // disabled
                        />
                        <input 
                            placeholder="Jenis Produk"
                            // disabled
                        />
                        <input 
                            placeholder="Jumlah Stock"
                            // disabled
                        />
                        <input 
                            placeholder="Harga"
                            // disabled
                        />
                        <input 
                            placeholder="Keterangan Harga"
                            // disabled
                        />
                        <input 
                            placeholder="Tanggal Masuk"
                            // disabled
                        />
                        <div className="button-container">
                            <button className="update">Update</button>
                            <button className="delete">Delete</button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Gudang;