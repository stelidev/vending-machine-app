import { Card, Grid, TextField, Button, Typography, CircularProgress, Box } from "@mui/material";
import useAxios from "axios-hooks";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { card, formContainer, marginTop } from "../Form.styles";
import  VendingMachineImg from "../assets/vending.png";
import LoginForm from "./Form";

const Login = () => {

    const loading = false;

    if(loading){
        return(
            <CircularProgress />
        );
    }

    return(
       <Card sx={card}>
            <Box>
                <img src={VendingMachineImg} width="200"/>
            </Box>
            <Box sx={marginTop}>
                <Typography variant="h1" fontSize={24}>
                    Welcome to the vending machine app!
                </Typography>
            </Box>
            <Box sx={formContainer}>
                <LoginForm />
                <Typography fontSize={14} align="left" sx={marginTop}>
                    Need to register? Click here
                </Typography>
            </Box>
       </Card>
    )
}

export default Login;