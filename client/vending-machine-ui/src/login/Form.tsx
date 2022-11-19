import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { field, fieldBox } from "./Login.styles";

const LoginForm = () => {
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });


    const onSubmit = () => {

    }

    return(
            <Box>
                <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField
                        sx={field}
                        placeholder="Username"
                    />
                </Box>
                <Box sx={fieldBox}>
                    <TextField
                        sx={field}
                        placeholder="Password"
                    />
                </Box>

                <Box sx={fieldBox}>
                    <Button sx={field} variant="contained">Login</Button>
                </Box>
                
                </form>
            </Box>
    )

}

export default LoginForm;