/*
 * Title: Not found handler
 * Description: Not found handler
 * Author: Md. Saddam Hossain
 * Date: 11/15/2020
 *
 */

// sampleHandler object - module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log('Not Found');
    callback(404, {
        message: 'Your request URL was not found',
    });
};

module.exports = handler;
