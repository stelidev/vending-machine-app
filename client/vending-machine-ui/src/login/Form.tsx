import { Box, Button, FormControl, Grid, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { field, fieldBox } from "../Form.styles";

const LoginForm = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {

    }

    return(
            <Box>
                <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <FormControl fullWidth>
                        <TextField
                            label="Username"
                            placeholder="Username"
                            {...register("username", { required: true })}
                            error={errors.username !== undefined}
                            helperText={errors.username?.message !== undefined ? "This field is required" : ""}
                        />
                    </FormControl>
                </Box>
                <Box sx={fieldBox}>
                    <FormControl fullWidth>
                        <TextField
                            label="Password"
                            placeholder="Password"
                            type="password"
                            {...register("password", { required: true })}
                            error={errors.password !== undefined}
                            helperText={errors.password?.message !== undefined ? "This field is required" : ""}
                        />
                    </FormControl>
                </Box>
                <Box sx={fieldBox}>
                    <Button type="submit" sx={field} variant="contained">Login</Button>
                </Box>
                </form>
            </Box>
    )

}

export default LoginForm;