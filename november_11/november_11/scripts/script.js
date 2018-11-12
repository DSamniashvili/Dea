// Slideshow

let slideshow = document.getElementById('slideshow')

class Slideshow {
    constructor(n, width, height) {
        this.n = n;
        this.width = width;
        this.height = height;
    }
    generateSlideshow() {
        for (let i = 0; i < this.n; i++) {
            let slide = document.createElement('div');
            slide.style.width = this.width;
            slide.style.height = this.height;
            slide.className = `slide-element slide=${i}`;
            slideshow.appendChild(slide);
        }
    }
}

let slideS = new Slideshow(4, 300, 200);
slideS.generateSlideshow();