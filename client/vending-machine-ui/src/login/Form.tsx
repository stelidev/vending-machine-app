import { Box, Button, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { field, fieldBox } from "./Login.styles";

const LoginForm = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {

    }

    return(
            <Box>
                <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <TextField
                        sx={field}
                        placeholder="Username"
                        {...register("username", { required: true })}
                        error={errors.username !== undefined}
                        helperText={errors.username?.message !== undefined ? "This field is required" : ""}
                    />
                </Box>
                <Box sx={fieldBox}>
                    <TextField
                        sx={field}
                        placeholder="Password"
                        {...register("password", { required: true })}
                        error={errors.password !== undefined}
                        helperText={errors.password?.message !== undefined ? "This field is required" : ""}
                    />
                </Box>
                <Box sx={fieldBox}>
                    <Button type="submit" sx={field} variant="contained">Login</Button>
                </Box>
                </form>
            </Box>
    )

}

export default LoginForm;