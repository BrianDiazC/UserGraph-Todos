'use client'

import { Box, Button, MenuItem, SxProps, TextField } from "@mui/material"
import { SubmitHandler, useForm } from "react-hook-form"
import {zodResolver} from '@hookform/resolvers/zod'
import { mappedCountries, userSchema } from "@/validations/userSchema"

const BoxStyle: SxProps = {
    display: 'flex',
    gap: 2,
    mb: 2,
    alignItems: 'center',
    justifyContent: 'center',
    px: 3,
    mt: 2,
    flexDirection: {
        xs: 'column',
        md: 'row',
    }

}


interface Inputs {
    name: string;
    lastname: string;
    email: string;
    phone:string;
    birthdate:string;
    country: string;
    state?: string;
    description:string;

}


export const ClientFormZod = () => {

    const { register, handleSubmit,
        formState: { errors }, watch, setValue, reset } = useForm<Inputs>({
            resolver:zodResolver(userSchema)
        });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        alert('Sending data...')
        reset()
    }

    return (
        <>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form" sx={{ p: 1 }}

            >
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={errors ? "Name" : 'Required'}
                        placeholder="Brian"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={typeof errors.name?.message === 'string' ? errors.name?.message : ''}
                    >
                    </TextField>

                    <TextField
                        fullWidth
                        variant="outlined"
                        label="LastName"
                        placeholder="Diaz"
                        error={!!errors.lastname}
                        {...register('lastname')}
                        helperText={typeof errors.lastname?.message === 'string' ? errors.lastname?.message : ''}


                    >
                    </TextField>
                </Box>
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        type="email"
                        variant="outlined"
                        label="Email"
                        placeholder="User23@gmail.com"
                        error={!!errors.email}
                        {...register('email')}
                        helperText={typeof errors.email?.message === 'string' ? errors.email?.message : ''}

                    >
                    </TextField>
                    <TextField
                        fullWidth
                        type="text"
                        variant="outlined"
                        label="Phone"
                        inputMode="numeric"
                        error={!!errors.phone}
                        {...register('phone')}
                        helperText={typeof errors.phone?.message === 'string' ? errors.phone?.message : ''}

                    >
                    </TextField>
                </Box>
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        type="date"
                        variant="outlined"
                        error={!!errors.birthdate}
                        {...register('birthdate')}
                        helperText={typeof errors.birthdate?.message === 'string' ? errors.birthdate?.message : 'Please select a Date'}

                    >
                    </TextField>
                    <TextField
                        fullWidth
                        id="filled-select-currency"
                        select
                        {...register('country')}
                        label="Select"
                        defaultValue={'RD'}
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {Object.entries(mappedCountries).map(([key, value]) => (
                            <MenuItem key={key} value={key}>
                                {value}
                            </MenuItem>
                        ))}
                    </TextField>
                    {
                        watch("country") === "USA" && (
                            <TextField
                                sx={{}}
                                fullWidth
                                type="text"
                                variant="outlined"
                                label="state"
                                {...register('state')}
                                error={!!errors.state}
                                helperText={typeof errors.state?.message === 'string' ? errors.state?.message : 'Write your state'}

                            >
                            </TextField>
                        )
                    }
                </Box>
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                        label="Description"
                        {...register('description')}
                        error={!!errors.description}
                        helperText={typeof errors.description?.message === 'string' ? errors.description?.message : 'Write your state'}

                    >
                    </TextField>
                </Box>

                <Box sx={{ display: 'flex', ml: 3 }}>
                    <Button
                        sx={{
                            width: {
                                xs: '30%',
                                sm: '20%'
                            },
                        }}

                        type="submit" variant="contained">
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    )
}
