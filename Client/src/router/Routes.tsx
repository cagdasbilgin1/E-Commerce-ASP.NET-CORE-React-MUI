import {createBrowserRouter} from "react-router";
import App from "../components/App";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import CatalogPage from "../pages/catalog/CatalogPage";
import ProductDetails from "../pages/catalog/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import ServerError from "../errors/ServerError";
import NotFound from "../errors/NotFound";
import { Navigate } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path: "", element: <HomePage />},
            {path: "about", element: <AboutPage />},
            {path: "contact", element: <ContactPage />},
            {path: "catalog", element: <CatalogPage />},
            {path: "catalog/:id", element: <ProductDetails />},
            {path: "error", element: <ErrorPage />},
            {path: "server-error", element: <ServerError />},
            {path: "not-found", element: <NotFound />},
            {path: "*", element: <Navigate to={"/not-found"} />},
        ]
    }
])