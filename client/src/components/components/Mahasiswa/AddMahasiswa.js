import axios from 'axios'
import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'

const AddMahasiswa = () => {
  
    const [Nama, setNama] = useState('')
    const [NIM, setNIM] = useState('')
    const [Jurusan, setJurusan] = useState('')
    const navigate = useNavigate();

    const addData = async e=>{
      e.preventDefault();
      try{
          await axios.post("https://62236b7e3af069a0f9a1d1c8.mockapi.io/users",{Nama, NIM, Jurusan})
          navigate('/')
          
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className="container">
      <form onSubmit={addData}>
        <div class="mb-3 mt-3">
          <label for="" className="form-label">
            Masukkan Nama Anda
          </label>
          <input
            type="text"
            placeholder="masukkan Nama"
            className="form-control"
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
            onChange={(e) => setNIM(e.target.value)}
          />
        </div>
        <div class="mb-3 mt-3">
          <select
            name=""
            id=""
            className="form-select"
            onChange={(e) => setJurusan(e.target.value)}
          >
            <option selected>Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
          </select>
        </div>
        <input type="submit" className="btn btn-primary" disabled={!Nama || !NIM || !Jurusan} />
      </form>
    </div>
  );
  }
export default AddMahasiswa