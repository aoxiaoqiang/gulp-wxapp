const path = require('path')
const express = require('express')
const {
  PORT
} = require('./config.server.json');

const app = express();
const apiRouter = require('./src/api/api');

// 添加static
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
})
