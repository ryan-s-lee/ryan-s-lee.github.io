import * as React from 'react'
import { Link } from "gatsby"
import { navlist } from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav>
        <ul className={navlist}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/blog'>Blog</Link>
            </li>
            {/* <li>
                <Link to='/hobbies'>Hobbies!</Link>
            </li> */}
        </ul>
        </nav>
    );
}
export default Navbar;