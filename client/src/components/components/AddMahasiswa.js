import axios from 'axios'
import React, {useState} from 'react'

const AddMahasiswa = () => {
    const [name, setName] = useState('')
    const [nim, setNim] = useState('')
    const [jurusan, setJurusan] = useState('')

    const addData = async ()=>{
        const res = await axios.post("https://62236b7e3af069a0f9a1d1c8.mockapi.io");
        
    }

  return (
    <div>

    </div>
  )
  }
export default AddMahasiswa