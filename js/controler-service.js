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



function addLine() {
    if (gNumLines < 5) {
        createLine()
        setIdxOfLine(gNumLines)
        gNumLines++
        updateMemeCanvas()
    } else {
        alert("there are too much lines")
    }

}

function renderGalery() {
    var galery = getAllImages();
    var wrapper = gElImageWarper;
    var strInnerHtml = '';

    for (var i = 0; i < galery.length; i++) {
        strInnerHtml += `<div class="box" onclick="setImgIdAndGoToMeme(${i})">
                            <img src="${galery[i].url}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}

function renderMemesGalery() {
    var wrapper = gElMemesWarper;
    var strInnerHtml = '';
    var memes = loadFromStorage(KEY)
    if (memes === null) { return; }
    for (var i = 0; i < memes.length; i++) {
        strInnerHtml += `<div class="box">
                            <img src="${memes[i]}">
                        </div>`
    }
    wrapper.innerHTML = strInnerHtml;
}

// user screen 

function showGallery() {
    gElMyMemes.style.display = 'none';
    gElGallery.style.display = 'block';
    gElMemeGen.style.display = 'none';
}

function showMyMemes() {
    gElMyMemes.style.display = 'block';
    gElGallery.style.display = 'none';
    gElMemeGen.style.display = 'none';
}

function showAboutInfo() {
    console.log('fun')
}

function setImgIdAndGoToMeme(numId) {
    // document.querySelector('.gallery-holder','.my-meme-holder').classList.add('display-none')
    gElMyMemes.style.display = 'none';
    gElGallery.style.display = 'none';
    gElMemeGen.style.display = 'block';
    gMeme.selectedImgId = numId
        // insertImgToCanvas()
    updateMemeCanvas()
}
// btn functions
function textGoDown(diff) {
    var idx = getIdxOfLine()
    gMeme.lines[idx].posY += diff
    updateMemeCanvas()
}

function textGoUp(diff) {
    var idx = getIdxOfLine()
    gMeme.lines[idx].posY += diff
    updateMemeCanvas()
}

function switchLineFocus() {
    var idx = getIdxOfLine()
    idx++;
    setIdxOfLine(idx >= gMeme.lines.length ? 0 : idx)
        // if (idx >= gMeme.lines.length) {
        //     setIdxOfLine(0)
        // } else {
        //     setIdxOfLine(idx)
        // }
    updateMemeCanvas()
}

function deleteLine() {

    if (gNumLines) {
        var idx = getIdxOfLine()
        gMeme.lines.splice(idx, 1)
        switchLineFocus()
        updateMemeCanvas()
        gNumLines--
    } else {
        alert("No lines to delete")
    }

}

// EventListener
function onHandleChange(ev) {
    // console.log('ev.target',ev.target);
    var lineslength = getLinesLength()
    if (lineslength === 0) {
        createLine()
            ++gNumLines
    }

    setLine(ev.target.value)
    updateMemeCanvas()
}
// textInput.addEventListener("change", () =>{

// });
saveBtn.addEventListener("click", () => {
    var data = gElCanvas.toDataURL();
    gMemeStorageArray.push(data)
    _saveMemesToStorage()
    renderMemesGalery()
});

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL();
    console.log('data', data);
    elLink.href = data;
    elLink.download = `yourmeme`;
}

function insertImgToCanvas() {
    var img = new Image()
    img.src = getImgSrc()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function updateMemeCanvas() {
    var width = gElCanvas.width
    var height = gElCanvas.height
    var yOffset = height / 25;

    // update canvas img
    var imageObj = new Image();
    imageObj.src = getImgSrc();
    imageObj.onload = function() {
        gCtx.drawImage(imageObj, 0, 0, gElCanvas.width, gElCanvas.height)

        // prepare text
        for (var i = 0; i < gMeme.lines.length; i++) {
            var fontSize = gMeme.lines[i].size
            var txtPos = gMeme.lines[i].posY
            gCtx.strokeStyle = 'black';
            gCtx.lineWidth = Math.floor(fontSize / 4);
            gCtx.textAlign = gMeme.lines[i].align;
            gCtx.lineJoin = "round";
            gCtx.font = `${fontSize}px meme`

            if (i === 0) {
                if (isSwitchOn() === true) {
                    if (i === getIdxOfLine()) {
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width * 0.05, yOffset - fontSize * 0.20 + txtPos, width * 0.90, fontSize * 1.25)
                    }
                }
                // add top text
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'top'
                gCtx.strokeText(getLine(i), width / 2, yOffset + txtPos)
                gCtx.fillText(getLine(i), width / 2, yOffset + txtPos)

            } else if (i === 1) {
                if (isSwitchOn() === true) {
                    if (i === getIdxOfLine()) {
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width * 0.05, height - yOffset - fontSize * 1.15 + txtPos, width * 0.90, fontSize * 1.25)
                    }
                }
                // add bottom text
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'bottom'
                gCtx.strokeText(getLine(i), width / 2, height - yOffset + txtPos)
                gCtx.fillText(getLine(i), width / 2, height - yOffset + txtPos)
            } else {
                if (isSwitchOn() === true) {
                    if (i === getIdxOfLine()) {
                        gCtx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                        gCtx.fillRect(width * 0.05, height / 2 - fontSize * 1.15 + txtPos, width * 0.90, fontSize * 1.25)
                    }
                }
                // todo
                gCtx.fillStyle = gMeme.lines[i].color;
                gCtx.textBaseline = 'center'
                gCtx.strokeText(getLine(i), width / 2, height / 2 + txtPos)
                gCtx.fillText(getLine(i), width / 2, height / 2 + txtPos)
            }
        }
    }
}

function toggleLineSwitch() {
    gSwitch = !gSwitch
    updateMemeCanvas()
        // if (gSwitch === false) {
        //     gSwitch = true;
        //     updateMemeCanvas()
        // } else {
        //     gSwitch = false
        //     updateMemeCanvas()
        // }
}

function isSwitchOn() {
    return gSwitch;
}