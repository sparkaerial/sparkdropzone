var Dropzone = require('dropzone');
require('mapbox.js');

// Dropzone.options.myAwesomeDropzone = { 
// 	maxFilesize: 10,
// 	init: function() {
// 	    this.on("addedfile", function(file) { alert("Added file."); });
// 	},
// 	addRemoveLinks: dictRemoveFile,
// 	url: "/target"
// };


L.mapbox.accessToken = 'pk.eyJ1IjoiYWRtaW5zcGFyayIsImEiOiJTb2drNTlNIn0.u-tS-njK87RRTZabxtdmhg';
var map = L.mapbox.map('map', 'adminspark.l0ejha7h').setView([33.036073322189246, -117.26696133613585], 18);
