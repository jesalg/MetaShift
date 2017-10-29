'use strict';
module.exports = (sequelize, DataTypes) => {
  var Link = sequelize.define('Link', {
    url: DataTypes.STRING,
    meta: DataTypes.JSONB,
    facebookMeta: DataTypes.JSONB,
    twitterMeta: DataTypes.JSONB,
    email: { type: DataTypes.STRING, validate: {isEmail: true} },
    editHash: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, unique: true },
    viewHash: { type: DataTypes.UUID, defaultValue: function() { return 'TODO'}, unique: true },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link;
};