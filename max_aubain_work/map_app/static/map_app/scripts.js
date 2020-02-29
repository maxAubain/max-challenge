let maxMap = L.map('mapid', {
  center: [35.530435614394, -115.785923098035],
  zoom: 6
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(maxMap);

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

shp('/static/map_app/ClarkGain.zip').then(function (geojson) {
  L.geoJSON(geojson).addTo(maxMap)
});

/*
GeoJSON data extracted from the .tif file using rasterio CLI => `rio bounds Gopherus_agassizii_connectivity.tif --indent 2`
reference: https://rasterio.readthedocs.io/en/latest/cli.html
const geoJsonData = {
  "bbox": [
    -118.888883749725,
    32.887232724714,
    -112.682962446345,
    38.173638504074
  ],
  "geometry": {
    "coordinates": [
      [
        [-118.888883749725, 32.887232724714],
        [-112.682962446345, 32.887232724714],
        [-112.682962446345, 38.173638504074],
        [-118.888883749725, 38.173638504074],
        [-118.888883749725, 32.887232724714]
      ]
    ],
    "type": "Polygon"
  },
  "properties": {
    "filename": "Gopherus_agassizii_connectivity.tif",
    "id": "0",
    "title": "Gopherus_agassizii_connectivity.tif"
  },
  "type": "Feature"
}
*/