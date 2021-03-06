const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connect = require('./db/connect');

connect.initDatabase();

app.use(bodyParser.json()).use('/', require('./routes'));

//help from Adam
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Content-Disposition'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );

  next();
});

// module.exports = router;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
