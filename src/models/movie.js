'use strict';

const movieModel = (sequelize, DataTypes) => sequelize.define('Movies', {
  title: { type: DataTypes.STRING, required: true },
  rating: { type: DataTypes.INTEGER, required: true,
    validate: {
      min: 0,
      max: 13
    }
   }
});

module.exports = movieModel;
