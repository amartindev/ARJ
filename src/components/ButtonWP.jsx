
export const ButtonWP = ({ text }) => {

    const handleClick = () => {
        // Abre la nueva página en una nueva pestaña al hacer clic en el botón
        window.open("https://wa.me/573043189950", '_blank');
    };

    return (
        <div className="container-button-contact" data-aos="fade-right">
            <button onClick={handleClick}>
                <i className="bi bi-whatsapp"></i>{text}
            </button>
        </div>
    );
};

