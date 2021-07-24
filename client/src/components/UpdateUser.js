import { React, useState } from 'react'
import axios from 'axios'
import './form.css'

function UpdateUser() {
    const [userinfo, setUserinfo] = useState({
        fname: undefined,
        Age: undefined,
        id:undefined,
        email:undefined
    })

    const handlechange = (event) => {
        const value = event.target.value
        setUserinfo({
            ...userinfo,
            [event.target.name]: value
        })
    }
    const handleupdate = async (id) => {
        console.log(id)
        try {
            const updateduser = await axios.patch("http://localhost:3000/create_user/"+id, {
                Name: userinfo.fname,
                Age: userinfo.Age,
                Email:userinfo.email
            })
            alert("USER DETAILS UPDATED SUCCESSFULLY")
            console.log(updateduser)
        } catch (err) {
            console.log(err)

        }
    }
    return (
        <div className= "formstyle">
            <label className="labelstyle">ID</label>
            <input className = "inputstyle" type = "text" name="id" value = {userinfo.id} onChange={handlechange}></input>
            <label className="labelstyle">Name</label>
            <input className = "inputstyle" type = "text" name="fname" value = {userinfo.fname} onChange={handlechange}></input>
            <label className="labelstyle">Age</label>
            <input className = "inputstyle" type = "text" name="Age" value = {userinfo.Age} onChange={handlechange}></input>
            <label className="labelstyle">Email</label>
            <input className = "inputstyle" type = "text" name="email" value = {userinfo.email} onChange={handlechange}></input>
            <button className = "fill" type="submit" onClick={()=>handleupdate(userinfo.id)}>Submit</button>
        </div>
    )
}


export default UpdateUser