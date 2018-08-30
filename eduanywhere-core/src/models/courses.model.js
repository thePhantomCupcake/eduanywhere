// courses-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const courses = new mongooseClient.Schema({

    name: {type: String, unique: true},

  }, {
    timestamps: true
  });

  return mongooseClient.model('courses', courses);
};
