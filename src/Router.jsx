import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import PersonalInfo from "./pages/PersonalInfo.jsx"
import AdditionalInfo from "./pages/AdditionalInfo.jsx"
import Summary from "./pages/Summary.jsx"

const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/personal-info",
        element: <PersonalInfo/>
    },
    {
        path:"/additional-info",
        element: <AdditionalInfo/>
    },
    {
        path:"/summary",
        element: <Summary/>
    }
]);

export default router;