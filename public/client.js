const button = document.getElementById('loadButton');
const viewerId = 'viewer';

window.onload = (event) => {
  buildDropDown();
};

function buildDropDown() {
  fetch('/imageOptions', {method: 'GET'})  //find the filenames and list them
      .then(response => response.json())
        .then(data => {
          var myParent = document.getElementById('controls');
          var selectList = document.createElement("select"); //Create and append select list
          selectList.id = "imageChoice";
          myParent.appendChild(selectList); //Create and append the options
          for (var i = 0; i < data.length; i++) {
              var option = document.createElement("option");
              option.value = ('images/' + data[i]);
              option.text = data[i];
              selectList.appendChild(option);
          }
        })
    .catch(error => {
    });
}

button.addEventListener('click', function(e) {
  var e = document.getElementById("imageChoice");
  var imagePath = e.value;
  var viewerContainer = document.getElementById("viewerContainer");
  var viewer = document.getElementById(viewerId);
  if (viewer != null){    //make sure it's not already there
    viewer.remove();
  }
  loadImage(imagePath);
});

document.getElementById("controls").onload = function() {defaultImage()};

function defaultImage(){
  console.log("controls loaded pls");
  defaultImageUrl = 'images/almeria_oli2_2022144_lrg.jpg';
  loadImage(defaultImageUrl);
}

function loadImage(imagePath) {   //Load this fresh with every image
  console.log("debugmode commence");
  console.log(imagePath);
  const viewer = document.createElement('div');
  viewer.id = viewerId;
  viewerContainer.appendChild(viewer);
  var openSeaDragon = OpenSeadragon({
    id:            viewerId,
    prefixUrl:     'openseadragon/images/',
    tileSources: {
      type: 'image',
      url:  imagePath
    }
  });
}
