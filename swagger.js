const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Jessica Reece Contact API',
    description: 'Contacts in Mongodb accessed',
  },
  host: 'cse341reece.herokuapp.com',
  schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js', './routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
