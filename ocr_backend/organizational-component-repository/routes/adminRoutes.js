const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/components', adminController.getAllComponents);
router.get('/components/:id', adminController.getComponentById);
router.post('/components', adminController.addComponent);
router.put('/components/:id', adminController.updateComponent);
router.delete('/components/:id', adminController.disableComponent);

module.exports = router;
