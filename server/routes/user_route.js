const Router = require('koa-router');
const router = new Router();

const UserController = require('./../controllers/UserController');
router.get('/api/user', UserController.getAll);

router.post('/api/user', UserController.create);

router.get('/api/user/:id', UserController.getbyId);

router.delete('/api/user/:id',UserController.delete);

module.exports = router.routes();