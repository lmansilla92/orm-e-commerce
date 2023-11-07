// import express module
const express = require('express');
// import routes folder containing all api routes
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

// middleware to parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes folder
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
})
