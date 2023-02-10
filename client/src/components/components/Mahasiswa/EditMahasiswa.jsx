import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const EditMahasiswa = () => {

    const [Nama, setNama] = useState("");
    const [NIM, setNIM] = useState("");
    const [Jurusan, setJurusan] = useState("");
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      getDataById();
    },[]);   


    const updateData = async e=>{
        e.preventDefault();
        try{
            await axios.put(`https://62236b7e3af069a0f9a1d1c8.mockapi.io/users/${id}`, {Nama, NIM, Jurusan})
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }

    const getDataById = async ()=>{
        const res = await axios.get(`https://62236b7e3af069a0f9a1d1c8.mockapi.io/users/${id}`)
        setNama(res.data.Nama)
        setNIM(res.data.NIM)
        setJurusan(res.data.Jurusan)
    }

  return (
    <div className="container">
      <form onSubmit={updateData}>
        <div class="mb-3 mt-3">
          <label for="" className="form-label">
            Masukkan Nama Anda
          </label>
          <input
            type="text"
            placeholder="masukkan Nama"
            className="form-control"
            value={Nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div class="mb-3 mt-3">
          <label for="" className="form-label">
            Masukkan NIM Anda
          </label>
          <input
            type="number"
            placeholder="masukkan NIM"
            className="form-control"
            value={NIM}
            onChange={(e) => setNIM(e.target.value)}
          />
        </div>
        <div class="mb-3 mt-3">
          <select
            name=""
            id=""
            value={Jurusan}
            className="form-select"
            onChange={(e) => setJurusan(e.target.value)}
          >
            <option disabled selected>Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
          </select>
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          disabled={!Nama || !NIM || !Jurusan}
        />
      </form>
    </div>
  );
}

export default EditMahasiswa