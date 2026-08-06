const express = require('express');
const router = express.Router();
//create a router object

const v1ApiRoutes = require('./v1/index');
/*this variable now has access to the v1 folder
 think of v1 as version 1 and whenever a 
certain request is sent to the url(v1) eg: /home or /about we send the request to v1 folder
which then contains what to dowith /home or /about eg:api/v1/home*/ 
router.use('/v1',v1ApiRoutes);
//all requests sent at v1 to be sent to v1 file

module.exports = router;
