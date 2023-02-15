const fs = require("fs");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/products.json";

exports.getAll = (request, response) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = data ? JSON.parse(data) : [];

    return response.json({ status: true, result: savedData });
  });
};

exports.getOne = (request, response) => {
  const { id } = request.body;

  if (!id)
    return response.json({ status: false, message: "product id not found" });

  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = data ? JSON.parse(data) : [];

    return response.json({
      status: true,
      result: savedData.find((userItem) => userItem.id == id),
    });
  });
};

exports.create = (request, response) => {
  const {
    productName,
    categoryId,
    price,
    thumbImage,
    images,
    salePercent,
    quantity,
    description,
  } = request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const newObj = {
      id: uuid.v4(),
      productName,
      categoryId,
      price,
      thumbImage,
      images,
      salePercent,
      quantity,
      description,
    };

    parsedData.push(newObj);

    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (request, response) => {
  const { id } = request.params;
  const {
    productName,
    categoryId,
    price,
    thumbImage,
    images,
    salePercent,
    quantity,
    brandId,
    desc,
  } = request.body;

  if (!id)
    return response.json({ status: false, message: "product id not found" });

  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((userObj) => {
      if (userObj.id == id) {
        return {
          ...userObj,
          productName,
          categoryId,
          price,
          thumbImage,
          images,
          salePercent,
          quantity,
          brandId,
          desc,
          updateDate: Date.now(),
        };
      } else {
        return userObj;
      }
    });

    fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, message: "Амжилттай засагдлаа" });
    });
  });
};

exports.delete = (req, res) => {
  const { id } = request.params;

  if (!id)
    return response.json({ status: false, message: "product id not found" });
    
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = data ? JSON.parse(data) : [];

    const deletedData = parsedData.filter((e) => e.id != id);

    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: deletedData });
    });
  });
};
