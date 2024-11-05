import { ClientFormZod } from "@/components/form/ClientFormZod";
import { CreateClientForm } from "@/components/form/CreateClientForm";
import { Box, Container, TextField, Typography } from "@mui/material";


const textFieldStyle = { flexGrow: 1, md: { maxWidth: 200 } }


export default function () {
    return (
        <Container maxWidth="md" >
            <Typography sx={{ mt: 4 }} variant="h3">
                Crear Clientes:
            </Typography>
            <hr />
            <CreateClientForm/>
            {/* <ClientFormZod/> */}
        </Container>
    );
}