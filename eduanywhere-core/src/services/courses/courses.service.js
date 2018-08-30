// Initializes the `courses` service on path `/courses`
const createService = require('feathers-mongoose');
const createModel = require('../../models/courses.model');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/courses', createService(options));
};
