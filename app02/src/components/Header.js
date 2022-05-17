
const Header = props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.brand}</a>
        </div>
    </nav>
);

export default Header;