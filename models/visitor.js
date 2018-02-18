'use strict';
module.exports = (sequelize, DataTypes) => {
  var Visitor = sequelize.define('Visitor', {
    linkId: {
      type: DataTypes.INTEGER,
      references: { model: 'Links', key: 'id' }
    },
    ip: DataTypes.STRING,
    userAgent: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Visitor;
};