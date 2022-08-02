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
        })


    // .then(function(response) {
    //   const body = response.result[];
    //   console.log(body);
    //   if(response.ok) {
    //     return;
    //   }
    //   throw new Error('Request sent.');
    // })
    .catch(error => {
      console.log(error);
    });

  var myParent = document.getElementById('controls');

  //Create array of options to be added
  var array = ["Volvo","Saab","Mercades","Audi"];

  //Create and append select list
  var selectList = document.createElement("select");
  selectList.id = "mySelect";
  myParent.appendChild(selectList);

  //Create and append the options
  for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
  }


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
