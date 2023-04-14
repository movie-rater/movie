'use strict';

const movieModel = (sequelize, DataTypes) => sequelize.define('movieProj', {
  title: { type: DataTypes.STRING, required: true },
  rating: {
    type: DataTypes.INTEGER, 
    validate: {
      max: {
        args: [13],
        msg: "Maximum 13 in rating"
      },
      min: {
        args: [0],
        msg: "Minimum 0 in rating"
      }
    },
      required: true
  }
});

module.exports = movieModel;
