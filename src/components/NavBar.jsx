import { Link } from 'react-scroll';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/assets/ARJ-logo.png" alt="ARJ" width="40" height="40"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                ARJ
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="gallery" smooth={true} duration={500}>
                                Acabados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact" smooth={true} duration={500}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success button-search"
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};
