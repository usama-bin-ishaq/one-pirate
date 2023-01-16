import React from "react";
import NavBar from "../components/NavBar";
import HeroImg from "../components/HeroImg";
import CardSection from "../components/CardSection";
import QuiltedImageList from "../components/QuiltedImageList";
import Caption from "../components/Caption";
import Form from "../components/Form";
import Image from "../components/Image";
import { FooterContent } from "../components/Zone/FooterContent";
import { Container, Grid, Typography } from "@mui/material";
const Travel = () => {
  return (
    <div>
      <NavBar />
      <HeroImg />
      <Container
        disableGutters
        maxWidth="xxl"
        sx={{
          backgroundColor: "#fff5f8",
          minHeight: "100vh",
          width: "100%"
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            py: 8
          }}
        >
          <Grid item md={3}>
            <CardSection
              icon={<FaUmbrellaBeach />}
              title="THE BEST LUXURY HOTELS"
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
          <Grid item md={3}>
            <CardSection
              icon={<GrSettingsOption />}
              title="THE BEST LUXURY HOTELS"
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
          <Grid item md={3}>
            <CardSection
              icon={<MdPayments />}
              title="THE BEST LUXURY HOTELS"
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Caption />
      </Container>
      <Container maxWidth="lg">
        <QuiltedImageList />
      </Container>
      <Container
        disableGutters
        maxWidth="xxl"
        sx={{
          backgroundColor: "#fff5f8",
          minHeight: "100vh",
          width: "100%"
        }}
      >
        <Caption />
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
            py: 8
          }}
        >
          <Grid item md={3}>
            <CardSection
              title="1"
              icon={<FaUmbrellaBeach />}
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
          <Grid item md={3}>
            <CardSection
              icon={<GrSettingsOption />}
              title=""
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
          <Grid item md={3}>
            <CardSection
              icon={<MdPayments />}
              title=""
              description="From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home."
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg" disableGutters>
        <Grid
          container
          maxWidth="md"
          mt={8}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item md={6}>
            <Form />
          </Grid>
          <Grid
            item
            container
            md={6}
            sx={{
              backgroundImage: 'url("../dotid.jpg")',

              width: "100%",
              backgroundPosition: "absolute",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              m: "-67px 0px 0px -67px"
            }}
          >
            <Grid item md={6}>
              <Image />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          maxWidth={"lg"}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          my={4}
        >
          <Title />
        </Grid>
      </Container>
      <Container
        // disableGutters
        maxWidth="xxl"
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fff5f8"
        }}
      >
        <Grid container maxWidth="md" sx={{ py: 8 }}>
          <Grid item lg={6}>
            <FooterLogo />
          </Grid>

          <Grid item container lg={6}>
            <Grid item lg={3}>
              <FooterContent
                title="Legal"
                subtitle="Terms"
                subtitle1="About Us"
              />
            </Grid>
            <Grid item lg={3}>
              <FooterContent title="Language" subtitle={<SlectButton />} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid container maxWidth="lg" sx={{ py: 30 }}>
          <Grid item md={4}>
            <FooterLogo />
          </Grid>
          <Grid item container md={8}>
            <Grid item md={4}>
              <FooterContent
                title="Marketing "
                subtitle="Landing"
                subtitle1="Services"
                subtitle2="Case Studies"
                subtitle3="Case Study"
                subtitle4="Blog Posts"
                subtitle5="Blog Post"
                subtitle6="Contact"
                subtitle7="About"
              />
            </Grid>
            <Grid item md={4}>
              <FooterContent
                title="Career"
                subtitle="Illustrations"
                subtitle1="Bills & Snippest"
                subtitle2="Affiliate"
                subtitle3="Program"
                subtitle4="Bills & Snippest"
                subtitle5="Affiliate"
                subtitle6="Program"
              />
            </Grid>
            <Grid item md={4}>
              <FooterContent
                title=" Common"
                subtitle="Login"
                subtitle1="Register"
                subtitle2="Reset Password"
                subtitle3="404 Error"
                subtitle5="Maintenance"
                subtitle6="Pricing 01"
                subtitle7="Checkout"
                subtitle8="Login Cover"
                subtitle9="Register Cover"
                subtitle10="Verify Cod"
                subtitle11="500 Error"
                subtitle12="ComingSoon"
                subtitle13="Pricing"
                subtitle14="Support"
              />
            </Grid>
            <Grid item md={4}>
              <FooterContent
                title="Travel "
                subtitle="Term &"
                subtitle1="Codition"
                subtitle2="Privacy Policy"
                subtitle3="Licenses"
                subtitle4="(EULA)"
              />
            </Grid>
            <Grid item md={4}>
              <FooterContent
                title="E-Learning "
                subtitle="Term &"
                subtitle1="Codition"
                subtitle2="Privacy Policy"
                subtitle3="Licenses"
                subtitle4="(EULA)"
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Travel;
