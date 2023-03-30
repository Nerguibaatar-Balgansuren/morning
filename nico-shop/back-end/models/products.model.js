const { request, response } = require("express");
const { default: mongoose } = require("mongoose");

const productsSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 30,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    thumbImage: {
      type: String,
      required: true,
      trim: true,
    },
    images: [String],
    salePercent: Number,
    stock: {
      type: Number,
      required: true,
      trim: true,
    },
    description: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

const products = mongoose.model("products", productsSchema);

module.exports = products;
