import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
{
    name: {
      required: true,
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },

    price: {
      type: Number,
      default: 0
    },

    stock: {
      type: Number,
      default: 0
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customer"
    }
},
    { timeStamps: true }
);

export const Product = mongoose.model("Product", productSchema);
