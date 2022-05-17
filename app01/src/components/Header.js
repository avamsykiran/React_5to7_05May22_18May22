import "../styles/Header.css"

const Header = props => (
    <header className="Header">
        <h3>{props.brand}</h3>
    </header>
);

export default Header;