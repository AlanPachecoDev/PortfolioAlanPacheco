

// // BUTTON THAT OPENS THE ABOUTME CARD
// document.getElementById("aboutMeButton").onclick = function (){
//     document.getElementById("aboutMeCard").style.display = "flex";
// }

// // BUTTON THAT CLOSE THE ABOUTME CARD
// document.getElementById("closeAboutMeButton").onclick = function (){
//     document.getElementById("aboutMeCard").style.display = "none";
// }



// COWID

// CowIdText
var cowIdText = document.getElementById("cowIdText"); 

//CowIdImageContainer
var cowIdImage = document.getElementById("cowIdImageContainer"); 

cowIdText.onclick = function (){

    //zIndex position of cowIdImage
    var zI = window.document.defaultView.getComputedStyle(cowIdImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(cowIdImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI === 4){
        //Put the image in the layer 5 and the text in the layer 4
        cowIdImage.style.zIndex = 5;
        cowIdText.style.zIndex = 4;
    }else{
        cowIdImage.style.zIndex = 4;
        cowIdText.style.zIndex = 5;
    }
}

cowIdImage.onclick = function (){

    //zIndex position of cowIdImage
    var zI = window.document.defaultView.getComputedStyle(cowIdImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(cowIdImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI === 4){
        //Put the image in the layer 5 and the text in the layer 4
        cowIdImage.style.zIndex = 5;
        cowIdText.style.zIndex = 4;
    }else{
        cowIdImage.style.zIndex = 4;
        cowIdText.style.zIndex = 5;
    }
}







// MIKHUNA ECUADOR

// mikhunaText
var mikhunaText = document.getElementById("mikhunaText"); 

//mikhunaImageContainer
var mikhunaImage = document.getElementById("mikhunaImageContainer"); 

mikhunaText.onclick = function (){

    //zIndex position of cowIdImage
    var zI = window.document.defaultView.getComputedStyle(mikhunaImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(mikhunaImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI == 4){
        //Put the image in the layer 5 and the text in the layer 4
        mikhunaImage.style.zIndex = 5;
        mikhunaText.style.zIndex = 4;
    }else{
        mikhunaImage.style.zIndex = 4;
        mikhunaText.style.zIndex = 5;
    }
}

mikhunaImage.onclick = function (){

    //zIndex position of cowIdImage
    var zI = window.document.defaultView.getComputedStyle(mikhunaImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(mikhunaImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI == 4){
        //Put the image in the layer 5 and the text in the layer 4
        mikhunaImage.style.zIndex = 5;
        mikhunaText.style.zIndex = 4;
    }else{
        mikhunaImage.style.zIndex = 4;
        mikhunaText.style.zIndex = 5;
    }
}




// Bunny Bar

// bunnyText
var bunnyText = document.getElementById("bunnyText"); 

//bunnyImageContainer
var bunnyImage = document.getElementById("bunnyImageContainer"); 

bunnyText.onclick = function (){

    //zIndex position of bunnyImage
    var zI = window.document.defaultView.getComputedStyle(bunnyImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(mikhunaImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI == 4){
        //Put the image in the layer 5 and the text in the layer 4
        bunnyImage.style.zIndex = 5;
        bunnyText.style.zIndex = 4;
    }else{
        bunnyImage.style.zIndex = 4;
        bunnyText.style.zIndex = 5;
    }
}

bunnyImage.onclick = function (){

    //zIndex position of bunnyImage
    var zI = window.document.defaultView.getComputedStyle(bunnyImage,null).getPropertyValue("z-Index");
    if (isNaN(zI)) zI =  window.getZIndex(bunnyImage.parentNode);

    //If the image is behind the text (layer 4)
    if(zI == 4){
        //Put the image in the layer 5 and the text in the layer 4
        bunnyImage.style.zIndex = 5;
        bunnyText.style.zIndex = 4;
    }else{
        bunnyImage.style.zIndex = 4;
        bunnyText.style.zIndex = 5;
    }
}