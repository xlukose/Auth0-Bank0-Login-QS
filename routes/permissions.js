var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();

/* GET user's permissions. */
router.get('/permissions', secured(), function(req, res, next){
  var request = require("request");

  var options = { method: 'POST',
    url: 'https://lukose.auth0.com/oauth/token',
    headers: { 'content-type': 'application/json' },
    body: '{"client_id":"l39E7z2P9XFun2gfCR0MRIr5T4Ce34RM","client_secret":"odHZK5zqGYmRyF6XlYJmqNKkNTCt3k_Fd7ykMOm-GTAhWFG9fC_2YMfNewIuZmNT","audience":"urn:auth0-authz-api","grant_type":"client_credentials"}' };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log(body);
    res.render('permission', {
      permissionProfile: JSON.stringify(body, null, 2),
      title: 'Permission Profile page'
    });
  });
});

module.exports = router;
