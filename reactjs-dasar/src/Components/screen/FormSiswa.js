import React from "react";
import FormHandler from "../../helper/FormHandler";

const FormSiswa = (props) => {
    console.log(props);
    return (
        <div>
            <label htmlFor="namaSiswa">Masukkan Nama Siswa</label>
            <input 
            type="text" 
            id="namaSiswa" 
            onChange={(e)=> props.changeName(e.target.value)} 
            value={props.name}/>

            <p style={{ color:props.color }}>{props.name}</p>
        </div>
    )
}

// menggunakan HOC
export default FormHandler(FormSiswa);