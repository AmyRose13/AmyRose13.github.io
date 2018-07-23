alert("HI there!!! :)");

window.onload = init;

/*************************************************************************
defintion of init function: Intializes page
*************************************************************************/

function init() {
  var sliderImage = document.getElementsByClassName('slide-image');
  sliderImage[0].style.display = 'block';
  for (var i = 1; i < sliderImage.length; i++) {
    sliderImage[i].style.display = 'none';
  }
//setting up the buttons

var sliderBtns = document.getElementsByClassName('slider-btns');
for (var i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].onclick = function () { showNextImage(this.id, sliderImage); };



   }
}

function showNextImage(objectId, sliderImages) {
  var currentImageIndex = findCurrentImage(sliderImages);
  var nextImageIndex;

  if (objectId == 'next-btn') {
    nextImageIndex = (currentImageIndex + 1) % sliderImages.length;
  }
  else {
    nextImageIndex = ((currentImageIndex - 1) + sliderImages.length) % sliderImage.length;
  }
 sliderImages[currentImageIndex].style.display = 'none';
 sliderImages[nextImageIndex].style.display = 'block';

}

function findCurrentImage(sliderImage) {
  for (var i = 0; i < sliderImage.length; i++){
    if(sliderImage[i].style.display == 'block'){
      return i;
    }
  }
}
