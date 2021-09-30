const express = require('express');
const router  = express.Router();

const notes_api = require('../apis/notes_api');

// const users_api = require('../apis/users_api');

router.get('/viewpost', notes_api.viewNote);
router.get('/newpostit', notes_api.newNote);

// router.get('/logout', users_api.signOutUser);

// router.post('/login', users_api.loginUser);

// router.post('/signup', users_api.signUpUser);

module.exports = router;