import { Inventory, InventoryItem, Item }  from '../models/inventory.model'

export const getInventory = async (req, res) => {
    return await Inventory.find({ manager: req.user._id });
}

export const getInventoryItems = async (req, res) => {
    const { inventoryId } = req.params;
    const inventory = await Inventory.findById(inventoryId).populate('items.item');
    if (!inventory) {
        return res.status(404).json({ message: 'Inventory not found' });
    }
    return res.status(200).json(inventory.items);
};

export const increaseInventoryItemCount = async (req, res) => {
    const { inventoryId, itemId } = req.params;
    const { count } = req.body;

    if (!count || typeof count !== 'number' || count <= 0) {
        return res.status(400).json({ message: 'Invalid count provided' });
    }

    const inventory = await Inventory.findById(inventoryId);
    if (!inventory) {
        return res.status(404).json({ message: 'Inventory not found' });
    }

    const inventoryItem = inventory.items.find(
        (item) => item.item.toString() === itemId
    );

    if (!inventoryItem) {
        return res.status(404).json({ message: 'Item not found in inventory' });
    }

    inventoryItem.quantity += count;
    await inventory.save();

    return res.status(200).json({ message: 'Item count increased successfully', inventoryItem });
};