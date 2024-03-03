const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const { isAuthenticated } = require('../middleware/jwt.middleware');

router.get('/users', isAuthenticated, (req, res, next) => {
  User.find({})
    .then((foundUsers) => {
      let users = foundUsers.map((foundUser) => {
        const { _id, username, course, campus } = foundUser;
        const user = { username, course, campus, _id };
        return user;
      });

      res.status(200).json({ data: users });
    })
    .catch((error) => next(error));
});

router.put('/users/', isAuthenticated, (req, res, next) => {
  console.log(req.payload);
  const { _id } = req.payload;
  const { image } = req.body;
  User.findByIdAndUpdate(_id, { image }, { new: true })
    .then((foundUser) => {
      console.log(foundUser);
      const { _id, username, course, campus } = foundUser;
      const updatedUser = { _id, username, course, campus };
      res.status(200).json({ data: updatedUser });
    })
    .catch((error) => next(error));
});

router.post('/upload', isAuthenticated, (req, res, next) => {
  console.log('noch nicht implementiert!');
});

module.exports = router;
