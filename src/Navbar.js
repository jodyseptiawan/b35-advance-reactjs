import {Link, useLocation} from 'react-router-dom'

export default function Navbar() {

    let location = useLocation()
    
    console.log(location)
  return (
    <nav>
        <ul>
          <li>
            <Link to="/" className='h4'>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/sign-in">SignIn</Link>
          </li>
        </ul>
      </nav>
  )
}
