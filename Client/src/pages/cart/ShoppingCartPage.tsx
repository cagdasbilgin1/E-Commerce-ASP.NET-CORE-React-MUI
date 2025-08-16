import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AddCircleOutline, Delete, RemoveCircleOutline } from "@mui/icons-material";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import requests from "../../api/requests";
import { toast } from "react-toastify";
import CartSummary from "./CartSummary";
import { currenyTRY } from "../../utils/formatCurrency";

export default function ShoppingCartPage()
{
    const { cart, setCart } = useCartContext();
    const [status, setStatus] = useState({ loading : false, id: ""});

    function handleAddItem(productId: number, id : string) {
        setStatus({loading : true, id: id});
        requests.Cart.addItem(productId)
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, id: "" }))
    }

    function handleDeleteItem(productId: number, id = "", quantity = 1) {
        setStatus({ loading: true, id: id });

        requests.Cart.deleteItem(productId, quantity)
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, id: "" }))
    }

    if (cart?.cartItems.length === 0) return <Alert severity="warning">Cart is empty</Alert>    

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">Product</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total Price</TableCell>
                        <TableCell align="center"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cart?.cartItems.map((item) => (
                    <TableRow key={item.productId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center" component="th" scope="row">
                            <img src={`http://localhost:5291/images/${item.imageUrl}`} style={{ height: 60 }} />
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell align="center">{currenyTRY.format(item.price)}</TableCell>
                        <TableCell align="center">
                            <Button
                                onClick={() => handleDeleteItem(item.productId, "del" + item.productId)}
                                loading={status.loading && status.id === "del" + item.productId}>
                                <RemoveCircleOutline />
                            </Button>
                            {item.quantity}
                            <Button
                                onClick={() => handleAddItem(item.productId, "add" + item.productId)}
                                loading={status.loading && status.id === "add" + item.productId}>
                                <AddCircleOutline />
                            </Button>
                        </TableCell>
                        <TableCell align="center">{currenyTRY.format(item.price * item.quantity)}</TableCell>
                        <TableCell align="center">
                            <Button
                                color="error"
                                onClick={() => {
                                    handleDeleteItem(item.productId, "del_all" + item.productId, item.quantity);
                                    toast.error("Product deleted.");
                                }}
                                loading={status.loading && status.id === "dell_all" + item.productId}>
                                <Delete />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                <CartSummary />
            </TableBody>
        </Table>
        </TableContainer>
    )
}