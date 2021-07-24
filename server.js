let express = require('express');
let request = require('request');
let querystring = require('querystring');
let env = require('./server.env');

let generateRandomString = length => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let app = express();

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie('spotify_auth_state', state);

  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: env.CLIENT_ID,
        scope: 'user-read-private user-read-email user-top-read',
        redirect_uri: env.REDIRECT_URI,
        state: state,
      })
  );
});

app.get('/callback', (req, res) => {
  const code = req.query.code || null;
  const state = req.query.state || null;

  if (state === null || !req.headers.cookie.includes(state)) {
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch',
        })
    );
  } else {
    res.clearCookie('spotify_auth_state');
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: env.REDIRECT_URI,
        grant_type: 'authorization_code',
      },
      headers: {
        Authorization:
          'Basic ' +
          new Buffer.from(`${env.CLIENT_ID}:${env.CLIENT_SECRET}`).toString(
            'base64'
          ),
      },
      json: true,
    };
    request.post(authOptions, (error, response, body) => {
      const access_token = body.access_token;
      res.redirect(`http://localhost:4200?access_token=${access_token}`);
    });
  }
});

const port = 8888;
console.log(`Server up. Listening on port ${port}.`);
app.listen(port);
