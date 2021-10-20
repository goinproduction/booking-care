const webRouter = require('./web');

const route = (app) => {
    app.use('/api', webRouter);
};

module.exports = route;
