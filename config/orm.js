const db = require("./connection");

module.exports = {
    selectAll: function() {
        const sql = `SELECT * FROM burgers`
        db.query(sql, (err, data) => {
            if (err)
                throw err;
            
            console.log(data)
            return data;
        });
    },

    insertOne: (data) => {
        const sql = `INSERT INTO burgers (burger_name, devoured) VALUES (${data.burger_name}, ${data.devoured});`;
        db.query(sql, (err, data) => {
            if (err)
                throw err;

            return data;
        });
    },   

    updateOne: (id, status) => {
        const sql = `UPDATE burgers SET devoured=${status} WHERE id=${id}`;
        db.query(sql, (err, data) => {
            if (err)
                throw err;

            return data;
        });
    }
};