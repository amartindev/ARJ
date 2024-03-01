
export const ButtonWP = ({ text }) => {

    const handleClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappLink = isMobile ? "whatsapp://send?phone=573043189950" : "https://wa.me/573043189950";
        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="container-button-contact" data-aos="fade-right">
            <button onClick={handleClick}>
                <i className="bi bi-whatsapp"></i>{text}
            </button>
        </div>
    );
};

