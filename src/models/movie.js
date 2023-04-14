'use strict';

const movieModel = (sequelize, DataTypes) => sequelize.define('Movies', {
  title: { type: DataTypes.STRING, required: true },
  rating: {
    type: DataTypes.INTEGER, required: true,
    validate: {
      max: {
        args: [13],
        msg: "Maximum 13 in rating"
      },
      min: {
        args: [0],
        msg: "Minimum 0 in rating"
      }
    }
  }
});

module.exports = movieModel;
