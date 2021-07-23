import { React, useState } from 'react'
import axios from 'axios';
import { isUndefined } from 'lodash';
import './form.css'

function Newuser() {
    const [state, setState] = useState({
        fname: '',
        age: ''
    })
    const [postdata, setPostdata] = useState(undefined)

    const handlesubmit = async (e) => {
        try {
            const post = await axios.post("http://localhost:3000/create_user", {
                Name: state.fname,
                Age: state.age
            })
            console.log(post.data)
            alert(" New User Created Succesfully " + post.data.Name + " " + post.data.Age)
            setPostdata(post.data)
        } catch (err) {
            console.error(err)
        }
    }
    const handleChange = (event) => {
        const value = event.target.value
        setState({
            ...state,
            [event.target.name]: value
        })
        console.log(state)
    }
    return (
        <div>
            <div className="formstyle">
                <label className="labelstyle">Name</label>
                <input className="inputstyle" type="text" name="fname" value={state.fname} onChange={handleChange} />
                <label className="labelstyle">Age</label>
                <input className="inputstyle" type="text" name="age" value={state.age} onChange={handleChange} />
                <button className="fill" onClick={handlesubmit}>Submit</button>
            </div>
            {!isUndefined(postdata) &&
                <ul>
                    <li> {postdata.Name}</li>
                    <li>{postdata.Age}</li>
                </ul>}
        </div>
    )
}


export default Newuser;