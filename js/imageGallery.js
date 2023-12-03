
/* Open pictures from gallery*/


var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img1.onclick = function(){
    openModal(this);
}
img2.onclick = function(){
    openModal(this);
}
img3.onclick = function(){
    openModal(this);
}
img4.onclick = function(){
    openModal(this);
}
img5.onclick = function(){
    openModal(this);
}
img6.onclick = function(){
    openModal(this);
}


function openModal(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
  }


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

