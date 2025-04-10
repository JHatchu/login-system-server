const pool = require('../db');

class userdao {
    async adduser(fname, lname, email, password) {
        console.log("userdao...", fname, lname, email, password);
        try {
            const user = await pool.query(
                "INSERT INTO user_master (fname, lname, email, password) VALUES (?, ?, ?, ?)", 
                [fname, lname, email, password]
            );
            
            // Fetch the inserted user
            const insertedUser = await pool.query(
                "SELECT * FROM user_master WHERE uid = LAST_INSERT_ID()"
            );

            console.log("user dao=====>", insertedUser[0]);
            return insertedUser[0];
        } catch (error) {
            console.log("user insert dao error====>", error);
        }
    }

    async getbyemail(email) {
        try {
            const [rows] = await pool.query(
                "SELECT * FROM user_master WHERE email = ? LIMIT 1",
                [email]
            );
            console.log("Raw query response:", rows);
            console.log("user dao email get====>", rows[0]);
            return rows[0];
        } catch (error) {
            console.log("user dao get email====>", error);
        }
    }
}

module.exports = new userdao();
