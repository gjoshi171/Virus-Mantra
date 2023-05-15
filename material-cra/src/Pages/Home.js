import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../Components/Header";
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Virus Mantra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const diseases = [
  {
    name: "Monkey Pox",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image: "https://www.cdc.gov/poxvirus/mpox/images/home-prevent.jpg?_=82729",
  },
  {
    name: "Covid 19",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image: "https://www.cdc.gov/homepage/images/cards/covid19.jpg?_=95798",
  },
  {
    name: "Swine flu",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image:
      "https://www.cdc.gov/homepage/images/cards/protect-health-720x400px_1.jpg?_=28886",
  },
  {
    name: "Monkey Pox",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image: "https://www.cdc.gov/poxvirus/mpox/images/home-prevent.jpg?_=82729",
  },
  {
    name: "Covid 19",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image: "https://www.cdc.gov/homepage/images/cards/covid19.jpg?_=95798",
  },
  {
    name: "Swine flu",
    route: "",
    info: "This is a info card. You can use this section to describe the content",
    image:
      "https://www.cdc.gov/homepage/images/cards/protect-health-720x400px_1.jpg?_=28886",
  },
];

const theme = createTheme();

export default function Home() {
  const history = useHistory();

  return (
    <ThemeProvider theme={theme}>
      <Header title="Virus Mantra" />
      <CssBaseline />

      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Virus mantra
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              We provide the information on diseases and outbreak's, you can
              check symptoms, treatment all details on our site, You can also
              avail our feature to find plasma in case of emergency treatment
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button
                variant="contained"
                onClick={() => history.push("/plasma")}
              >
                Find Plasma / Donate Plasma
              </Button>
              <Button
                variant="outlined"
                onClick={
                  () => history.push("/statistics")
                  // window.location.replace(
                  //   "https://app.powerbi.com/view?r=eyJrIjoiNjljOTY0ZDYtMzczZS00MWNhLWE1ODAtZWY0ZDY3YWQ5Y2QxIiwidCI6IjNkOGE4NjQwLTE1YzYtNDk1NS05MTc4LTlhNjEzYTk4ZDNjYSJ9&pageName=ReportSectionced8bfebcec9c0b3a510"
                  // )
                }
              >
                Statistics
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xm ">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {diseases.map((disease) => (
              <Grid item key={disease} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={disease.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {disease.name}
                    </Typography>
                    <Typography>{disease.info}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => history.push("/monkeyPox")}
                    >
                      More info ...
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom></Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
