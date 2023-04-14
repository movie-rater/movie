'use strict';

const movieModel = (sequelize, DataTypes) => sequelize.define('Movies', {
  title: { type: DataTypes.STRING, required: true },
  rating: {
    type: DataTypes.INTEGER, 
      required: true
  }
});

module.exports = movieModel;
