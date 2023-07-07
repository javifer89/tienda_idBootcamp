const { model, Schema } = require('mongoose');

//aqui voy a generar la estructura de mis colecciones
const productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    department: String,
    available: Boolean,
    stock: Number
}, { timestamps: true, versionKey: false});

module.exports = model('product', productSchema);
