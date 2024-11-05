import {z} from 'zod'


const countries = ['RD', 'PR', 'USA'] as const;

export type Countries = (typeof countries)[number];

export const mappedCountries: {[key in Countries]: string} = {
    RD: 'Republica Dominicana',
    PR: 'Puerto Rico',
    USA: 'Estados Unidos',
    
}


export const userSchema = z.object({
    name: z.string().min(3, {
        message: 'Field must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be less than 200 characters long'
    }),
    lastname: z.string().min(3, {
        message: 'Field must be at least 3 characters long'
    }).max(20, {
        message: 'Name must be less than 200 characters long'
    }),
    email: z.string().email({
        message: 'Please enter a valid email'
    }),
    phone: z.string().min(8).refine(phone => !isNaN(parseInt(phone)), {
        message: 'Number invalid'
    }),
    birthdate: z.string().date().refine((date) => {
        const currentDate = new Date();
        const birthDate = new Date(date);
        const birth = currentDate.getFullYear() - birthDate.getFullYear();

        return birth >= 18 
    }, {
        message:'You must have 18 years old'
    }),

    country: z.enum(countries, {
        errorMap: () => ({message: 'Please select a Country'})
    }),
    description: z.string().min(10, {
        message: 'This field must have more than 10 characters'
    })
})