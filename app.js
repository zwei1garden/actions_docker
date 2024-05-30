const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.use('/images', express.static('public/images'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port : ${port}`);
});

