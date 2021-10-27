'use strict'
// Globals //
var gKeywords = {'happy':0,
                 'crazy':0,
                 'sarcastic':0,
                 'sad':0,
                }

var gImgs = [
    {id: 1, url: 'img-squareMeme/1.jpg', keywords: ['happy']},
    {id: 2, url: 'img-squareMeme/2.jpg', keywords: ['happy']},
    {id: 3, url: 'img-squareMeme/3.jpg', keywords: ['happy']},
    {id: 4, url: 'img-squareMeme/4.jpg', keywords: ['happy']},
    {id: 5, url: 'img-squareMeme/5.jpg', keywords: ['happy']},
    {id: 6, url: 'img-squareMeme/6.jpg', keywords: ['happy']},
    {id: 7, url: 'img-squareMeme/7.jpg', keywords: ['happy']},
    {id: 8, url: 'img-squareMeme/8.jpg', keywords: ['happy']},
    {id: 9, url: 'img-squareMeme/9.jpg', keywords: ['happy']},
    {id: 10, url: 'img-squareMeme/10.jpg', keywords: ['happy']},
    {id: 11, url: 'img-squareMeme/11.jpg', keywords: ['happy']},
    {id: 12, url: 'img-squareMeme/12.jpg', keywords: ['happy']},
    {id: 13, url: 'img-squareMeme/13.jpg', keywords: ['happy']},
    {id: 14, url: 'img-squareMeme/14.jpg', keywords: ['happy']},
    {id: 15, url: 'img-squareMeme/15.jpg', keywords: ['happy']},
    {id: 16, url: 'img-squareMeme/16.jpg', keywords: ['happy']},
    {id: 17, url: 'img-squareMeme/17.jpg', keywords: ['happy']},
    {id: 18, url: 'img-squareMeme/18.jpg', keywords: ['happy']}
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

function init(){
    insertImgToCanvas()
}
