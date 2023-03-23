const Category = require('../models/category.model');

exports.getAll = async (req, res) => {
    try {
        const result = await Category.find({});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

exports.getOne = async (req, res) => {
    const {_id } = req.params;
    try {
        const result = await Category.findById({});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const result = await Category.create(req.body);
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

exports.updateCategory = async (req, res) => {
    const {_id } = req.params;
    
    try {
        const result = await Category.findByIdAndUpdate({_id}, req.body, {
            new: true
        });
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    const {_id } = req.params;
    
    try {
        const result = await Category.findByIdAndDelete({_id});
        res.json({ status: true, result });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

