var Dropzone = require('dropzone');

Dropzone.options.myAwesomeDropzone = { 
	maxFilesize: 10,
	init: function() {
	    this.on("addedfile", function(file) { alert("Added file."); });
	},
	addRemoveLinks: dictRemoveFile,
	url: "/target"
};