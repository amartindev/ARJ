import VanillaTilt from 'vanilla-tilt';
import { useEffect } from "react";

export const ComparationGallery = () => {
    useEffect(() => {
      return () => {
        VanillaTilt.init(document.querySelector("#image-comparison-slider"), { // Tilt Effect - vanilla-tilt.js (https://micku7zu.github.io/vanilla-tilt.js/) is required for this
            max: 5, // max tilt rotation (degrees (deg))
            speed: 800, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
            scale: 1.02 // transform scale - 2 = 200%, 1.5 = 150%, etc..
          });
          
          const slider = document.querySelector("#image-comparison-slider");
          const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
          const sliderHandle = document.querySelector("#image-comparison-slider .handle");
          
          slider.addEventListener("mousemove", sliderMouseMove);
          slider.addEventListener("touchmove", sliderMouseMove);
          
          function sliderMouseMove(event) {
          
            if(isSliderLocked) return;
          
            const sliderLeftX = slider.offsetLeft;
            const sliderWidth = slider.clientWidth;
            const sliderHandleWidth = sliderHandle.clientWidth;
          
            let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
            if(mouseX < 0) mouseX = 0;
            else if(mouseX > sliderWidth) mouseX = sliderWidth;
          
            sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
            sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
          }
          
          let isSliderLocked = false;
          
          slider.addEventListener("mousedown", sliderMouseDown);
          slider.addEventListener("touchstart", sliderMouseDown);
          slider.addEventListener("mouseup", sliderMouseUp);
          slider.addEventListener("touchend", sliderMouseUp);
          slider.addEventListener("mouseleave", sliderMouseLeave);
          
          function sliderMouseDown(event) {
            if(isSliderLocked) isSliderLocked = false;
            sliderMouseMove(event);
          }
          
          function sliderMouseUp() {
            if(!isSliderLocked) isSliderLocked = true;
          }
          
          function sliderMouseLeave() {
            if(isSliderLocked) isSliderLocked = false;
          }
      }
    }, [])
    
    return (
        <div id="image-comparison-slider">
            <img
                src="./assets/Before.jpg"
                alt="before"
            />
            <div className="img-wrapper">
                <img
                    src="./assets/After.jpg"
                    alt="after"
                />
            </div>
            <span className="label label-before">Antes</span>
            <span className="label label-after">Despúes</span>
            <div className="handle">
                <div className="handle-line"></div>
                <div className="handle-circle">
                    <i className="fas fa-chevron-left"></i>
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div className="handle-line"></div>
            </div>
        </div>
    );
};
