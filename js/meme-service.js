'use strict'
// Globals //


var gSwitch = false;
var gFontSize = Math.floor(gElCanvas.width/10)
var gNumLines = gMeme.lines.length;
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
            color: 'white' ,
            posY: 0
        },
        { 
            txt: 'Without tahini',
            size: gFontSize,
            align: 'center', 
            color: 'white',
            posY: 0
        }
    ] 
}
var gMemeStorageArray = []
const KEY = 'memes';
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

    // insertImgToCanvas()
}
function createLine(){
    gMeme.lines.push({ 
        txt: 'New line',
        size: gFontSize,
        align: 'center', 
        color: 'white',
        posY: 0 
    })
}

// storage
function _saveMemesToStorage() {
    var memes = saveToStorage(KEY, gMemeStorageArray)
}
 
