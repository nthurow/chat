var daoMethods = require('./friends-dao');

var methods = {

    findAllCtrl: function() {

        return daoMethods.findAllDao();
    },

    findByNameCtrl: function(name) {

        return daoMethods.findByNameDao(name);
    }
};

module.exports = methods;
