import Navbar from "../../components/Navbar";
import './Gudang.css'
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Gudang = () => {

    const [data, setData] = React.useState([])

    const [namaProduk, setNamaProduk] = React.useState('')
    const [jenisProduk, setJenisProduk] = React.useState('')
    const [jumlahStok, setJumlahStok] = React.useState('')
    const [harga, setHarga] = React.useState('')
    const [keteranganHarga, setKeteranganHarga] = React.useState('')
    const [tanggalMasuk, setTanggalMasuk] = React.useState('')

    const [updateNamaProduk, setUpdateNamaProduk] = React.useState('')
    const [updateJenisProduk, setUpdateJenisProduk] = React.useState('')
    const [updateJumlahStok, setUpdateJumlahStok] = React.useState('')
    const [updateHarga, setUpdateHarga] = React.useState('')
    const [updateKeteranganHarga, setUpdateKeteranganHarga] = React.useState('')
    const [updateTanggalMasuk, setUpdateTanggalMasuk] = React.useState('')

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await Axios.get('http://localhost:3001/barang');
            setData(response.data);
            console.log("Data retrieved successfully: ", response.data);
        } catch (err) {
            console.error("Error fetching data: ", err);
        }
    }

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

            console.log("success insert items data")
            window.location.reload()
            setNamaProduk('')
            setJenisProduk('')
            setJumlahStok('')
            setHarga('')
            setKeteranganHarga('')
            setTanggalMasuk('')
            getData();
        } catch (err) {
            console.error("Error: ", err)
        }
        console.info(tanggalMasuk)
    }

    const updateDataBarang = (id) => {
        Axios.put(`http://localhost:3001/update`, {
            id: id,
            namaProduk: updateNamaProduk,
            jenisProduk: updateJenisProduk,
            jumlahStok: updateJumlahStok,
            harga: updateHarga,
            keteranganHarga: updateKeteranganHarga,
            tanggalMasuk: updateTanggalMasuk,
        }).then(() => {
            window.location.reload()
            setUpdateNamaProduk('')
            setUpdateJenisProduk('')
            setUpdateJumlahStok('')
            setUpdateHarga('')
            setUpdateKeteranganHarga('')
            setUpdateTanggalMasuk('')
            getData();
        }).catch((err) => {
            console.error("Error updating data: ", err);
        })
    };

    const deleteDataBarang = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then(() => getData())
    }

    return (
        <div className="gudang-container">
            <Navbar />
            <div className="form-container drop-shadow-xl">
                <h1 className="title">Daftar Barang</h1>
                <div className="input-data">
                    <div className="input-container">
                        <label>Nama Produk</label>
                        <input type="text" onChange={(e) => setNamaProduk(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Jenis Produk</label>
                        <input type="text" onChange={(e) => setJenisProduk(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Jumlah Stok</label>
                        <input type="number" onChange={(e) => setJumlahStok(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Harga</label>
                        <input type="text" onChange={(e) => setHarga(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Keterangan Harga</label>
                        <input type="text" onChange={(e) => setKeteranganHarga(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label>Tanggal Masuk</label>
                        <input type="date" required onChange={(e) => setTanggalMasuk(e.target.value)} />
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
                                    type="text"
                                    placeholder={value.nama_barang}
                                    // value={updateNamaProduk}
                                    onChange={(e) => setUpdateNamaProduk(e.target.value)}
                                // disabled
                                />
                                <input
                                    type="text"
                                    placeholder={value.jenis_produk}
                                    // value={updateJenisProduk}
                                    onChange={(e) => setUpdateJenisProduk(e.target.value)}
                                // disabled
                                />
                                <input
                                    type="number"
                                    placeholder={value.jumlah_stok}
                                    // value={updateJumlahStok}
                                    onChange={(e) => setUpdateJumlahStok(e.target.value)}
                                // disabled
                                />
                                <input
                                    type="text"
                                    placeholder={value.harga}
                                    // value={updateHarga}
                                    onChange={(e) => setUpdateHarga(e.target.value)}
                                // disabled
                                />
                                <input
                                    type="text"
                                    placeholder={value.keterangan_harga}
                                    // value={updateKeteranganHarga}
                                    onChange={(e) => setUpdateKeteranganHarga(e.target.value)}
                                // disabled
                                />
                                <input
                                    type="date"
                                    // placeholder={value.tanggal_masuk}
                                    value={value.tanggalMasuk}
                                    onChange={(e) => setUpdateTanggalMasuk(e.target.value)}
                                // disabled
                                />
                                <div className="button-container">
                                    <button className="update" onClick={() => updateDataBarang(value.id)}>Update</button>
                                    <button className="delete" onClick={() => deleteDataBarang(value.id)}>Delete</button>
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