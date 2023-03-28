const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema;

// creating order schema
const orderSchema = new Schema(
    {
        products: [
            {
                product: {
                    type: ObjectId,
                    ref: "Product",
                },
                count: Number,
                color: String,
                size: String,
            },
        ],
        paymentIntents: {},
        orderStatus: {
            type: String,
            default: "Not Processed",
            enum: [
                "Not Processed",
                "Processing",
                "Dispatched",
                "Cancelled",
                "Completed",
                "Cash On Delivery",
            ],
        },
        paymentBy: {
            type: String,
        },
        orderedBy: {
            type: ObjectId,
            ref: "User",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
