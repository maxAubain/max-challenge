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

// statsArray is obtained using the library `rasterstats`, calculated by `/manual/get_zonal_stats.py
const statsArray = [
  { "min": -9.749308586120605, "max": -7.081228256225586, "mean": -8.29386705189531, "count": 135677, "median": -8.259998321533203 },
  { "min": -10.020764350891113, "max": -7.2244038581848145, "mean": -8.581563303341902, "count": 21395, "median": -8.493752479553223 },
  { "min": -9.829345703125, "max": -7.230766296386719, "mean": -8.259559850601239, "count": 82330, "median": -8.23171615600586 },
  { "min": -10.001840591430664, "max": -7.777482032775879, "mean": -9.289113957194386, "count": 221513, "median": -9.3804931640625 },
  { "min": -10.001840591430664, "max": -7.737849712371826, "mean": -8.967099877075121, "count": 409193, "median": -9.000080108642578 },
  { "min": -9.935564041137695, "max": -7.1522345542907715, "mean": -8.56059351253414, "count": 36979, "median": -8.457496643066406 },
  { "min": -9.914806365966797, "max": -6.540493011474609, "mean": -8.603998007550336, "count": 29800, "median": -8.672367095947266 },
  { "min": -9.785331726074219, "max": -7.373603820800781, "mean": -8.355192523781671, "count": 129932, "median": -8.285327911376953 },
  { "min": -9.562292098999023, "max": -7.477446556091309, "mean": -8.432207451241874, "count": 53991, "median": -8.367117881774902 },
  { "min": -9.918497085571289, "max": -7.128957748413086, "mean": -8.513817495873615, "count": 127230, "median": -8.435455322265625 },
  { "min": -3.4028230607370965e+38, "max": -7.3656721115112305, "mean": -3.4028230607370965e+38, "count": 82607, "median": -8.912172317504883 },
  { "min": -9.881027221679688, "max": -7.236536026000977, "mean": -8.630992743492923, "count": 69386, "median": -8.619518280029297 },
  { "min": -3.4028230607370965e+38, "max": -6.596883773803711, "mean": -6.819968054388408e+33, "count": 49895, "median": -8.953994750976562 },
  { "min": -9.311820983886719, "max": -7.941429138183594, "mean": -8.542203448735528, "count": 6564, "median": -8.514927864074707 },
  { "min": -9.502840995788574, "max": -7.147283554077148, "mean": -8.365984633399624, "count": 4777, "median": -8.341876029968262 },
  { "min": -9.425134658813477, "max": -7.568277359008789, "mean": -8.14028145629259, "count": 587, "median": -8.062932014465332 },
  { "min": -9.773200988769531, "max": -7.039999008178711, "mean": -8.236962857744107, "count": 14850, "median": -8.24166202545166 },
  { "min": -9.82261848449707, "max": -7.263625144958496, "mean": -8.496250211479085, "count": 47286, "median": -8.417219161987305 },
  { "min": -10.090265274047852, "max": -7.22406005859375, "mean": -8.593688823053432, "count": 306488, "median": -8.587039947509766 },
  { "min": -9.857067108154297, "max": -7.00563907623291, "mean": -8.3481313155161, "count": 52945, "median": -8.319162368774414 },
  { "min": -9.876129150390625, "max": -6.96754264831543, "mean": -8.692453871250754, "count": 54711, "median": -8.772778511047363 },
  { "min": -10.027463912963867, "max": -6.897305488586426, "mean": -8.235758766024425, "count": 210928, "median": -8.115056991577148 },
  { "min": -10.04684829711914, "max": -6.846412658691406, "mean": -8.148089063235048, "count": 790764, "median": -8.003072738647461 },
  { "min": -9.936001777648926, "max": -6.972588539123535, "mean": -8.42827774545644, "count": 230326, "median": -8.337564468383789 },
  { "min": -10.020764350891113, "max": -7.211099624633789, "mean": -8.515443528140418, "count": 91612, "median": -8.390993118286133 },
  { "min": -10.032435417175293, "max": -6.906350135803223, "mean": -8.589799295520438, "count": 526346, "median": -8.477787971496582 },
  { "min": -9.342942237854004, "max": -7.9782633781433105, "mean": -8.360100646528306, "count": 46015, "median": -8.356195449829102 },
  { "min": -10.016297340393066, "max": -7.176597595214844, "mean": -8.226314761728375, "count": 124186, "median": -8.091266632080078 },
  { "min": -9.58300495147705, "max": -7.089469909667969, "mean": -8.25658997045812, "count": 68039, "median": -8.199350357055664 },
  { "min": -9.66135025024414, "max": -6.878640651702881, "mean": -8.537704544502178, "count": 23864, "median": -8.492895126342773 },
  { "min": -9.935564041137695, "max": -7.1522345542907715, "mean": -8.459359213930757, "count": 97396, "median": -8.33730697631836 },
  { "min": -9.634809494018555, "max": -7.9005537033081055, "mean": -8.494014850111029, "count": 4053, "median": -8.432474136352539 },
  { "min": -9.863107681274414, "max": -6.972588539123535, "mean": -8.479570063483228, "count": 150906, "median": -8.426764488220215 },
  { "min": -9.66135025024414, "max": -6.878640651702881, "mean": -8.31429873482115, "count": 106151, "median": -8.220926284790039 },
  { "min": -9.935564041137695, "max": -6.972588539123535, "mean": -8.471876014538083, "count": 252578, "median": -8.381722450256348 },
  { "min": -9.80698013305664, "max": -7.196080684661865, "mean": -8.56030099516015, "count": 36778, "median": -8.458723068237305 }
]

shp('/static/map_app/ClarkGain.zip').then(function (geoJson) {
  // Add popup onClick of each layer 
  let i = 0
  L.geoJSON(geoJson, {
    onEachFeature: function (feature, layer) {
      let meanVal = statsArray[i].mean.toFixed(3)
      let medianVal = statsArray[i].median.toFixed(3)
      layer.bindPopup(
        `<b><u>Feature properties</u></b> <br/>
        <b>Name</b>: ${feature.properties.Name || "(no name assigned)"} <br/> 
        <b>Designation</b>: ${feature.properties.designatio || "(no designation assigned)"} <br/>
        <b>Mean Gain</b>: ${meanVal} <br/>
        <b>Median Gain</b>: ${medianVal} <br/>`
      );
      i = i + 1
    }
  }).addTo(maxMap)
});