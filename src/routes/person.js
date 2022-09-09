const express = require('express');
const router = express.Router();
const guard = require('./src/guard/guard');

const {
  registerPerson,
  loginPerson,
  infoPerson,
} = require('../controllers/person');

router.post('/register', registerPerson);
router.post('/login', loginPerson);
router.post('/person', guard, infoPerson);

module.exports = router;
