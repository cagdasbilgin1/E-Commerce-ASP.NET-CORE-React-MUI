import { Box, Button, Grid2, Paper, Step, StepLabel, Stepper, Stack, Typography  } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import requests from "../../api/requests";
import { useAppDispatch } from "../../store/store";
import { clearCart } from "../cart/cartSlice";

const steps = ["Delivery Information", "Payment", "Order Summary"];

function getStepContent(step: number)
{
    switch(step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error("An unknown step");
    }
}

export default function CheckoutPage()
{
    const [activeStep, setActiveStep] = useState(0);
    const methods = useForm();
    const [orderId, setOrderId] = useState(0);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    async function handleNext(data: FieldValues) {
        if(activeStep === 2) 
        {
            setLoading(true);
            try
            {
                setOrderId(await requests.Order.createOrder(data));
                setActiveStep(activeStep + 1);
                dispatch(clearCart());
                setLoading(false);
            }
            catch(error: any) {
                console.log(error);
                setLoading(false);
            }
        }
        else
        {
            setActiveStep(activeStep + 1);
        }
    }

    function handlePrevious() {
        setActiveStep(activeStep - 1);
    }

    return (
        <FormProvider {...methods}>
            <Paper>
                <Grid2 container spacing={4}>
                    {activeStep !== steps.length && (
                        <Grid2 size={4} sx={{
                            borderRight: "1px solid",
                            borderColor: "divider",
                            p: 3
                        }}><Info />
                        </Grid2>)}
                <Grid2 size={activeStep !== steps.length ? 8 : 12} sx={{p:3}}>
                    <Box >
                            <Stepper activeStep={activeStep} sx={{height: 40, mb: 4}}>
                                { steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                    </Box>
                    <Box>
                            {activeStep === steps.length ? (
                                <Stack spacing={2}>
                                    <Typography variant="h1">📦</Typography>
                                    <Typography variant="h5">Order Completed</Typography>
                                    <Typography variant="body1" sx={{color: "text.secondary"}}>
                                        Your order number <strong>#{orderId}</strong>. We will send you an email when your order is confirmed.
                                    </Typography>
                                    <Button 
                                    sx={{alignSelf: "start", 
                                        width: {xs: "100%", sm: "auto"}}}                                    
                                    variant="contained">List Orders</Button>
                                </Stack>
                            ) : (
                                <form onSubmit={methods.handleSubmit(handleNext)}>
                                    {getStepContent(activeStep)}
                                    <Box>

                                        <Box sx={
                                            [
                                                {
                                                    display: "flex",
                                                },
                                                activeStep !== 0 
                                                    ? { justifyContent: "space-between" }
                                                    : { justifyContent: "flex-end" }
                                            ]
                                        }>
                                            {
                                                activeStep !== 0 && 
                                                    <Button startIcon={<ChevronLeftRounded />} variant="contained" 
                                                    onClick={handlePrevious}>Back</Button>
                                            }

                                            <Button
                                                type="submit" 
                                                loading = {loading}
                                                    startIcon={<ChevronRightRounded />} variant="contained">
                                                    {activeStep == 2 ? "Complete the order" : "Next"}
                                                </Button>
                                        </Box>
                                    </Box>
                                </form>
                            )}
                        
                    </Box>
                    </Grid2>
            </Grid2>
            </Paper>
        </FormProvider>
    );
}