import axios from "axios"
import React, { useState , useEffect} from "react"
import User from "./User"
import './Style.css'
import { Button } from "@material-ui/core"
export interface IState {
    user : {
        id : any
        firstName : string
        lastName : string
        place : string
        dob : string
    }[]
}

const UserList = () => {
    const [user , setUser] = useState<IState['user']>([])
    const [values , setValues] = useState({firstName : '' , lastName : '' , place : '' , dob : ''})
    useEffect(() => {
        getEmployees()
    } , [])
    const getEmployees = () => {
        axios.get('http://localhost:4000/employees').then(res => res.data).then(res => setUser(res))
    }
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : void => {
        const { value , name } = e.target
        setValues({...values , [name] : value})
    }
    const handleSubmit = () => {
        axios.post('http://localhost:4000/employees' , values).then(res => res.data)
        .then(res => getEmployees())
        setValues({firstName : '' , lastName : '' , place : '' , dob : ''})
    }
    const onDelete = (id : any) => {
        axios.delete(`http://localhost:4000/employees/${id}`).then(res => res.data)
        .then(res => getEmployees())
    }
    return(
        <>
        <div>
        <div className="nav" style={{marginBottom : '25px'}}>
        <span style={{fontFamily : 'sans-serif' , fontStyle : 'italic'}}>FirstName :</span><input style={{height : '35px' , padding : '10px'}}
            name = 'firstName'
            onChange={handleChange}
            type = 'text'
            placeholder = 'FirstName'
            value = {values.firstName}
            />
        <span style={{fontFamily : 'sans-serif' , fontStyle : 'italic'}}>LastName :</span><input style={{height : '35px' , padding : '10px'}}
            name = 'lastName'
            onChange={handleChange}
            type = 'text'
            placeholder = 'LastName'
            value={values.lastName}
            />
        <span style={{fontFamily : 'sans-serif' , fontStyle : 'italic'}}>Place :</span><input style={{height : '35px' , padding : '10px'}}
            name = 'place'
            onChange={handleChange}
            type = 'text'
            placeholder = 'Place'
            value={values.place}
            />
        <span style={{fontFamily : 'sans-serif' , fontStyle : 'italic'}}>DOB :</span><input style={{height : '35px' , padding : '10px'}}
            name = 'dob'
            onChange={handleChange}
            type = 'date'
            placeholder = 'DOB'
            value={values.dob}
            />
            <Button onClick = {handleSubmit} variant="contained" color = "primary">Add Employee</Button>
        </div>
        <div style={{display : 'flex' , justifyContent : 'center' , flexWrap : 'wrap'}}>
            <User user={user} onDelete = {onDelete}/>
        </div>
        </div>
        </>
    )
}

export default UserList