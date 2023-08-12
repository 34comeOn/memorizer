const Router = require('express').Router;

const router = new Router();

router.post('/sign-in');
router.post('/sign-up');
router.post('/logout');
router.post('/new-collection');
router.post('/new-card');

router.delete('/delete-collection/:id/:user');
router.delete('/delete-card/:cardId/:collectionId/:userId');

router.get('/stock-collection-eng');
router.get('/choose-collection/:id/:user');
router.get('/activate/:link');
router.get('/refresh');

router.put('/repeat');
router.put('/edit-collection');
router.put('/edit-card');

module.exports = router;