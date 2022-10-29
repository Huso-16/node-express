const express = require('express');
const app = express();
const people = require('./src/routes/people');
const auth = require('./src/routes/auth');

// static assets
app.use(express.static('./src/methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
