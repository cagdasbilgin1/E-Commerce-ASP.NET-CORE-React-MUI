import { Grid2 } from "@mui/material";
import Product from "./Product";
import { IProduct } from "../../model/IProduct";

interface Props{
    products: IProduct[];
}

export default function ProductList({products}: Props){
    return(
        <Grid2 container spacing={2}>
            {products.map((item: IProduct) => (
                <Grid2 key={item.id} size={{xs:12, md:4, lg:3}}>
                <Product key={item.id} product={item} />
                </Grid2>
            ))}
        </Grid2>
    );
}