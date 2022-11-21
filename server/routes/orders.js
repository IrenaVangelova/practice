var express = require('express');
var router = express.Router();
const controller = require('../controllers/orders');

router.get('/', controller.all)
router.get('/:id', controller.byId)
router.post('/create', controller.create)
router.post('/myOrders', controller.myOrders)

module.exports = router;
