import { useEffect, useState } from "react"
import requests from "../../api/requests"
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress, IconButton } from "@mui/material";
import { Cart } from "../../model/ICart";
import { Delete } from "@mui/icons-material";

export default function ShoppingCartPage()
{
    const [cart, setCart] = useState<Cart | null>(null)
	const [loading, setLoading] = useState(true);
    useEffect(() => {
        requests.Cart.get()
            .then(cart => setCart(cart))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, []);

    if (loading) return <CircularProgress />

    if(!cart) return <h1>Cart is empty</h1>

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
                {cart.cartItems.map((item) => (
                    <TableRow key={item.productId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell align="center" component="th" scope="row">
                            <img src={`http://localhost:5291/images/${item.imageUrl}`} style={{ height: 60 }} />
                        </TableCell>
                        <TableCell align="center" component="th" scope="row">
                            {item.name}
                        </TableCell>
                        <TableCell align="center">{item.price} ₺</TableCell>
                        <TableCell align="center">{item.quantity}</TableCell>
                        <TableCell align="center">{item.price * item.quantity} ₺</TableCell>
                        <TableCell align="center">
                            <IconButton color="error">
                                <Delete />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </TableContainer>
    )
}