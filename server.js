const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const connect = require('./db/connect');

connect.initDatabase();

app.use(bodyParser.json()).use('/', require('./routes'));

//help from Adam
// const express = require('express');
// const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/api-docs', swaggerUi.setup(swaggerDocument));

// module.exports = router;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
