'use strict'

// globals

const gElImageWarper = document.querySelector('.images-wrapper')
const gElGallery = document.querySelector('.gallery-holder')
const gElMemeGen = document.querySelector('.meme-generator')
const gLinesAdder = document.querySelector('.lines-adder')
const gElMyMemes = document.querySelector('.my-meme-holder')
const gElMemesWarper = document.querySelector('.memes-wrapper')
var gNumLines = gMeme.lines.length;
// const gElInfo = document.querySelector('') // finish



function addLine(){
    if(gNumLines < 5){
        createLine()
        gNumLines++
        updateMemeCanvas()
    }else{
        alert("there are too much lines")
    }
    
}
function renderGalery(){
    var galery = getAllImages();
    var wrapper = gElImageWarper;
    var strInnerHtml = '';

    for(var i=0; i < galery.length ; i++){
        strInnerHtml += `<div class="box" onclick="setImgIdAndGoToMeme(${i})">
                            <img src="${galery[i].url}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}
function renderMemesGalery(){
    var wrapper = gElMemesWarper;
    var strInnerHtml = '';
    var memes = loadFromStorage(KEY)
    if(memes === null){ return;}
    for(var i=0; i < memes.length ; i++){
        strInnerHtml += `<div class="box">
                            <img src="${memes[i]}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}

// user screen 

function showGallery(){
    gElMyMemes.style.display = 'none';
    gElGallery.style.display = 'block';
    gElMemeGen.style.display = 'none'; 
}
function showMyMemes(){
    gElMyMemes.style.display = 'block';
    gElGallery.style.display = 'none';
    gElMemeGen.style.display = 'none'; 
}
function showAboutInfo(){
    console.log('fun')
}
function setImgIdAndGoToMeme(numId){
    gElMyMemes.style.display = 'none';
    gElGallery.style.display = 'none';
    gElMemeGen.style.display = 'block'; 
    gMeme.selectedImgId = numId
    // insertImgToCanvas()
    updateMemeCanvas()
}
