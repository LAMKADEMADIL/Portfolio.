import { Link } from "react-router-dom"

export default function Head () {
    return(
        <header> 
            <h1> Portfolio </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" > Home </Link>
                    </li>
                    <li>
                        <Link to="/About" > About </Link>
                    </li>
                    <li>
                        <Link to="/Project" > Project </Link>
                    </li>
                    <li>
                        <Link to="/Contact" > Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}