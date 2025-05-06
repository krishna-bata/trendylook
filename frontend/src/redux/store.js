import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import productReducer from "../redux/slices/productsSlice";
import cartReducer from "../redux/slices/cartSlice";
import checkoutReducer from "../redux/slices/checkoutSlice";
import orderReducer from "../redux/slices/orderSlice";
import adminReducer from "../redux/slices/adminSlice";
import adminProductReducer from "../redux/slices/adminProductSlice";
import adminOrderReducer from "../redux/slices/adminOrderSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    orders: orderReducer,
    admin: adminReducer,
    adminProducts: adminProductReducer,
    adminOrders: adminOrderReducer,
  },
});

export default store;
