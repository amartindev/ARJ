import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";

export const ComparationGallery = ({ index, beforeImage, afterImage }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (slider) {
            VanillaTilt.init(slider, {
                max: 5,
                speed: 800,
                scale: 1.02,
            });

            const sliderImgWrapper = slider.querySelector(".img-wrapper");
            const sliderHandle = slider.querySelector(".handle");

            const sliderMouseMove = (event) => {
                const sliderLeftX = slider.offsetLeft;
                const sliderWidth = slider.clientWidth;
                const sliderHandleWidth = sliderHandle.clientWidth;

                let mouseX =
                    (event.clientX || event.touches[0].clientX) - sliderLeftX;
                if (mouseX < 0) mouseX = 0;
                else if (mouseX > sliderWidth) mouseX = sliderWidth;

                sliderImgWrapper.style.width = `${(
                    (1 - mouseX / sliderWidth) * 100
                ).toFixed(4)}%`;
                sliderHandle.style.left = `calc(${(
                    (mouseX / sliderWidth) * 100
                ).toFixed(4)}% - ${sliderHandleWidth / 2}px)`;
            };

            let isSliderLocked = false;

            const sliderMouseDown = (event) => {
                if (isSliderLocked) isSliderLocked = false;
                sliderMouseMove(event);
            };

            const sliderMouseUp = () => {
                if (!isSliderLocked) isSliderLocked = true;
            };

            const sliderMouseLeave = () => {
                if (isSliderLocked) isSliderLocked = false;
            };

            slider.addEventListener("mousemove", sliderMouseMove);
            slider.addEventListener("touchmove", sliderMouseMove);
            slider.addEventListener("mousedown", sliderMouseDown);
            slider.addEventListener("touchstart", sliderMouseDown);
            slider.addEventListener("mouseup", sliderMouseUp);
            slider.addEventListener("touchend", sliderMouseUp);
            slider.addEventListener("mouseleave", sliderMouseLeave);

            return () => {
                if (slider) {
                    slider.vanillaTilt.destroy();
                }
            };
        }
    }, [index, beforeImage, afterImage]);

    return (
        <div ref={sliderRef} className="image-comparison-slider" data-aos="zoom-in-up">
            <img src={beforeImage} alt="before" />
            <div className="img-wrapper">
                <img src={afterImage} alt="after" />
            </div>
            <span className="label label-before">Antes</span>
            <span className="label label-after">Después</span>
            <div className="handle">
                <div className="handle-line"></div>
                <div className="handle-circle">
                    <i className="bi bi-caret-left-fill"></i>
                    <i className="bi bi-caret-right-fill"></i>
                </div>
                <div className="handle-line"></div>
            </div>
        </div>
    );
};
