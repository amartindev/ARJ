import { ButtonWP } from "./ButtonWP";

export const Hero = () => {
    return (
        <div className="container-hero">
          {/* <img src="./assets/bannerhero.jpeg" alt="" className="background-hero"/> */}
            <div className="container-hero-info">
                <h1 className="title">Acabados para apartamentos y casas</h1>
                <h2 className="subtitle">Acabados ARJ</h2>
                <p>
                    Desde el inicio hasta el final, estamos contigo para
                    asegurar que los detalles finales de tu vivienda sean
                    exactamente como los has soñado.
                </p>
                <ButtonWP text="Cotiza tus acabados"></ButtonWP>
            </div>
        </div>
    );
};
