const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

// routes.use('/temples', temple);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
