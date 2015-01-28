var fs = require('fs');
var AWS = require('aws-sdk'); 
AWS.config.loadFromPath('./config/awsConfig.json');

var BUCKET_NAME = 'kurtaws';
var s3 = new AWS.S3({Bucket: BUCKET_NAME});


downloadFile('/uploads/knoximage.png');

/**
*	@Name: Upload Images
*	@Class: Front
*/
function uploadImages() {
  var CODE_PATH = 'uploads/';
  var fileList = getFileList('./' + CODE_PATH);

  fileList.forEach(function(entry) {
    uploadFile(CODE_PATH + entry, './' + CODE_PATH + entry);
  });

  console.log('Images have finished uploading');
}

/**
*	@Name: Upload Images
*	@Class: Back
*/
function getFileList(path) {
  var i, fileInfo, filesFound;
  var fileList = [];

  filesFound = fs.readdirSync(path);
  for (i = 0; i < filesFound.length; i++) {
    fileInfo = fs.lstatSync(path + filesFound[i]);
    if (fileInfo.isFile()) fileList.push(filesFound[i]);
  }

  console.log(fileList);
  return fileList;
}

/**
*	@Name: Upload Images
*	@Class: Background
*/
function downloadFile(remoteFilename) {
  // var fileBuffer = fs.readFileSync(fileName);
  var metaData = getContentTypeByFile(remoteFilename);

  s3.getObject({
	    Bucket: BUCKET_NAME,
	    Key: remoteFilename,
	    ResponseContentType: metaData
  	}, 
  	function(error, response) {					// callback
	    console.log('Downloaded File[' + remoteFilename + '] as [' + metaData + ']');
	    console.log(arguments);
  });
}

// s3.GetObject(options, { stream : true }, function(err, data) {
//     res.attachment('test.pdf');
//     data.Stream.pipe(res);
// });

/**
*	@Name: Upload Images
*	@Class: Background
*/
function uploadFile(remoteFilename, fileName) {
  var fileBuffer = fs.readFileSync(fileName);
  var metaData = getContentTypeByFile(fileName);

  s3.putObject({
    ACL: 'public-read',
    Bucket: BUCKET_NAME,
    Key: remoteFilename,
    Body: fileBuffer,
    ContentType: metaData
  }, 
  	function(error, response) {					// callback
	    console.log('uploaded file[' + fileName + '] to [' + remoteFilename + '] as [' + metaData + ']');
	    console.log(arguments);
  });
}

/**
*	@Name: Upload Images
*	@Class: Background
*/
function getContentTypeByFile(fileName) {
  var rc = 'application/octet-stream';
  var fileNameLowerCase = fileName.toLowerCase();

  if (fileNameLowerCase.indexOf('.html') >= 0) rc = 'text/html';
  else if (fileNameLowerCase.indexOf('.css') >= 0) rc = 'text/css';
  else if (fileNameLowerCase.indexOf('.json') >= 0) rc = 'application/json';
  else if (fileNameLowerCase.indexOf('.js') >= 0) rc = 'application/x-javascript';
  else if (fileNameLowerCase.indexOf('.png') >= 0) rc = 'image/png';
  else if (fileNameLowerCase.indexOf('.jpg') >= 0) rc = 'image/jpg';

  return rc;
}

/**
*	@Name: Upload Images
*	@Class: Front
*/
function createBucket(bucketName) {
  s3.createBucket({Bucket: bucketName}, function() {
    console.log('created the bucket[' + bucketName + ']')
    console.log(arguments);
  });
}






