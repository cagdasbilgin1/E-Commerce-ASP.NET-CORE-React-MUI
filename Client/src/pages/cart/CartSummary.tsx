import { TableCell, TableRow } from "@mui/material";
import { useCartContext } from "../../context/CartContext";
import { currenyTRY } from "../../utils/formatCurrency";

export default function CartSummary() {
    const { cart } = useCartContext();
    const subTotal = cart?.cartItems.reduce((total, item) => total + (item.quantity * item.price), 0) ?? 0;
    const tax = subTotal * 0.2;
    const total = subTotal + tax;
    return (
        <>
            <TableRow>
                <TableCell align="right" colSpan={5}>Subtotal</TableCell>
                <TableCell align="right">{currenyTRY.format(subTotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="right" colSpan={5}>Tax (%20)</TableCell>
                <TableCell align="right">{currenyTRY.format(tax)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="right" colSpan={5}>Total</TableCell>
                <TableCell align="right">{currenyTRY.format(total)}</TableCell>
            </TableRow>
        </>
    );
}