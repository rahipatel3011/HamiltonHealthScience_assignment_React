import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import FormContext from "./store/FormContext";

function App() {
  return (
    <FormContext>
      <RouterProvider router={router} />
    </FormContext>
  );
}

export default App;
