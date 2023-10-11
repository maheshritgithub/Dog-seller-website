import React from "react";

function Footer() {
    return (
        <div className="row">
            <footer style={{ backgroundColor: "black", padding: "20px" }} className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3 text-white" style={{ fontSize: "18px" }}>
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3 text-white" style={{ fontSize: "18px" }}>
                            Breeds
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3 text-white" style={{ fontSize: "18px" }}>
                            Adoption
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3 text-white" style={{ fontSize: "18px" }}>
                            Blog
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-3 text-white" style={{ fontSize: "18px" }}>
                            Contact
                        </a>
                    </li>
                </ul>
                <p className="text-center text-white" style={{ fontSize: "16px" }}>
                    © 2023 Dog Lover's Website
                </p>
            </footer>
        </div>
    );
}

export default Footer;
