'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var User = require('./user')


module.exports = db.define('campus', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.STRING
	},
	//other stuff?
	fields: {
		type: Sequelize.STRING
	},
	mascot: {
		type: Sequelize.STRING
	},
	comment: {
		type: Sequelize.STRING
	}
})

//student body
//mascot
//specialty fields
