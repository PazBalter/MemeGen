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

const topTextInput = document.querySelector('.topTextInput')
const bottomTextInput = document.querySelector('.bottomTextInput')
const elCanvas = document.querySelector('#meme-canvas')


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


function setImgId(numId){
    gMeme.selectedImgId = numId
    insertImgToCanvas()
}

// meme functions 

function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    var ctx = elCanvas.getContext("2d");
    img.onload = () => {
        ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height) 
    }
}

topTextInput.addEventListener("change", () =>{
    updateMemeCanvas(elCanvas, topTextInput.value,bottomTextInput.value) // image value
});
bottomTextInput.addEventListener("change", () =>{
    updateMemeCanvas(elCanvas, topTextInput.value,bottomTextInput.value) // image value
});


function updateMemeCanvas(elCanvas,topText,bottomText){  // image value
    
    var ctx = elCanvas.getContext("2d");
    var width = elCanvas.width
    var height = elCanvas.height
    var fontSize = Math.floor(width/10);
    var yOffset = height/25;
    console.log(fontSize)

     // update canvas img
    // insertImgToCanvas()

    // prepare text
    ctx.strokeStyle = 'black';
    ctx.lineWidth = Math.floor(fontSize/4);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px meme`

    // add top text

    ctx.textBaseline = 'top'
    ctx.strokeText(topText,width/2,yOffset)
    ctx.fillText(topText,width/2,yOffset)

    // add bottom text

    ctx.textBaseline = 'bottom'
    ctx.strokeText(bottomText,width/2,height - yOffset)
    ctx.fillText(bottomText,width/2,height - yOffset)
}




// function drawText(text, x, y) {
//     gCtx.lineWidth = 2;
//     gCtx.strokeStyle = 'black';
//     gCtx.fillStyle = 'white';
//     gCtx.font = '30px  meme';
//     gCtx.fillText(text, x, y);
//     gCtx.strokeText(text, x, y);
// }