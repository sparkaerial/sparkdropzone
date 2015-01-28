/************************************************************************
 * KNOX AWS Configuration (knox)
 */
var fs = require('fs');
var awsConfig = require('./awsConfig.json');
// var MultiPartUpload = require('knox-mpu')
var client = require('knox').createClient({
	key: awsConfig.accessKeyId,
  secret: awsConfig.secretAccessKey,
  bucket: 'kurtaws'
}); 

var fileName = './uploads/knoximage.png';
var remoteFileName = 'code/knoximage.png';
// upload(remoteFileName, fileName);

get(remoteFileName);


function upload(remoteFileName, fileName) {
  console.log('UPLOAD FUNCTION');
  fs.readFile(fileName, function(err, buf){
    if (err) {console.log(err);}
    else {
      var req = client.put(remoteFileName, {
        'Content-Length': buf.length,
        'Content-Type': 'text/plain'
      });
      req.on('response', function(res){
        if (200 == res.statusCode) {
          console.log('saved to %s', req.url);
        }
      });
      req.end(buf);
    }
  
  });
}

function get(path) {
  client.get(path).on('response', function(res){
    console.log(res.statusCode);
    console.log(res.headers);
    res.setEncoding('utf8');
    res.on('data', function(chunk){
      console.log('GET FUNCTION');
      console.log(chunk);
    });
  }).end();
}

/** 
 * Upload
 */
// var upload = null;
// upload = new MultiPartUpload(
//             {
//                 client: client,
//                 objectName: '/images/destination.png', // Amazon S3 object name
//                 stream: '../uploads/knoximage.png'
//             },
//             // Callback handler
//             function(err, body) {
//                 // If successful, will return body, containing Location, Bucket, Key, ETag and size of the object
//                 /*
//                   {
//                       Location: 'http://Example-Bucket.s3.amazonaws.com/destination.txt',
//                       Bucket: 'Example-Bucket',
//                       Key: 'destination.txt',
//                       ETag: '"3858f62230ac3c915f300c664312c11f-9"',
//                       size: 7242880
//                   }
//                 */
//             }
//         );

/**
*	Download
*/
// We need the fs module so that we can write the stream to a file

// Set the file name for WriteStream
// var file = fs.createWriteStream('slash-s3.jpg');
// knox.getFile('slash.jpg', function(err, res) {
//     res.on('data', function(data) { file.write(data); });
//     res.on('end', function(chunk) { file.end(); });
// });

// // /**
// // *	Delete
// // */
// knox.deleteFile('/guitarists/slash.jpg', function(err, res) {
//     if (200 == result.statusCode) { console.log('Deleted'); }
//     else console.log('Failed to delete');
// });

// /**
// *	PUT
// */
// knox.putFile('../uploads/27777_122005517814137_8335121_n1421995648923.jpg', 'guitarists/slash.jpg', {'Content-Type': 'image/jpeg'}, function(err, result) {
//     if (200 == result.statusCode) { console.log('Uploaded to mazon S3'); }
//     else { console.log('Failed to upload file to Amazon S3'); }
// });
