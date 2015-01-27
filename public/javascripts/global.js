var dragDrop = require('drag-drop');
var Dropzone = require('dropzone');

dragDrop('#dropTarget', function (files, pos) {
  console.log('Here are the dropped files', files)
  console.log('Dropped at coordinates', pos.x, pos.y)
});

Dropzone.options.myAwesomeDropzone = { 
	maxFilesize: 10,
	init: function() {
	    this.on("addedfile", function(file) { alert("Added file."); });
	},
	addRemoveLinks: dictRemoveFile
};