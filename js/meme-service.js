'use strict'
// Globals //

const elCanvas = document.querySelector('#meme-canvas');
const gCtx = elCanvas.getContext("2d");
const topTextInput = document.querySelector('.topTextInput');
const bottomTextInput = document.querySelector('.bottomTextInput');
const fontButtons = document.querySelectorAll('.font-btn');

var gFontSize = Math.floor(elCanvas.width/10)

var gKeywords = {'happy':0,'crazy':0,'sarcastic':0,'sad':0,}

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
            size: gFontSize,
            align: 'center', 
            color: 'white' 
        },
        { 
            txt: 'Without tahin',
            size: gFontSize,
            align: 'center', 
            color: 'white' 
        }
    ] 
}

//  getters

function getIdxOfLine(){
    return gMeme.selectedLineIdx;
}
function getLine(idx){
    return gMeme.lines[idx].txt
}
function getAllImages(){
    return gImgs;
}
function getImgSrc(){
    var img = gImgs[gMeme.selectedImgId]
    return img.url;
}
function getFontSize(){
    return gMeme.lines[getIdxOfLine()].size;
}


// setters
function setIdxOfLine(idx){
    gMeme.selectedLineIdx = idx;
}
function setLine(line){
    gMeme.lines[getIdxOfLine()].txt = line
}
function setBottomLine(line){
    gMeme.lines[getIdxOfLine()].txt = line
}
function setFontSize(diff){
    gMeme.lines[getIdxOfLine()].size += diff;
    updateMemeCanvas()
}



function setImgId(numId){
    gMeme.selectedImgId = numId
    insertImgToCanvas()
}

// meme functions 
function switchLines(){
   
}

function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height) 
    }
}

// inputs

topTextInput.addEventListener("change", () =>{
    setIdxOfLine(0)
    setLine(topTextInput.value,)
    updateMemeCanvas() 
});
bottomTextInput.addEventListener("change", () =>{
    setIdxOfLine(1)
    setLine(bottomTextInput.value)
    updateMemeCanvas() 
});

// buttons



function updateMemeCanvas(){ 
    
    var width = elCanvas.width
    var height = elCanvas.height
    var yOffset = height/25;

    // update canvas img
    var imageObj = new Image();
    imageObj.src = getImgSrc();
    imageObj.onload = function(){
    gCtx.drawImage(imageObj, 0, 0, elCanvas.width, elCanvas.height) 

    // prepare text
        for(var i = 0 ; i< gMeme.lines.length ; i++){
            var fontSize = gMeme.lines[i].size
            gCtx.strokeStyle = 'black';
            gCtx.lineWidth = Math.floor(fontSize/4);
            gCtx.fillStyle = gMeme.lines[i].color;
            gCtx.textAlign = gMeme.lines[i].align;
            gCtx.lineJoin = "round";
            gCtx.font = `${fontSize}px meme`

            if(i === 0){
                // add top text
                gCtx.textBaseline = 'top'
                gCtx.strokeText(getLine(i),width/2,yOffset)
                gCtx.fillText(getLine(i),width/2,yOffset)
            }else if(i === 1){
                // add bottom text
                gCtx.textBaseline = 'bottom'
                gCtx.strokeText(getLine(i),width/2,height - yOffset)
                gCtx.fillText(getLine(i),width/2,height - yOffset)
            }
            else{
                // todo
                gCtx.textBaseline = 'center'
                gCtx.strokeText(getLine(i),width/2,height - yOffset)
                gCtx.fillText(getLine(i),width/2,height - yOffset)  
            }
        }
    }
}



