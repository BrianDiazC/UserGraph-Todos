import { Box, Button, Card, CardActions, CardContent, Container, Grid2, Paper, Typography } from "@mui/material";


export default function () {
  return (
    <Container sx={{pt:2, border:2}} >
      <Typography variant="h2" align={"center"}>
      Todos:
      </Typography>
      <Grid2 container spacing={2} sx={{mt: 5, border:2}} >
        <Card >
          <CardContent>
            <Typography variant="h3">
              Title
            </Typography>
            <Typography >
              Description
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary">
                  ver más...
            </Button>
          </CardActions>
        </Card>
      </Grid2>
    </Container>
  );
}