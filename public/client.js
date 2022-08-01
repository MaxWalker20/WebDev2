const button = document.getElementById('loadButton');
var viewer;
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  var e = document.getElementById("imageChoice");
  var value = e.value;
  var viewerContainer = document.getElementById("viewerContainer");
  console.log(value);
  if (viewer != null){
    viewer.replaceChild(value, url);
  } else {
    viewerContainer.appendChild(viewer);
    viewer = OpenSeadragon({
      id:            'viewer',
      prefixUrl:     'openseadragon/images/',
      tileSources: {
        type: 'image',
        url:  value
      }
    });
  }
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
