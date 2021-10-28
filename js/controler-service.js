'use strict'

// globals
const gElImageWarper = document.querySelector('.images-wrapper')
const gElGallery = document.querySelector('.gallery-holde')
const gElMemeGen = document.querySelector('.meme-generator')
// const gElInfo = document.querySelector('') // finish


function renderGalery(){
    var galery = getAllImages();
    var wrapper = gElImageWarper;
    var strInnerHtml = ' ';

    console.log(galery[3].url)
    for(var i=0; i < galery.length ; i++){
        strInnerHtml += `<div class="box" onclick="setImgIdAndGoToMeme(${i})">
                            <img src="${galery[i].url}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}


// user screen 

function showGallery(){
    var gallery = document.querySelector('.gallery-holder')
    var memeGen = document.querySelector('.meme-generator')
    memeGen.style.display = 'none';
    gallery.style.display = 'block';
}
function showMemesEditor(){
    var gallery = document.querySelector('.gallery-holder')
    var memeGen = document.querySelector('.meme-generator')
    gallery.style.display = 'none';
    memeGen.style.display = 'block'; 

}
function showAboutinfo(){
    console.log('fun')
}
function setImgIdAndGoToMeme(numId){
    var gallery = document.querySelector('.gallery-holder')
    var memeGen = document.querySelector('.meme-generator')
    gallery.style.display = 'none';
    memeGen.style.display = 'block'; 
    gMeme.selectedImgId = numId
    insertImgToCanvas()
}
