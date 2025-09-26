import { Order } from '../models/order.model';
import { Inventory } from '../models/inventory.model';

export const createOrder = async (req, res) => {
    const { items, shippingAddress } = req.body;
    const userId = req.user._id;

    if (!items || items.length === 0) {
        return res.status(400).json({ message: 'Order must contain at least one item' });
    }

    if (!shippingAddress) {
        return res.status(400).json({ message: 'Shipping address is required' });
    }

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
        const { itemId, quantity } = item;
        if (!itemId || !quantity || quantity <= 0) {
            return res.status(400).json({ message: 'Invalid item or quantity in order' });
        }

        // Find the item in inventory
        const inventory = await Inventory.findOne({ 'items.item': itemId });
        if (!inventory) {
            return res.status(404).json({ message: `Item with ID ${itemId} not found in any inventory` });
        }

        const inventoryItem = inventory.items.find(invItem => invItem.item.toString() === itemId);

        if (!inventoryItem || inventoryItem.quantity < quantity) {
            return res.status(400).json({ message: `Not enough stock for item ${itemId}` });
        }

        // Deduct from inventory
        inventoryItem.quantity -= quantity;
        await inventory.save();

        // Add to order items
        orderItems.push({
            item: itemId,
            quantity: quantity,
            price: inventoryItem.price // Assuming inventoryItem has a price
        });
        totalAmount += inventoryItem.price * quantity;
    }

    const newOrder = new Order({
        user: userId,
        items: orderItems,
        totalAmount,
        shippingAddress,
        status: 'Pending'
    });

    await newOrder.save();
    return res.status(201).json(newOrder);
}
    