const movieModel = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    movie: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  })

  return Movie;
};

module.exports = movieModel;