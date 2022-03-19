const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const apiRouter = require('./router');
// constants
const PORT = process.env.PORT || 5001;
const app = express();
// Middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Setup API Router
app.use('/', apiRouter);
// Setup the server
app.listen(PORT, () => {
  console.log(`Server Running at Port ${PORT}`);
});
