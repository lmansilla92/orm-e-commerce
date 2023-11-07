// import router requiring express and calling a Router() method
const router = require('express').Router();
// import api routes
const apiRoutes = require('./api');

// define route path name and routes
router.use('/api', apiRoutes);

// displays Wrong Route! when an invalid route path is used
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;