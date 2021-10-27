'use strict'



function getImgSrc(){
    var img = gImgs[gMeme.selectedImgId]
    return img.url;
}

function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    var canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height) 
    }
    // ctx.drawImage(img,0,0,canvas.width,canvas.height)


}