import { Link } from 'react-router-dom';


function Header() {
    return (
        <header className="header-container">
            <div className='logo'>FarmaSaúde</div>
            <nav>
                <link to="/">Home</link>
                <link to="/servicos">Servicos</link>
                <link to="/sobre-nos">SobreNos</link>
                <link to="/fale-conosco">FaleConosco</link>
            </nav>
        </header>
    );
}

export default Header;