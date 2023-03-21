const { response } = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { request } = require("http");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/users.json";
const userService = require('../model/user-service-for-mongodb')

exports.getAll = async (request, response) => {
  const {limit} = request.query;
  try {
    const result = await userService.getUsers(limit);

    if (result && result.length > 0) {
      response.json({status: true, result});
    }
    else if (result && result.length == 0) {
      response.json({status: true, message: "no result to show", result});
    }
  } catch (err) {
    console.log(err);
    response.json({ status: false, message:err});
  }
};

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

exports.create = async (request, response) => {
  const { firstname, lastname, username, password, email } = request.body;
 
  const newObj = {
    firstname,
    lastname,
    email,
  };

  try {
    const result = await userService.creatUser(newObj);
    console.log(result);
    if(result && result.affectedRows > 0) {
      response.json({ status: true, message: "Success"});
    } else {
      response.json({ status: false, message: "Error"});
    }
  } catch (err) {
    response.json({status: false, message: err});
  }
};

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

exports.login = async (request, response) => {
  const {email, password} = response.body;

  if (!email || password)
    return response.json({
      status: false,
      message: ""
    });

    try {
      if (email == parsedData[i].email) {
        const decrypt = await bcrypt.compare(
          password + myKey,
          parsedData[i].password
        );
        if (decrypt) {
          user = {
            id: parsedData[i].id,
            email: parsedData[i].email,
            lastname: parsedData[i].lastname,
            firstname: parsedData[i].firstname,
          };
        }
      }

      const result = await userService.login(email, password);

      response.json({ status: true, result});
    } catch (err) {
      response.json({ status: false, message: err});
    }
};