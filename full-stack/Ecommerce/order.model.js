import mongoose from "mongoose";
import { Product } from "./product.model";

// **************************************************
const orderItemSchema = new mongoose.Schema({
  ProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});
// ****************************************************
const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
    },

    orderPrice: {
      type: Number,
      required: true,
    },

    orderItems: {
      type: [orderItemSchema],
    },

    address: {
      type: String,
      required: true
    },

    status: {
        type: String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],  // enum means choices
        default: "PENDING"
    }


  },
  { timeStamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
