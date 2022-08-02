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

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request sent.');
    })
    .catch(function(error) {
      console.log(error);
    });
});
