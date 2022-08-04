const mongoose = require('mongoose');

const objectSchema = {
    id: {
        type: Number,
        required: true,
        unique: true
    },
    id_provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider',
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        validate: {
            validator: function (url) {
                if (url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1)
                    return true;
                else {
                    return false;
                }
            },
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);
// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

module.exports = Product;

/*
// Insertar un producto
const p = new Product({
    id: 2,
    title: "Tortilla",
    price: 1.80,
    description: "Tortilla jugosa del teatro",
    image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.png"
});

p.save().then((data)=>console.log(data));
*/