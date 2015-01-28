/**********************************************************************
 * AWS Configuration (aws-sdk)
 */
var AWS = require('aws-sdk'); 
AWS.config.loadFromPath('./config/awsConfig.json');

var s3 = new AWS.S3({Bucket : 'kurtaws'}); 

/** 
 * 	S3
 *
 *	PUT 
 */
// s3.putObject({Key: 'image'}, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

/** 
 * 	S3
 *
 *	List S3 Buckets
 */
// var s3 = new AWS.S3(); 
// s3.getObject({Bucket: 'kurtaws', Key: 'Site 1/'}, function(err, data) {
//   if (err) {
//     console.log(err); // error is Response.error
//   } else {
//     console.log(data); // data is Response.data
//   }
// });


s3.listBuckets(function(error, data) {
  if (error) {
    console.log(error); // error is Response.error
  } else {
    console.log(data); // data is Response.data
  }
});


// s3.listBuckets(function(err, data) {
//   if (err) { console.log("Error:", err); }
//   else {
//   	console.log("S3 DATA");
//   	console.log(data);
//   	console.log("EC2 DATA BUCKETS");
//   	console.log(data.Buckets[0]);
//     for (var index in data.Buckets) {
//       var bucket = data.Buckets[index];
//       console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
//     }
//   }
// });

/** 
 * Create a Bucket
 *
 *
 */
// s3.createBucket({Bucket: 'expressBucket'}, function() {

//   var params = {Bucket: 'expressBucket', Key: 'myKey', Body: 'Hello!'};

//   s3.putObject(params, function(err, data) {
//       if (err)       
//           console.log("S3 ERROR" + err)  ;   
//       else console.log("Successfully uploaded data to myBucket/myKey");   
//   });

// });

/**
*   Create a bucket
*
*
*/
// var s3bucket = new AWS.S3({Bucket: 'express-bucket-spark'});
// s3bucket.createBucket({Bucket: 'express-bucket-spark/level-two'}, function() {
//   var params = {Bucket: 'express-bucket-spark', Key: 'expressKey', Body: 'Hello!'};
//   s3bucket.upload(params, function(err, data) {
//     if (err) {
//       console.log("S3 BUCKET Error uploading data: ", err);
//     } else {
//       console.log("S3 BUCKET Successfully uploaded data to myBucket/myKey");
//     }
//   });
// });




/*********************************************************************** 
 * AWS2JS Configuration (aws2js)
 */
// var zlib = require('zlib');
// var awsConfig = require('./aws.json');
// var s3 = require('aws2js').load('s3', awsConfig.accessKeyId, awsConfig.secretAccessKey);

// s3.setBucket('kurtaws');

// var folder = encodeURI('/Site 1/');
// var url = '?prefix=' + folder;

// s3.get(url, {}, {}, function (error, data) {
//     if (error) {
// 		console.log("ERROR");
// 		console.log(error);
// 	}
// 	else {
// 		console.log("DATA");
// 		console.log(data);
// 	}
// });


// creates the bar bucket with public-read access into the Northern California region
// s3.createBucket('bar', 'public-read', 'us-west-1', function (error, result) {
// 	if (error) {
// 		console.log("ERROR");
// 		console.log(error);
// 	}
// 	else {
// 		console.log("DATA");
// 		console.log(result);
// 	}
// });


