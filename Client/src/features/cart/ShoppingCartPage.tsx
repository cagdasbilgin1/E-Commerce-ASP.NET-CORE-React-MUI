import { Alert, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { AddCircleOutline, Delete, RemoveCircleOutline } from "@mui/icons-material";
import CartSummary from "./CartSummary";
import { currenyTRY } from "../../utils/formatCurrency";
import { addItemToCart, deleteItemFromCart } from "./cartSlice";
import { useAppSelector, useAppDispatch } from "../../store/store";

export default function ShoppingCartPage()
{
    const { cart, status } = useAppSelector(staet => staet.cart);
    const dispatch = useAppDispatch();

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
                                onClick={() => dispatch(deleteItemFromCart({ productId: item.productId, quantity: 1, key: "single" }))}
                                loading={status === "pendingDeleteItem" + item.productId + "single"}>
                                <RemoveCircleOutline />
                            </Button>
                            {item.quantity}
                            <Button
                                onClick={() => dispatch(addItemToCart({ productId: item.productId}))}
                                loading={status === "pendingAddItem" + item.productId}>
                                <AddCircleOutline />
                            </Button>
                        </TableCell>
                        <TableCell align="center">{currenyTRY.format(item.price * item.quantity)}</TableCell>
                        <TableCell align="center">
                            <Button
                                color="error"
                                onClick={() => dispatch(deleteItemFromCart({ productId: item.productId, quantity: item.quantity, key : "all" }))}
                                loading={status === "pendingDeleteItem" + item.productId + "all"}>
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