const uuid = require("uuid");
const bcrypt = require("bcrypt");
const saltRounds = 3;
const myKey = "1234!@#$";

const orderModel = require("./models/order.model");

exports.getOne = async (req, res) => {
    const { id } = req.params;

    if (!id) return res.json({ error: "Invalid id" });

    try {
        const order = await orderModel
            .findById({ _id: id })
            .populate("userId")
            .populate({
                path: "orderDetails.productId",
                select: "",

            });

}
};