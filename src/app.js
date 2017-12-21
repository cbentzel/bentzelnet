/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
const express = require('express');
const app = express();

// Serve static files from express.static
app.use('/static', express.static('static'));

// Use pug as the template engine.
app.set('view engine', 'pug');
app.set('views', './views');

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Hello, world!').end();
});

// Download tests
const EXTORIGIN = process.env.EXTORIGIN || 'https://frame.webtest.bentzel.net';
var dlTests = require('./resources/dltest.json');
for (var i = 0; i < dlTests.length; ++i) {
  var dlTest = dlTests[i];
  dlTest.url = dlTest.url.replace("EXTORIGIN", EXTORIGIN);
}

app.get('/dltest', function (req, res) {
  res.render('dltest', {dlTests: dlTests});
});

// Start the server
const PORT = process.env.PORT || 8120;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END app]
