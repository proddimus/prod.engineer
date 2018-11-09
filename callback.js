var request = require("request");

var options = { method: 'POST',
  url: 'https://YOUR_AUTH0_DOMAIN/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: 
   { grant_type: 'authorization_code',
     client_id: 'YOUR_CLIENT_ID',
     client_secret: 'YOUR_CLIENT_SECRET',
     code: 'YOUR_AUTHORIZATION_CODE',
     redirect_uri: 'https://YOUR_APP/callback' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
