import React from "react";
import FormHandler from "../../helper/FormHandler";

const FormGuru = (props) => {
    return (
        <div>
            <label htmlFor="namaGuru">Masukkan Nama Guru</label>
            <input type="text" 
            id="namaGuru" 
            onChange={(e)=>props.changeName(e.target.value)} 
            value={props.name}/>

            <p style={{ color:props.color }}>{props.name}</p>
        </div>
    )
}

// menggunakan HOC
export default FormHandler(FormGuru);