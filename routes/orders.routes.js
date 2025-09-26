import { Router } from "express";
import { verifyJWT } from '../middlewares/authUser.middleware';
import { createOrder, getOrders, getOrderById, updateOrderStatus } from "../controllers/order.controller";

const router = Router();

router.post('/', verifyJWT, createOrder);
router.get('/', verifyJWT, getOrders);
router.get('/:orderId', verifyJWT, getOrderById);
router.patch('/:orderId/status', verifyJWT, updateOrderStatus);

export default router;