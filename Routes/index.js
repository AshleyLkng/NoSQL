const  articleRoutes = require('./article');
const  cityRoutes = require('./city');
const ordreRoutes = require('./ordre');
const adviceRoutes = require('./advice')

module.exports = (app) => {
   
  app.use('/api/v1/article', articleRoutes);
 app.use('/api/v1/city', cityRoutes);
    app.use('/api/v1/ordre',ordreRoutes);
    app.use('/api/v1/advice',adviceRoutes)
  

};