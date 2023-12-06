import { configureStore } from "@reduxjs/toolkit";
import AdminFormButton from '@/redux/slice/adminForm';
const store = configureStore({
    reducer:{
        AdminFormButton
    }
});
export default store;