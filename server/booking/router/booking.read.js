const express = require('express');

const { validate } = require('../../utils/validation');
const auth = require('../../auth');
const bookingManager = require('../');

const readRouter = express.Router({ mergeParams: true });

module.exports = readRouter;

readRouter.use(auth.authenticate());

readRouter.get('/', validate({ page: 'numeric?', limit: 'numeric?' }, 'query'), (req, res, next) => {
  bookingManager
    .list(req.validData)
    .then(result => res.json(result))
    .catch(next);
});

readRouter.get(
  '/:id',

  validate({ id: 'string' }, 'params'),
  (req, res, next) => {
    bookingManager
      .get(req.validData)
      .then(result => res.json(result))
      .catch(next);
  },
);
