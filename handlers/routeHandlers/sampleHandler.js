/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Md. Saddam Hossain
 * Date: 11/15/2020
 *
 */

// sampleHandler object - module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
