// Slideshow

let slideshow = document.getElementById('slideshow')


class Slideshow {
    constructor(n, width, height, textArr) {
        this.n = n;
        this.width = width;
        this.height = height;
        this.textArr = textArr;
    }
    generateSlideshow() {
        for (let i = 0; i < this.n; i++) {
            let slide = document.createElement('div');
            let text = document.createElement('h1');

            slide.style.width = this.width;
            slide.style.height = this.height;
            slide.className = `slide-element slide-${i}`;


            text.className = ` slide-text slide-text-${i}`;
            text.textContent = this.textArr[0];
            this.textArr.shift();

            slide.appendChild(text);
            slideshow.appendChild(slide);
        }
    }
}

let slideS = new Slideshow(4, 300, 200, ['Bankok', 'Singapure', 'Tbilisi', 'Khashuri']);
slideS.generateSlideshow();