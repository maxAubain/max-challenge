// Generate map with view parameters
let maxMap = L.map('mapid', {
  center: [35.530435614394, -115.785923098035],
  zoom: 6
});

// Add baselayer to map
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(maxMap);

// Add overlay to map, aligned by bounding box
L.imageOverlay('/static/map_app/Gopherus_agassizii_connectivity.png',
  [
    [32.887232724714, -118.888883749725],
    [38.173638504074, -112.682962446345]
  ],
  {
    opacity: "0.5",
    alt: "gopherus-agassizii-connectivity-overlay",
    zIndex: 1,
  }).addTo(maxMap)

// Extract and condition shapefile data
let testArray = []
for (let i = 0; i < 36; i++) {
  testArray[i] = i
}

shp('/static/map_app/ClarkGain.zip').then(function (geoJson) {
  console.log("geoJson: ", geoJson)

  // Add popup onClick of each layer 
  let i = 0
  L.geoJSON(geoJson, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        `<b><u>Feature properties</u></b> <br/>
        <b>Name</b>: ${feature.properties.Name || "(no name assigned)"} <br/> 
        <b>Designation</b>: ${feature.properties.designatio || "(no designation assigned)"} <br/>
        feature #: ${testArray[i]}`
      );
      i = i + 1
    }
  }).addTo(maxMap)
  console.log("L.geoJSON: ", L.geoJSON(geoJson))
});