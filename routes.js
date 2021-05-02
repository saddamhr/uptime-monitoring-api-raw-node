/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md. Saddam Hossain
 * Date: 11/15/2020
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
