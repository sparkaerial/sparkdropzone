if (process.env.NODE_ENV === 'production') {
	module.exports = {
		'url' : 'mongodb://WfdoUmqEeeMM:LUkPfstcYCrl@mongosoup-cont002.mongosoup.de:31604/cc_WfdoUmqEeeMM'
	}
}
else {
	module.exports = {
		'url' : 'mongodb://localhost/test'
	}
}
