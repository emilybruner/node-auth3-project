const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/department', restricted, (req, res) => {
    console.log('decoded', req.decodedToken)
    const {userId, department} = req.decodedToken;
    Users.findBy(department)
    .then(users => {
        res.json(users)
    })
    .catch(err => res.send(err))
})

module.exports = router;