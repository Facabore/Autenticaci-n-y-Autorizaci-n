import {Schema, model} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: String,
    price: {
        type: Number,
        required: true,
    },
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
    });

export default model("Products", productSchema);