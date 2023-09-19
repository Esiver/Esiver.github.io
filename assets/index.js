import SlideBuilder from './EmilSlider.js'





let slideBuilder = new SlideBuilder();
let headerSlider = slideBuilder.buildSlide({
    containerSelector:"#header-slider",
    slidesListSelector: "#header-slider ul",
    slidesSelector:"#header-slider li",
    rightArrowSelector:"#header-slider-right",
    leftArrowSelector:"#header-slider-left"

});


