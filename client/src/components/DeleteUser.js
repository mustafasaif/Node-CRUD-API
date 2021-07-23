import React, { useState } from 'react'
import axios from 'axios'

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
        <div>
            <label>ENTER USER ID TO BE DELETED</label>
            <input type="text" value={id} name="id" onChange={handlechange}></input>
            <button type="submit" onClick={() => handledelete(id)}> Submit</button>

        </div>
    )
}


export default DeleteUser;