import {useEffect} from "react";
import ProductList from "./ProductList";
import {CircularProgress} from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { selectAllProducts, fetchProducts } from "./catalogSlice";

export default function CatalogPage() {
    const products = useAppSelector(selectAllProducts);
    const { status, isLoaded } = useAppSelector(state => state.catalog);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(!isLoaded)
            dispatch(fetchProducts());
    }, [isLoaded]);

    if (status === "pendingFetchProducts") return <CircularProgress />

    return (
        <ProductList products={products} />
    );
}