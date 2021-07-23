import { React, useState, useEffect } from 'react'
import axios from 'axios'

function GetAllUsers() {
    const [user, setUser] = useState([])

    useEffect(() => {
        handleretrieveUser()

    }, [])

    const handleretrieveUser = async () => {
        try {
            const users = await axios.get("http://localhost:3000/create_user/user_info")
            console.log(users.data)
            setUser(users.data)

        } catch (err) { console.error(err) }
    }


    return (
        <div>
            <p>HELLO YOU IN GET ALL USERS PAGE</p>
            {/* <button className="submitbutton" onClick={handleretrieveUser}> getusers </button> */}
            <ul >
                {user.map((item, _id) => <li key={_id}>{item._id} {item.Name} {item.Age} </li >)}
            </ul>
        </div>
    )
}


export default GetAllUsers