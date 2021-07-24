import React, { useState } from 'react'
import axios from 'axios'
import './Singleuser.css'
function DeleteUser() {
    const [id, setid] = useState("")

    const handlechange = (event) => {
        const value = event.target.value
        setid(value)
        console.log(id)
    }
    const handledelete = async (id) => {
        try {
            const deleteduser = await axios.delete("http://localhost:3000/create_user/" + id)
            console.log(deleteduser)
            alert("USER DELETED SUCCESSFULLY")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className= "formstylesingle">
            <label className="labelstyle1">ENTER USER ID TO BE DELETED</label>
            <input className = "inputstyle1" type="text" value={id} name="id" onChange={handlechange}></input>
            <button className="buttonstyle  " type="submit" onClick={() => handledelete(id)}> Submit</button>

        </div>
    )
}


export default DeleteUser;