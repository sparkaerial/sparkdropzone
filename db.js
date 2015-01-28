if (process.env.NODE_ENV === 'production') {
	module.exports = {
		'url' : 'mongodb://heroku_app33523600:qcs2hc4oq4r8211qb0urc65m1t@ds053708.mongolab.com:53708/heroku_app33523600'
	}
}
else {
	module.exports = {
		'url' : 'mongodb://localhost/test'
	}
}
