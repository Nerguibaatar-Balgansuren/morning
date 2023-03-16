const { request, response } = require("express");
const { default: mongoose } = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    lastname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

// exports.getUsers = async (limit) => {
//   try {
//     if (limit) {
//       const [rows] = await pool.query(`select * from users limit ${limit}`);
//       return rows;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.getUser = async (id) => {
//   try {
//     const [row] = await pool.query(`select * from users where id = ${id}`);
//     return row[0];
//   } catch (err) {
//     console.log(err);
//   }
// };

// exports.createUser = async (lastname, firstname, email) => {
//   const [result] = await pool.query(`insert into users values (?, ?, ?, ?)`, [
//     null,
//     lastname,
//     firstname,
//     email,
//   ]);
//   console.log(result);
//   return result;
// };

// exports.updateUser = async (id, updatedData) => {
//   let [result] = "";

//   for (let i = 0; i < Object.keys(updatedData).length; i++) {
//     result = await pool.query(
//       `update users set ${Object.keys(updatedData)[i]} ='${
//         Object.values(updatedData)[i]
//       }' where id = ${id}`
//     );
//   }
//   return result;
// };

// exports.deleteUser = async (id) => {
//     const [result] = await pool.query(`delete from users where id = $(id)`);
//     return result;
// };

// exports.login = async (email, password) => {
//     try {
//         const [row] = await pool.query(
//             `SELECT * FROM users WHERE email = ${email} AND password ${password}`
//         );
//         return row[0];
//     } catch (err) {
//         console.log(err);
//     }
// };