import mongoose, { Schema } from "mongoose";

export const Order = mongoose.model('Order', new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    inventory: {
        type: Schema.Types.ObjectId,
        ref: 'Inventory',
        required: true
    }
}))

export const OrderItem = mongoose.model('OrderItem', new Schema({
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}))