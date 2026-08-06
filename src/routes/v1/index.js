const express = require('express');

const CityController = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city',CityController.create);
//accessing the controller if a request is made to v1/city this is where its routed
router.delete('/city/:id', CityController.destroy);


module.exports = router;