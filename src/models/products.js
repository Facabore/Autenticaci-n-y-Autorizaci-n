import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
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

export default mongoose.model("Products", productSchema);