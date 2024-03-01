import "./MobileContact.css";

const MobileContact = () => {
    return (
        <div className="mobile-contact">
            <h1 className="mobile-contact-title">Contato</h1>
            <div className="mobile-contact-info">
                <div className="mobile-contact-info-item">
                    <a href="https://wa.me/5511985530353" target="_blank" rel="noreferrer">
                        {" "}
                        <i className="fas fa-phone"></i> (11) 98553-0353
                    </a>
                </div>
                <div className="mobile-contact-info-item">
                    <i className="fas fa-envelope"></i> vimonteglione@hotmail.com
                </div>
                <div className="mobile-contact-info-item">
                    <a
                        href="https://www.linkedin.com/in/vin%C3%ADcius-monteglione-de-oliveira-232893230/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <i className="fab fa-linkedin"></i> Vinícius Monteglione de Oliveira
                    </a>
                </div>
                <div className="mobile-contact-info-item">
                    <a href="https://github.com/vimonteglione" target="_blank" rel="noreferrer">
                        {" "}
                        <i className="fab fa-github"></i> vimonteglione
                    </a>
                </div>
                <div className="mobile-contact-info-item">
                    <a
                        href="https://www.instagram.com/vimonteglione/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <i className="fab fa-instagram-square"></i> vimonteglione
                    </a>
                </div>
                <div className="mobile-contact-info-item">
                    <i className="fa-solid fa-location-dot"></i> São Paulo, SP, Brasil
                </div>
            </div>
        </div>
    );
};

export default MobileContact;
