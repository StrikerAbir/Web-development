import { RouterProvider } from "react-router-dom";
import {Provider} from "react-redux"
import routes from "./routes/routes";
import store from "./Redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
      
    </div>
  );
}

export default App;
