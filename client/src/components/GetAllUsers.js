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
    //     const renderTable = () =>{
    //         {user.map((item, _id) =>{
    //             const {id,name,age} = item
    //             return(
    //                 <tr key= {id}>
    //                     <td>{id}</td>  
    //                     <td>{name}</td>
    //                     <td>{age}</td>
    //                 </tr>
    //             )
    //         }
    //     }
    // }



    return (
        <div>
            <p>HELLO YOU IN GET ALL USERS PAGE</p>
            {/* <button className="submitbutton" onClick={handleretrieveUser}> getusers </button> */}
            <table>
                <thead>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            Age
                        </td>
                        <td>
                            ID
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {user.map((item, _id) => {
                        return (
                            // <>
                                <tr>
                                    <td>
                                        {item.Name}
                                    </td>
                                    <td>
                                        {item.Age}
                                    </td>
                                    <td>
                                        {item._id}
                                    </td>
                                </tr>
                            // </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default GetAllUsers