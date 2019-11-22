const db = require("./connection");

module.exports = {
    selectAll: function(callback) {
        const sql = `SELECT * FROM burgers`
        db.query(sql, (err, data) => {
            if (err)
                throw err;
            
            callback(res);
        });
    },

    insertOne: (data, callback) => {
        const sql = `INSERT INTO burgers (burger_name, devoured) VALUES (${data.burger_name}, ${data.devoured});`;
        db.query(sql, (err, data) => {
            if (err)
                throw err;

            res.json(data);
        });
    },   

    updateOne: (id, status, callback) => {
        const sql = `UPDATE burgers SET devoured=${status} WHERE id=${id}`;
        db.query(sql, (err, data) => {
            if (err)
                throw err;

            res.json(data);
        });
    }
};