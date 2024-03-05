import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { ElectricalPage } from "../pages/ElectricalPage/ElectricalPage";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "LoginPage",
                element: <LoginPage />
            },
            {
                path: "ElectricalPage",
                element: <ElectricalPage />
            }
        ],
    }
])