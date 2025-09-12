const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('hello world'));

const port = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(port, () => console.log(`Server on :${port}`));
}
module.exports = app;//
