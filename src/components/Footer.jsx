import { Link } from "react-scroll";

export const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2024 Acabados ARJ</p>

                <a
                    href="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <svg className="bi me-2" width="40" height="32">
                        <use></use>
                    </svg>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="gallery"
                            smooth={true}
                            duration={500}
                        >
                            Acabados
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contacto
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            FAQs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-muted">
                            About
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};
