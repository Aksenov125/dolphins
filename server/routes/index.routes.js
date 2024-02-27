const express = require('express');
const router = express.Router();

const apiHeroesRouter = require('./api/api.heroes.routes');
const apiFavoritesRouter = require('./api/api.favorites.routes');
const apiAuthRouter = require('./api/api.auth.routes');
const apiUsersRouter = require('./api/api.users.routes');

router.use('/api/heroes', apiHeroesRouter);
router.use('/api/favorites', apiFavoritesRouter);
router.use('/api/auth', apiAuthRouter);
router.use('/api/users', apiUsersRouter);

module.exports = router;
