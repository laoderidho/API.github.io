import axios from 'axios'
import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Home from '../../Screen/Home'

const AddMahasiswa = () => {
  
    const [Nama, setNama] = useState('')
    const [NIM, setNIM] = useState('')
    const [Jurusan, setJurusan] = useState('')
    const [notif, setNotif] = useState(false);
    const [message, setMessage] = useState('')
    const navigate = useNavigate();

    const addData = async e=>{
      e.preventDefault();
      try{
          await axios.post("https://62236b7e3af069a0f9a1d1c8.mockapi.io/users",{Nama, NIM, Jurusan})
          navigate('/')
          setTimeout(() => {
            setMessage("Data berhasil ditambahkan");
            setNotif(true);
          }, 2000);
      }catch(err){
        console.log(err)
      }
    }

  return (
    <div className="container">
    {notif && (
       <Home message = {message}/>
     )}
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
            <option disabled selected>Pilih Jurusan</option>
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