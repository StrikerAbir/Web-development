
import { composeWithDevTools } from "@redux-devtools/extension/lib/types/logOnly"
import {createStore} from "redux"
import productReducer from "./Reducer/productReducer"
 
const store = createStore(productReducer,composeWithDevTools())

export default store