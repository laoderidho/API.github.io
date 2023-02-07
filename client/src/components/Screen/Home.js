import React, { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

  useEffect(()=>{
    getData()
  }, []);

  const [data, setData] = useState([]);

  const getData = async ()=>{
    const res = await axios.get("https://62236b7e3af069a0f9a1d1c8.mockapi.io/users");
    setData(res.data)
  }

  return (
    <div className="container mt-5" >
      <a href="/add" className="btn btn-primary"> <i className="fa-solid fa-plus"></i> tambah Mahasiswa</a>
       <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama</th>
              <th>NIM</th>
              <th>Jurusan</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item)=>(
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.Nama}</th>
              <th>{item.NIM}</th>
              <th>{item.Jurusan}</th>
            </tr>
          ))}
          </tbody>
       </table>
    </div>
  );
};

export default Home;
