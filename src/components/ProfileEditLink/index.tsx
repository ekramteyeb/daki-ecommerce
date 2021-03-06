import { NavDropdown} from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AppState } from "../../types"
import Image from 'react-bootstrap/Image'
import './style.scss'

export default function ProfileEditLink(){
  const user = useSelector((state:AppState) => state.user.loggedIn)
  console.log(user, user)
 
  return (
    <NavDropdown
      title={
        <div className="nav__title">
          <Image className="nav_image" src={user.avatar} width={42} style={{marginRight:20}} height={42} rounded roundedCircle/>
          {
            <span id="userName">{user.firstName ? 
              user.firstName :
              'User'}</span>
          }
          

          <i className="bi bi-person-circle" style={{fontSize:24, marginLeft:4}}>
          </i> 
        </div>
      } 
      id="offcanvasNavbarDropdown">
      <NavDropdown.Item 
        className="theme green"
        as="button"
      >
        <Link to="/editprofile">Edit profile</Link> 
      </NavDropdown.Item>
      {user.isAdmin ? 
        <>
          <NavDropdown.Divider />
          <NavDropdown.Item 
            className="theme blue" 
            as="button"
          >
            <Link to="/admin">Admin</Link> 
          </NavDropdown.Item>
        </>
        :
        ''
      }
    </NavDropdown> 
  )
}