// Slideshow

let slideshow = document.getElementById('slideshow');


let rightArrow = document.getElementsByClassName('right_arrow')[0];
let slides = document.getElementsByClassName('slide-element');

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



let slidesArr = [...slides];

let timesClicked = 0;
function moveLeft() {
    timesClicked++;

    if (timesClicked % 2 !== 0) {
        console.log('kentia');
            slideshow.classList.add('moved_left')
        
    }
    else {
        slideshow.classList.remove('moved_Left')
    }
    console.log(timesClicked);
}


// document.getElementById('slides').style.marginLeft = 
// (parseInt(document.getElementById('slides').style.marginLeft, 10) - 100) + 'px';