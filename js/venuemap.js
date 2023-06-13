// Initialize the map
var map = L.map('map').setView([13.4105, 121.1817], 13);

// Add the base map tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a markers to the map
var marker = L.marker([13.391239444856735, 121.16591659570544]).addTo(map);
marker.bindPopup("<b>Nikita's Hotel</b>").openPopup();
var marker = L.marker([13.404109751419167, 121.1839587508035]).addTo(map);
marker.bindPopup("<b>Filipiniana Hotel Calapan</b>").openPopup();
var marker = L.marker([13.406621766588769, 121.17644991253877]).addTo(map);
marker.bindPopup("<b>Shakey's Pizza Parlor</b>").openPopup();
var marker = L.marker([13.408570859720966, 121.17570145916544]).addTo(map);
marker.bindPopup("<b>Tagpuan Bistro</b>").openPopup();
var marker = L.marker([13.404093641244359, 121.18347895426578]).addTo(map);
marker.bindPopup("<b>Halcon's Bar and Resto</b>").openPopup();
var marker = L.marker([13.416787847211651, 121.18293757265948]).addTo(map);
marker.bindPopup("<b>Dad & Me Cafe</b>").openPopup();
var marker = L.marker([13.40327278970849, 121.18476808125364]).addTo(map);
marker.bindPopup("<b>Uncle Jov's</b>").openPopup();
var marker = L.marker([13.403116160635731, 121.1804511556802]).addTo(map);
marker.bindPopup("<b>Juancios Burgers</b>").openPopup();
var marker = L.marker([13.408968632460331, 121.17842813033002]).addTo(map);
marker.bindPopup("<b>Blossom Food Delight</b>").openPopup();
var marker = L.marker([13.404678673969288, 121.18381332128149]).addTo(map);
marker.bindPopup("<b>DUTCH CAFE</b>").openPopup();
var marker = L.marker([13.396719400595094, 121.16884797220658]).addTo(map);
marker.bindPopup("<b>Vencios Garden Hotel and Restaurant</b>").openPopup();
var marker = L.marker([13.37228246006161, 121.16716428080255]).addTo(map);
marker.bindPopup("<b>Balai Mindoro</b>").openPopup();
var marker = L.marker([13.358213749797297, 121.16956772313077]).addTo(map);
marker.bindPopup("<b>Eduardo's Resort</b>").openPopup();
var marker = L.marker([13.308097916545359, 121.15271138265155]).addTo(map);
marker.bindPopup("<b>Villa Agueda Events Place</b>").openPopup();
var marker = L.marker([13.41017516799252, 121.15401333662457]).addTo(map);
marker.bindPopup("<b>El Pueblo Rhizort</b>").openPopup();
var marker = L.marker([13.415123781176934, 121.16229236546039]).addTo(map);
marker.bindPopup("<b>Czeascape Beach Resort</b>").openPopup();
var marker = L.marker([13.41513330846164, 121.16994392905966]).addTo(map);
marker.bindPopup("<b>Playa Ignacio Resort</b>").openPopup();
var marker = L.marker([13.396370619181065, 121.21584820778871]).addTo(map);
marker.bindPopup("<b>Villa El Salvador</b>").openPopup();
var marker = L.marker([13.388272, 121.172464]).addTo(map);
marker.bindPopup("<b>Welcome to Calapan!</b>").openPopup();