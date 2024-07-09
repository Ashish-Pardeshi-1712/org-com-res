const Component = require('../models/component');

exports.getAllComponents = async (req, res, next) => {
    try {
        const [rows, fields] = await Component.getAllComponents();
        res.json(rows);
    } catch (err) {
        next(err);
    }
};
