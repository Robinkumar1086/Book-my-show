import {configureStore} from "@reduxjs/toolkit"
import userreducer from "./slices/userSlice";
import { baseAppApi } from "../services/baseAppApi";

const store = configureStore({
    reducer : {
      user : userreducer ,
      [baseAppApi.reducerPath]: baseAppApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseAppApi.middleware),
})
export default store; 