
import filterReducer from "./features/filterSlice";
import cartReducer from "./features/cartSlice"



export const reducer = {
 
  // [baseApi.reducerPath]: baseApi.reducer,
  cart:cartReducer,
   filter: filterReducer
};
