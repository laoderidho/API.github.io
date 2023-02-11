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

  const deleteUser = async (id)=>{
      try{
        await axios.delete(`https://62236b7e3af069a0f9a1d1c8.mockapi.io/users/${id}`);
        getData();
        alert(`data yang ber ID ${id} Telah di hapus`)
      }catch(err){
        console.log(err)
      }
  }
  return (
    <div className="container mt-5" >
      <a href="/add" className="btn btn-primary"> <i className="fa-solid fa-plus"></i> tambah Mahasiswa</a>
       <table class="table table-striped mt-3">
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
              <td>{item.id}</td>
              <td>{item.Nama}</td>
              <td>{item.NIM}</td>
              <td>{item.Jurusan}</td>
              <td> <a href={`/edit/${item.id}`} className='btn btn-success'> <i class="fa-solid fa-pen-to-square"></i>Edit</a></td>
              <td><button onClick={()=>deleteUser(item.id)} className="btn btn-danger" ><i class="fa-solid fa-trash"></i>Hapus</button></td>
            </tr>
          ))}
          </tbody>
       </table>
    </div>
  );
};

export default Home;
