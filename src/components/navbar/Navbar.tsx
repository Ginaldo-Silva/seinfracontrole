import { Link } from "react-router-dom"

import { StyledButton } from "../ui/StyledButton"
import "./Navbar.css"

export const Navbar = () => {
    return (
        <header>
            <p>Seinfra</p>
            <nav>
                    <ul>
                        <li><Link to={"ElectricalPage"}>Eletrica</Link></li>
                    </ul>
            </nav>
            <Link to={"/LoginPage"}>
                <StyledButton primary={true} children="Login" aditionalstyle="nav_login_btn" />
            </Link>
        </header>
    )
}