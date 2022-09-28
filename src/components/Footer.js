import {Link, useLocation} from 'react-router-dom'

const Footer = (props) => {
    const location = useLocation()
    return (
        <footer>
            <p>Copyright &copy; 2022</p>
            {location.pathname !== '/about' && (
                <Link to='/about'>About</Link>
            )}
        </footer>
    )
}


export default Footer