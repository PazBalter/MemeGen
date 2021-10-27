'use strict'

const topTextInput = document.querySelector('.topTextInput')
const bottomTextInput = document.querySelector('.bottomTextInput')
const elCanvas = document.querySelector('#meme-canvas')

function getImgSrc(){
    var img = gImgs[gMeme.selectedImgId]
    return img.url;
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



function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height) 
    }
}

function drawText(text, x, y) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '30px  meme';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }