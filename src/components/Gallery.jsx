import { ComparationGallery } from "./ComparationGallery";
import { CompilationGallery } from "./CompilationGallery";

export const Gallery = () => {
    return (
        <div className="container-gallery" id="gallery" data-aos="fade-up">
            <h2>Una mirada a los acabados y estilos</h2>
            <div className="container-comparation">
                <ComparationGallery
                    index={1}
                    beforeImage="./assets/Before01.jpg"
                    afterImage="./assets/After01.jpg"
                />
                <ComparationGallery
                    index={2}
                    beforeImage="./assets/Before02.jpg"
                    afterImage="./assets/After02.jpg"
                />
            </div>
            <div className="container-compilation" data-aos="zoom-in-up">
              <CompilationGallery></CompilationGallery>
            </div>
        </div>
    );
};
