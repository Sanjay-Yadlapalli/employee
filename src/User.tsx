import { IState as Props } from "./UserList"
import { Button } from "@material-ui/core"
import './Style.css'
interface IProps {
    user : Props['user']
    onDelete : (id : any) => void
}
const User : React.FC<IProps> = ({user , onDelete}) => {
    return(
        <>
            {
            user.map(person => {
                return(
                    <div className = 'container' key={person.id}>
                        <h2 style={{fontFamily : 'sans-serif' , fontWeight : '500'}}>Name : <span style={{color : '#50446f'}}>{person.firstName} {person.lastName}</span></h2>
                        <h3 style={{fontFamily : 'sans-serif' , fontWeight : '500'}}>Place : {person.place}</h3>
                        <h4 style={{fontFamily : 'sans-serif' , fontWeight : '500'}}>DOB : {person.dob}</h4>
                        <div style={{display : 'flex' , justifyContent : 'flex-end'}}>
                            <Button onClick={() => onDelete(person.id)} color = 'secondary'>Delete</Button>
                        </div>
                    </div>
                )
                })
            }
        </>
    )
}

export default User