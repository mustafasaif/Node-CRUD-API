import { React, useState } from 'react'
import axios from 'axios'
import { isUndefined } from 'lodash';
import './Singleuser.css'

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
            <div className="formstylesingle">
                <label className="labelstyle1">Enter the user ID</label>
                <input className="inputstyle1" type="text" name="user_id" value={user_id} onChange={handleChange}></input>
                <button className="buttonstyle" type="submit" onClick={() => handleRetrieveOneUser(user_id)}>submit</button>
            </div>
            <div>
                {!isUndefined(user) &&
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    ID
                                </td>
                                <td>
                                    Name
                                </td>
                                <td>
                                    Age
                                </td>

                                <td>
                                    Email
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {user._id}
                                </td>
                                <td>
                                    {user.Name}
                                </td>
                                <td>
                                    {user.Age}
                                </td>
                                <td>
                                    {user.Email}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                }
            </div>
        </div>
    )
}


export default GetSingleUser;