const { response } = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { request } = require("http");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");

// const dataFile = process.cwd() + "/data/users.json";

const userModel = require('../model/user.model.formongo');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(500)
      .send({ status: false, message: "Medeelelee buren oruulna uu" });
    return;
  }

  const hashedPass = await bcrypt.hash(password, 10);
  if (hashedPass) {
    const newUser = new userModel({
      email,
      password: hashedPass,
    });

    const result = await newUser.save();

    if (result) {
      res.status(200).send({
        status: true,
        message: "Amjilttai hadgalalgdlaa",
      });
      return;
    } else {
      res.status(500).send({
        status: false,
        message: "Hadgalahad aldaa garlaa",
      });
      return;
    }
  } else {
    res.status(500).send({
      status: false,
      message: "Password amjilttai encrypt hiigeegui bna",
    });
    return;
  }
};

exports.getAll = async (req, res) => {
  const a = await userModel.find();
  console.log(a);
  res.json({ message: "Test", result: a });
};

exports.create = async (request, response) => {
  const obj = { firstname: request.body.firstname, lastname: request.body.firstname, email: request.body.email, password: request.body.password };
  const a = await userModel.create(obj);
  console.log(a);
  res.json({ message: "Test", result: a });
};

// exports.getAll = async (request, response) => {
//   const {limit} = request.query;
//   try {
//     const result = await userService.getUsers(limit);

//     if (result && result.length > 0) {
//       response.json({status: true, result});
//     }
//     else if (result && result.length == 0) {
//       response.json({status: true, message: "no result to show", result});
//     }
//   } catch (err) {
//     console.log(err);
//     response.json({ status: false, message:err});
//   }
// };

exports.getOne = async (request, response) => {
  const {id} = request.params;
  if (!id)
  return response.json({ status: false, message: "user not found"});

  try {
    const result = await userService.getUser(id);

    response.json({status: true, result});
  } catch (err) {
    response.json({status: false, message: err});
  }
};

// exports.create = async (request, response) => {
//   const { firstname, lastname, username, password, email } = request.body;
 
//   const newObj = {
//     firstname,
//     lastname,
//     email,
//   };

//   try {
//     const result = await userService.creatUser(newObj);
//     console.log(result);
//     if(result && result.affectedRows > 0) {
//       response.json({ status: true, message: "Success"});
//     } else {
//       response.json({ status: false, message: "Error"});
//     }
//   } catch (err) {
//     response.json({status: false, message: err});
//   }
// };

exports.update = async (request, response) => {
  const {id} = request.params;
  if (!id)
    return response.json({status: false, message: "user id not found"});

    try {
      const result = await userService.updateUser(id, request.body);
      console.log(result);
      if(result && result.affectedRows > 0) {
        response.json({ status: true, message: "Success"});
      } else {
        response.json({ status: false, message: "Error"});
      }
    } catch (err) {
      response.json({status: false, message: err});
    }








  // let [result] = "";
  // console.log(Object);
  // console.log();
  // const { id, menuName, link, position } = request.body;
  // fs.readFile(dataFile, "utf-8", (readErr, data) => {
  //   if (readErr) {
  //     return response.json({ status: false, message: readErr });
  //   }

  //   const parsedData = data ? JSON.parse(data) : [];

  //   const updateData = parsedData.map((menuObj) => {
  //     if (menuObj.id == id) {
  //       return { ...menuObj, menuName, link, position };
  //     } else {
  //       return menuObj;
  //     }
  //   });

  //   fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
  //     if (writeErr) {
  //       return response.json({ status: false, message: writeErr });
  //     }

  //     return response.json({ status: true, result: updateData });
  //   });
  // });
};

exports.delete = async (request, response) => {
  const { id } = request.params;
  
  if(!id)
    return response.json({ status: false, message: "user id not found" });

  try {
    const result = await userService.deleteUser(id);
    console.log(result, "controller");
    if(result && result.affectedRows > 0) {
      response.json({ status: true, message: "Success"});
    } else {
      response.json({ status: false, message: "Error"});
    }
  } catch (err) {
    response.json({status: false, message: err});
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(500)
      .send({ status: false, message: "Medeelelee buren oruulna uu" });
    return;
  }

  const user = await userModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {

    const token = jwt.sign({ user: user }, process.env.TOKEN_KEY, {
      expiresIn: "2h",
      // algorithm: "HS256",
    });


    res.status(200).send({ status: true, data: user, message: "Success", token });
    return;
  } else {
    res.status(400).send({
      status: false,
      message: "user oldsongui ee, nuuts ug taarahgui bna",
    });
    return;
  }
};

// exports.login = async (request, response) => {
//   const {email, password} = response.body;

//   if (!email || password)
//     return response.json({
//       status: false,
//       message: ""
//     });

//     try {
//       if (email == parsedData[i].email) {
//         const decrypt = await bcrypt.compare(
//           password + myKey,
//           parsedData[i].password
//         );
//         if (decrypt) {
//           user = {
//             id: parsedData[i].id,
//             email: parsedData[i].email,
//             lastname: parsedData[i].lastname,
//             firstname: parsedData[i].firstname,
//           };
//         }
//       }

//       const result = await userService.login(email, password);

//       response.json({ status: true, result});
//     } catch (err) {
//       response.json({ status: false, message: err});
//     }
// };