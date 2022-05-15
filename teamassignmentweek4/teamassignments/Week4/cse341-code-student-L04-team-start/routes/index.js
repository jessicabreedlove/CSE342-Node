const routes = require('express').Router();
const temple = require('./temple');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

routes.use('/temples', temple);
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));
// routes.use(
//   '/',
//   (docData = (req, res) => {
//     let docData = {
//       documentationURL: '',
//     };
//     res.send(docData);
//   })
// );


module.exports = routes;
