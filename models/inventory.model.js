import mongoose, { Schema } from "mongoose";

export const Inventory = mongoose.model('Inventory', new Schema({
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}))

export const Item = mongoose.model('Item', new Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
}))

export const InventoryItem = mongoose.model('InventoryItem', new Schema({
    inventory: {
        type: Schema.Types.ObjectId,
        ref: 'Inventory',
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