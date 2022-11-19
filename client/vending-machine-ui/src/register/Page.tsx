import { Card, Typography, CircularProgress, Box } from "@mui/material";
import { marginTop, card, formContainer } from "../Form.styles";
import RegisterForm from "./Form";
import { Link } from "react-router-dom";


const Register = () => {
    const loading = false;

    if(loading){
        return(
            <CircularProgress />
        );
    }

    return(
        <Card sx={card}>
            <Box sx={marginTop}>
                <Typography variant="h1" fontSize={24}>
                    Register as a buyer or supplier
                </Typography>
            </Box>
            <Box sx={formContainer}>
                <RegisterForm />
                <Typography fontSize={14} align="left" sx={marginTop}>
                    Already have an account? <Link to="/login">Click here to login</Link>
                </Typography>
            </Box>
        </Card>
    )


}


export default Register;