"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    urlProduct: {
        type: String,
        required: true
    },
    videoID: {
        type: mongoose_1.Types.ObjectId,
        ref: 'Video'
    }
});
productSchema.set('toJSON', {
    transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;
