import React, { useEffect, useState } from "react";
import axios from 'axios'

const Home = () => {

  useEffect(()=>{

  }, []);

  const [data, setData] = useState([]);

  const getData = async ()=>{
    const res = await axios.get('')
  }

  return (
    <div className="container" >
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
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
       </table>
    </div>
  );
};

export default Home;
