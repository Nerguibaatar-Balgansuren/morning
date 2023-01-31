const fs = require("fs");
const uuid = require("uuid");

const catData = process.cwd() + "/data/category.json";

exports.getAll = (request, response) => {
  fs.readFile(catData, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = data ? JSON.parse(data) : [];

    return response.json({ status: true, result: savedData });
  });
};

exports.create = (request, response) => {
  const { catName, link } = request.body;
  fs.readFile(catData, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const newObj = { id: uuid.v4(), catName, link };

    parsedData.push(newObj);

    fs.writeFile(catData, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (req, res) => {
  const { id, catName, link, position } = request.body;
  fs.readFile(catData, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const updateData = parsedData.map((catObj) => {
      if (catObj.id == id) {
        return { ...catObj, catName, link, position };
      } else {
        return catObj;
      }
    });

    fs.writeFile(catData, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (req, res) => {
  const { id } = request.params;
  fs.readFile(catData, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(catData, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: deletedData });
    });
  });
};