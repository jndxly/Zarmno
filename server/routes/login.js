const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKeys');
const passport = require('passport')

const router = express.Router();

// router.post('/', function(req, res){
//   const { email, password } = req.body;
//
//   models.User.findOne({
//     where: { email: email },
//   }).then(function(user){
//     if (user) {
//       if (bcrypt.compareSync(password, user.passwordDigest)) {
//         const token = jwt.sign({
//           id: user.id,
//           email: user.email,
//         }, config.jwtsecret);
//         res.json({ token });
//       } else {
//         res.status(401).json({ errors: { form: 'username or password incorrect' } });
//       }
//     } else {
//       res.status(401).json({ errors: { form: 'username or password incorrect' } });
//     }
//   });
// });

router.post('/', passport.authenticate('local'), function(req, res) {
  res.json(req.user);
});

module.exports = router;
