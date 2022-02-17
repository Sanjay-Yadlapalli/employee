import UserList from './UserList'
import './Style.css'
const App = () => {
  
  return( 
    <div style={{height : '100vh' , width : '100vw' , display : 'flex' , flexDirection : 'column' , overflowY : 'scroll' , backgroundColor : 'whiteSmoke'}}>
      <UserList />
    </div>
  )
}
export default App