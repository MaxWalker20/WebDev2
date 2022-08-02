const button = document.getElementById('loadButton');
const viewerId = 'viewer';



function loadImage(imagePath) {
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

function buildDropDown() {
  fetch('/imageOptions', {method: 'GET'})
      .then(response => response.json())
        .then(data => {
          console.log(data);
          var myParent = document.getElementById('controls');

          //Create and append select list
          var selectList = document.createElement("select");
          selectList.id = "imageChoice";
          myParent.appendChild(selectList);

          //Create and append the options
          for (var i = 0; i < data.length; i++) {
              var option = document.createElement("option");
              option.value = ('images/' + data[i]);
              option.text = data[i];
              selectList.appendChild(option);
          }
        })
    .catch(error => {
      console.log(error);
    });




}

button.addEventListener('click', function(e) {
  console.log('button was clicked');
  var e = document.getElementById("imageChoice");
  var imagePath = e.value;
  var viewerContainer = document.getElementById("viewerContainer");
  var viewer = document.getElementById(viewerId);
  console.log(imagePath);
  if (viewer != null){
    viewer.remove();
  }
  loadImage(imagePath);


});

window.onload = (event) => {
  buildDropDown();
};
