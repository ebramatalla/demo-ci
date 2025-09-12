const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('hello world'));
app.get('/bye', (req, res) => res.send('bye bye'));
app.get('/', (req, res) => res.send('Hello World222222222222'));
app.get('/test', (req, res) => res.send('test Ci/Cd'));
const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server on :${port}`));
}
module.exports = app;//
