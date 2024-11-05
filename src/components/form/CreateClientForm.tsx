'use client'
import { Box, Button, MenuItem, SxProps, TextField } from "@mui/material"
import { useForm } from "react-hook-form"




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

const countries = [
    {
        label: 'Republica Dominicana',
        value: 'RD',
    },
    {
        label: 'Estados Unidos',
        value: 'USA'
    },
    {
        label: 'Puerto Rico',
        value: 'PR'
    }
]

// interface ErroMessage {
//     [key:string]: string
// }

// const errorMessages:ErroMessage =  {
//     required: 'Field Required',
//     minLength: 'This field must be more than two characters',

// }

// const getsErrorsMesagges = (error:string):string  => {
//     let message = '';
//      for (const key in errorMessages) {
//        if(error === key) {
//         message = errorMessages[key]
//        }
//     }

//     return message;
// }

export const CreateClientForm = () => {

    const a = {name: "alice"}
    const b = {...a};
    b.name = "bob"
    console.log(a.name);

    const { register, handleSubmit,
        formState: { errors }, watch, setValue, reset } = useForm(/*{
            defaultValues: {
                name: 'Brian',
                lastname: '',
                email: ''
            }}*/);
    console.log(errors)
    const onSubmit = handleSubmit((data) => {
        console.log(data)
        console.log(errors)
        alert('Sending data...')
        reset()
    })
    setValue('name', 'Brian')

    return (
        <>

            <Box
                onSubmit={onSubmit}
                component="form" sx={{ p: 1 }}

            >
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label={errors ? "Name" : 'Required'}
                        placeholder="Brian"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Field Required'
                            },
                            minLength: {
                                value: 2,
                                message: 'This field must be more than two characters'
                            },
                            max: {
                                value: 20,
                                message: 'This fiel must be less than 20 characters'
                            }
                        })}
                        error={!!errors.name}
                        helperText={typeof errors.name?.message === 'string' ? errors.name?.message : ''}
                    // helperText={ 
                    //     typeof errors.name?.type === 'string' ? 
                    //     getsErrorsMesagges(errors.name?.type) : ''}                  
                    >
                    </TextField>

                    <TextField
                        fullWidth
                        // sx={textFieldStyle}
                        variant="outlined"
                        label="LastName"
                        placeholder="Diaz"
                        {...register("lastname", {
                            required: {
                                value: true,
                                message: 'Field Required'
                            },
                            minLength: {
                                value: 2,
                                message: 'This field must be more than two characters'
                            },
                            max: {
                                value: 20,
                                message: 'This fiel must be less than 20 characters'
                            }
                        })}
                        error={!!errors.lastname}
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
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Field Required'
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: 'Email is not valid'

                            }

                        })}
                        error={!!errors.email}
                        helperText={typeof errors.email?.message === 'string' ? errors.email?.message : ''}

                    >
                    </TextField>
                    <TextField
                        fullWidth
                        type="number"
                        variant="outlined"
                        label="Phone"
                        inputMode="numeric"
                        {...register("phone",
                            {
                                required: {
                                    value: true,
                                    message: 'Field Required'
                                },
                                pattern: {
                                    value: /^[0-9,$]*$/,
                                    message: 'This field just accepts numbers'
                                }
                                

                            }
                        )}
                        error={!!errors.phone}
                        helperText={typeof errors.phone?.message === 'string' ? errors.phone?.message : ''}

                    >
                    </TextField>
                </Box>
                <Box sx={BoxStyle}>
                    <TextField
                        fullWidth
                        type="date"
                        variant="outlined"
                        {...register("birthdate",
                            {
                                required: {
                                    value: true,
                                    message: 'Field Required'
                                },
                                validate: (value: string) => {
                                    const birthDate = new Date(value);
                                    const currentDate = new Date();
                                    const date = currentDate.getFullYear() - birthDate.getFullYear()

                                    return date >= 18 || 'You must have 18 years old'
                                }

                            


                            }
                        )}
                        error={!!errors.birthdate}
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
                        {countries.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
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
                            {...register('state', {
                                required: {
                                    value: true,
                                    message: 'This field is required'
                                }
                            })}
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
                        {...register('description', {
                            required: {
                                value: true,
                                message: 'This field is required'
                            }
                        })}
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
