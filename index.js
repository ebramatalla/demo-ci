const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('hello world'));

const port = process.env.PORT || 3000;

// شغّل السيرفر فقط لو الملف اتنفّذ مباشرة (مش عبر require من Jest)
if (require.main === module) {
  app.listen(port, () => console.log(`Server on :${port}`));
}

const server = app.listen(port, () => console.log(`Server on :${port}`));
module.exports = { app, server };
