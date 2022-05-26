
import { Link } from 'react-router-dom'

const Header = props => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.brand}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link " to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/about">About Us</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link " to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;