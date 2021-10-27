'use strict'

// globals

var gElImageWarper = document.querySelector('.images-wrapper')



function renderGalery(){
    var galery = getAllImages();
    var wrapper = gElImageWarper;
    var strInnerHtml = ' ';

    console.log(galery[3].url)
    for(var i=0; i < galery.length ; i++){
        strInnerHtml += `<div class="box" onclick="setImgId(${i})">
                            <img src="/${galery[i].url}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}

