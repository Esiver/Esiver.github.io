
class Slide {
    constructor(slideSettings){
        this.containerSelector
        this.slidesListSelector;
        this.slidesSelector;
        this.leftArrowSelector;
        this.rightArrowSelector;

        this.container = null;
        this.slidesList = null;
        this.slides = null;
        this.leftArrow = null;
        this.rightArrow = null;

        this.currentIndex = 0;
        this.currentTransformX = 0;
    }
    writeState(){
        let containerLength = this.container.getBoundingClientRect().width;
        let diff = containerLength - this.currentTransformX;
        let lengthRequired = containerLength * 0.2;
        let slideItemLength = this.slides[0].getBoundingClientRect().width;

        console.log(`current index: ${this.currentIndex} | current transformX ${this.currentTransformX}`)
        console.log(`container length: ${containerLength}, | difference: ${diff} | slideItemLength: ${slideItemLength}`)
        console.log(`length used: ${this.currentTransformX} | length requried: ${lengthRequired}`)
    }
    checkend(direction){
        let containerLength = this.container.getBoundingClientRect().width;
        let slidesList = document.querySelector(this.slidesListSelector)
        let slideListLength = slidesList.getBoundingClientRect().width;

        let maxTransform = Math.abs(slideListLength) - Math.abs(containerLength) ;

        if(direction == -1) {
            
            if(!(this.currentTransformX > maxTransform) ){ //
                return false // its not the end.
            }
            else {
                return true // its the end!
            }
        }

        if( direction == 1) {
            if(this.currentIndex >= 1){
                return false;
            }
            else {
                return true;
            }
        }
    }
    slideLeft(){
        if(!this.checkend(-1)){
            let slidelength = this.slides[0].getBoundingClientRect().width;
            this.currentIndex ++;            
            this.currentTransformX = this.currentIndex * slidelength
            this.slidesList.style.transform = `translateX(-${this.currentTransformX}px)`;
            // this.writeState();
        }
    }
    slideRight(){
        if(!this.checkend(1)){
            let slidelength = this.slides[0].getBoundingClientRect().width;
            this.currentIndex --;  
            this.currentTransformX = this.currentIndex * slidelength
            
            this.slidesList.style.transform = `translateX(-${this.currentTransformX}px)`;
            // this.writeState();

        }
    }


    showImage(index=1, direction) {
        let transformLength = index  * (1 / this.slides.length ) * 100
        this.slidesList.style.transform = `translateX(${ transformLength}%)`;
    }

    setSlideContainer(containerSelector){
        this.container = document.querySelector(containerSelector);
    }
    setSlidesList(slidesListSelector) {
        this.slidesListSelector = slidesListSelector
        this.slidesList = document.querySelector(slidesListSelector)
    }
    setSlides(slideSelector){
        this.slides = document.querySelectorAll(slideSelector);
    }
    setLeftButton(leftArrowSelector){
        
        this.leftArrow = document.querySelector(leftArrowSelector);
        this.leftArrow.addEventListener('click', () => this.slideLeft())
    }
    setRightButton(rightArrowSelector){
        this.rightArrow = document.querySelector(rightArrowSelector);
        this.rightArrow.addEventListener('click', () => this.slideRight())
    }
}
class SlideBuilder {
    constructor(){
    }
    slideList = [];

    setSlideContainer(selector){
        this.slide.setSlideContainer(selector)
    }
    setSlides(selector){
        this.slide.setSlides(selector)
    }
    setLeftButton(selector){
        this.slide.setLeftButton(selector)
    }
    setRightButton(selector){
        this.slide.setRightButton(selector);
    }

    buildSlide(slideSettings){
        let slide = new Slide(slideSettings);

        if (typeof slideSettings.containerSelector !== undefined) {
            slide.setSlideContainer(slideSettings.containerSelector);
        }
        if (typeof slideSettings.slidesListSelector !== undefined) {
            slide.setSlidesList(slideSettings.slidesListSelector);
        }
        if (typeof slideSettings.slidesSelector !== undefined) {
            slide.setSlides(slideSettings.slidesSelector);
        }
        if (typeof slideSettings.leftArrowSelector !== undefined && slideSettings.leftArrowSelector.length > 0) {
            slide.setLeftButton(slideSettings.leftArrowSelector);
        }
    
        if (typeof slideSettings.rightArrowSelector !== undefined && slideSettings.rightArrowSelector.length > 0) {
            slide.setRightButton(slideSettings.rightArrowSelector);
        }

        this.slideList.push(slide)
        return slide;
    }
}

export default SlideBuilder;