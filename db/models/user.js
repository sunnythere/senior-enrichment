'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
   firstName: {
      type: Sequelize.STRING,
      allowNull: false
   },
   lastName: {
      type: Sequelize.STRING,
      allowNull: false
   },
   email: {
      type: Sequelize.STRING,
      validate: { isEmail: true }
   },
   phone: {
      type: Sequelize.STRING
   },
   dob: {
      type: Sequelize.DATEONLY
   },
   status: {
      type: Sequelize.ENUM('junior', 'senior', 'alumni')
   }
}, {
   getterMethods: {
      getFormattedDob: function () {
         const dobString = this.dob.toString()
         return `${dobString.slice(4,10)}, ${dobString.slice(11, 15)}`;
         //toString starts w/ day of week
      }
   }
})
