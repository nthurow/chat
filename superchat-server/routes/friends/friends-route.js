var ctrlMethods = require('./friends-ctrl');

var methods = [
    {
        method: 'GET',
        path: '/friends',
        handler: function (request, reply) {

            reply(ctrlMethods.findAllCtrl());
        }
    },
    {
        method: 'GET',
        path: '/friends/{name}',
        handler: function (request, reply) {

            reply(ctrlMethods.findByNameCtrl(request.params.name));
        }
    }
];

module.exports = methods;
