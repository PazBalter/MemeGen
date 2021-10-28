'use strict'
// Globals //
var gKeywords = {'happy':0,
                 'crazy':0,
                 'sarcastic':0,
                 'sad':0,
}

var gImgs = [
    {id: 1, url: 'img-square-meme/1.jpg', keywords: ['happy']},
    {id: 2, url: 'img-square-meme/2.jpg', keywords: ['happy']},
    {id: 3, url: 'img-square-meme/3.jpg', keywords: ['happy']},
    {id: 4, url: 'img-square-meme/4.jpg', keywords: ['happy']},
    {id: 5, url: 'img-square-meme/5.jpg', keywords: ['happy']},
    {id: 6, url: 'img-square-meme/6.jpg', keywords: ['happy']},
    {id: 7, url: 'img-square-meme/7.jpg', keywords: ['happy']},
    {id: 8, url: 'img-square-meme/8.jpg', keywords: ['happy']},
    {id: 9, url: 'img-square-meme/9.jpg', keywords: ['happy']},
    {id: 10, url: 'img-square-meme/10.jpg', keywords: ['happy']},
    {id: 11, url: 'img-square-meme/11.jpg', keywords: ['happy']},
    {id: 12, url: 'img-square-meme/12.jpg', keywords: ['happy']},
    {id: 13, url: 'img-square-meme/13.jpg', keywords: ['happy']},
    {id: 14, url: 'img-square-meme/14.jpg', keywords: ['happy']},
    {id: 15, url: 'img-square-meme/15.jpg', keywords: ['happy']},
    {id: 16, url: 'img-square-meme/16.jpg', keywords: ['happy']},
    {id: 17, url: 'img-square-meme/17.jpg', keywords: ['happy']},
    {id: 18, url: 'img-square-meme/18.jpg', keywords: ['happy']}
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        { 
            txt: 'never eat Falafel',
            size: 20,
            align: 'left', 
            color: 'red' 
        } 
    ] 
}

const elCanvas = document.querySelector('#meme-canvas')
const gCtx = elCanvas.getContext("2d");
const topTextInput = document.querySelector('.topTextInput')
const bottomTextInput = document.querySelector('.bottomTextInput')
const fontButtons = document.querySelectorAll('.font-btn')


var gFontSize = Math.floor(elCanvas.width/10)


//  getters 
function getAllImages(){
    return gImgs;
}
function getImgSrc(){
    var img = gImgs[gMeme.selectedImgId]
    return img.url;
}
function getMemeText(){
    var txt = gMeme.lines.text 
    return txt;
}
// setters
function rateFontSize(diff){
    gFontSize + diff;
}
function setFontSize() {
    gFontSize = Math.floor(elCanvas.width/10)
}

function setImgId(numId){
    gMeme.selectedImgId = numId
    insertImgToCanvas()
}

// meme functions 

function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    // var gCtx = elCanvas.getContext("2d");
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height) 
    }
}

topTextInput.addEventListener("change", () =>{
    updateMemeCanvas(elCanvas, topTextInput.value,bottomTextInput.value) // image value
});
bottomTextInput.addEventListener("change", () =>{
    updateMemeCanvas(elCanvas, topTextInput.value,bottomTextInput.value) // image value
});
// fontButtons.addEventListener("change", () =>{
//     updateMemeCanvas(elCanvas, topTextInput.value,bottomTextInput.value) // image value
// });


function updateMemeCanvas(elCanvas,topText,bottomText){  // image value
    var fontSize = gFontSize
    var width = elCanvas.width
    var height = elCanvas.height
    var yOffset = height/25;

    // update canvas img
    var imageObj = new Image();
    imageObj.src = getImgSrc();
    imageObj.onload = function(){
        gCtx.drawImage(imageObj, 0, 0, elCanvas.width, elCanvas.height) 
    

        // prepare text
        gCtx.strokeStyle = 'black';
        gCtx.lineWidth = Math.floor(fontSize/4);
        gCtx.fillStyle = 'white';
        gCtx.textAlign = 'center';
        gCtx.lineJoin = "round";
        gCtx.font = `${fontSize}px meme`

        // add top text

        gCtx.textBaseline = 'top'
        gCtx.strokeText(topText,width/2,yOffset)
        gCtx.fillText(topText,width/2,yOffset)

        // add bottom text

        gCtx.textBaseline = 'bottom'
        gCtx.strokeText(bottomText,width/2,height - yOffset)
        gCtx.fillText(bottomText,width/2,height - yOffset)
    }
}

function draw(){
    var width = elCanvas.width
    var height = elCanvas.height
    gCtx.clearRect(0,0,width,height)

    gCtx.fillText = 'white'
    insertImgToCanvas()
}

