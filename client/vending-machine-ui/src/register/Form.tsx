import { Box, Button, Grid, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";
import { field, fieldBox } from "../Form.styles";

const RegisterForm = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = () => {

    }

    return(
            <Box>
                <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
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
                            label="Email address"
                            placeholder="Email address"
                            {...register("email", { required: true })}
                            error={errors.email !== undefined}
                            helperText={errors.email?.message !== undefined ? "This field is required" : ""}
                        />
                    </FormControl>
                </Box>
                <Box sx={{textAlign: "left", ...fieldBox}}>
                    <FormControl fullWidth>
                    <InputLabel id="account-type">Account type</InputLabel>
                    <Select
                        labelId="account-type"
                        id="account-type-select"
                        value={"buyer"}
                        label="Account type"
                        onChange={() => {}}
                    >
                        <MenuItem value={"supplier"}>Supplier</MenuItem>
                        <MenuItem value={"buyer"}>Buyer</MenuItem>
                    </Select>
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
                    <FormControl fullWidth>
                        <TextField
                            label="Confirm password"
                            placeholder="Confirm password"
                            type="password"
                            {...register("passwordConfirmation", { required: true })}
                            error={errors.password !== undefined}
                            helperText={errors.password?.message !== undefined ? "This field is required" : ""}
                        />
                    </FormControl>
                </Box>
                <Box sx={fieldBox}>
                    <Button type="submit" sx={field} variant="contained">Register</Button>
                </Box>
                </form>
            </Box>
    )

}

export default RegisterForm;