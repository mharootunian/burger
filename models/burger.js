const orm = require("../config/orm");

module.exports = {

    selectAll: function(callback) {
        orm.selectAll( (data) => {
            callback(data);
        });
    },

    insertOne: function(data, callback) {
        orm.insertOne(data, (data2) => {
            callback(data2);
        });
    },

    updateOne: function(id, status, callback) {
        orm.updateOne(id, status, (data) => {
            callback(data);
        });
    }
};