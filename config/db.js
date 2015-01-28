// if (process.env.NODE_ENV === 'production') {
// 	module.exports = {
// 		'url' : process.ENV.MONGOLAB_URI || 'mongodb://heroku_app33523600:qcs2hc4oq4r8211qb0urc65m1t@ds053708.mongolab.com:53708/heroku_app33523600'
// 	}
// }
// else {
// 	module.exports = {
// 		'url' : 'mongodb://localhost/test'
// 	}
// }
var mongoose = require('mongoose');
var url = process.env.MONGOLAB_URI || 'mongodb://localhost/test';
mongoose.connect(url);
module.exports = mongoose;
