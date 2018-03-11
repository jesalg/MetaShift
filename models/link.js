'use strict';
import shortid from 'shortid';

module.exports = (sequelize, DataTypes) => {
  var Link = sequelize.define('Link', {
    url: DataTypes.STRING,
    meta: DataTypes.JSONB,
    facebookMeta: DataTypes.JSONB,
    twitterMeta: DataTypes.JSONB,
    email: { type: DataTypes.STRING, allowNull: true, validate: {isEmail: true} },
    editHash: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, unique: true },
    viewHash: { type: DataTypes.STRING, defaultValue: function() { return shortid.generate() }, unique: true },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Link;
};
