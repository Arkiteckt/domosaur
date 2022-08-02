
// 1. Change the span with the class mess-with-me to have a font size of 40px.

const messWithMe = document.querySelector('.mess-with-me');
messWithMe.style.fontSize = '48px';


// 2. Change the paragraph with the class mess-with-me to have a background color of green.

const messWithMeParagraph = document.querySelector('p.mess-with-me');
messWithMeParagraph.style.backgroundColor = 'green';


// 3. Hide the second dinosaur's image so that it's no longer visible, and so that the area below it moves up to take the space. If you're not sure of how to do this, look up the CSS rule for that!
const hideTheDino = document.querySelector('#hide-me');
hideTheDino.style.display = 'none';



// 4. Change the first dinosaur image so that the image's dimensions are 324 pixels wide.
const firstDinoimg = document.querySelector('#triceratops');
firstDinoimg.style.width =  "324px";



// 5. Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

messWithMe.addEventListener('click', onClick); 
function onClick(){
        messWithMe.style.color = "orange"
    }


// 6. Add an event listener to the first dinosaur so that when they are clicked, they receive a red border.

firstDinoimg.addEventListener('click', onClick2);
function onClick2() {
    firstDinoimg.style.border = '5px solid red';
}


// 7. Add an event listener to the feathered dinosaur, so that when they are clicked, they become 50% transparent.

const halfOpacity = document.querySelector('#feathers');
halfOpacity.addEventListener('click', onClick3);
function onClick3() {
    halfOpacity.style.opacity = '0.5';
}


