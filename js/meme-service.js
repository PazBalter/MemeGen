'use strict'
// Globals //

const elCanvas = document.querySelector('#meme-canvas');
const gCtx = elCanvas.getContext("2d");
const textInput = document.querySelector('.textInput');
const fontButtons = document.querySelectorAll('.font-btn');
const saveBtn = document.querySelector('.save-meme-btn')

var gSwitch = false;
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
            txt: 'Without tahini',
            size: gFontSize,
            align: 'center', 
            color: 'white' 
        }
    ] 
}
var gMemeStorageArray = []

//  getters
function getLinesLength(){
    var length = gMeme.lines.length
    return length;
}
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
function createLine(){
    gMeme.lines.push({ 
        txt: 'New line',
        size: gFontSize,
        align: 'center', 
        color: 'white' 
    })
}
// btn functions

function switchLineFocus(){
    var idx = getIdxOfLine()
    idx++;
    if(idx >= gMeme.lines.length){
        setIdxOfLine(0)
    }else{
        setIdxOfLine(idx) 
    }
    updateMemeCanvas()
}

function deleteLine(){
    
    if(gNumLines > 0){
        var idx = getIdxOfLine()
        gMeme.lines.splice(idx, 1)
        switchLineFocus()
        updateMemeCanvas()
        gNumLines--
    }else{
        alert("No lines to delete")
    }
 
}


// EventListener

textInput.addEventListener("change", () =>{
    // setIdxOfLine(0)
    var lineslength = getLinesLength()
    if(lineslength === 0){
        createLine()
    }
    
    setLine(textInput.value)
    updateMemeCanvas() 
});

saveBtn.addEventListener("click",  () =>{
    var data = elCanvas.toDataURL();
    gMemeStorageArray.push(data)
    renderMemesGalery()
});





function insertImgToCanvas(){
    var img = new Image()
        img.src = getImgSrc()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height) 
    }
}

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
            gCtx.textAlign = gMeme.lines[i].align;
            gCtx.lineJoin = "round";
            gCtx.font = `${fontSize}px meme`
          
            if(i === 0){
                if(isSwitchOn() === true){
                    if(i === getIdxOfLine()){
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width*0.05,yOffset-fontSize*0.20,width*0.90,fontSize*1.25)
                    }
                }
                // add top text
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'top'
                gCtx.strokeText(getLine(i),width/2,yOffset)
                gCtx.fillText(getLine(i),width/2,yOffset)

            }else if(i === 1){
                if(isSwitchOn() === true){
                    if(i === getIdxOfLine()){
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width*0.05,height-yOffset-fontSize*1.15,width*0.90,fontSize*1.25)
                    }
                }
                // add bottom text
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'bottom'
                gCtx.strokeText(getLine(i),width/2,height - yOffset)
                gCtx.fillText(getLine(i),width/2,height - yOffset)
            }
            else{
                if(isSwitchOn() === true){
                    if(i === getIdxOfLine()){
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width*0.05,height/2-fontSize*1.15,width*0.90,fontSize*1.25)
                    }
                }
                // todo
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'center'
                gCtx.strokeText(getLine(i),width/2,height/2)
                gCtx.fillText(getLine(i),width/2,height/2)  
            }
        }
    }
}

function toggleLineSwitch(){
    if(gSwitch === false){
        gSwitch = true;
        updateMemeCanvas()
    }else{
        gSwitch = false
        updateMemeCanvas()
    }
}

function isSwitchOn(){
    return gSwitch;
}

