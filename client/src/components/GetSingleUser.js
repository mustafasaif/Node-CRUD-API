import { React, useState } from 'react'
import axios from 'axios'
import { isUndefined } from 'lodash';

function GetSingleUser() {
    const [user, setUser] = useState();
    const [user_id, setUserid] = useState("");
    
    const handleChange = (event) => {
        const value = event.target.value
        setUserid(value)
        console.log(user_id)
    }
    const handleRetrieveOneUser = async (user_id) => {
        console.log({ user_id })

        try {
            const userinfo = await axios.get("http://localhost:3000/create_user/" + user_id)
            console.log(userinfo.data)
            setUser(userinfo.data)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div>
            <label>Enter the user ID</label>
            <input type="text" name="user_id" value={user_id} onChange={handleChange}></input>
            <button type="submit" onClick={() => handleRetrieveOneUser(user_id)}>submit</button>

            {!isUndefined(user) &&
                <ul>
                    <li> {user.Name}</li>
                    <li>{user.Age}</li>
                </ul>}
        </div>
    )
}


export default GetSingleUser;