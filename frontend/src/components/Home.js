import React, { useEffect, useState } from "react";
// import ReactFlow from 'react-flow-renderer';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import cover from "../assets/cover.jpg";
import liquidCheese from "../assets/liquid-cheese2.svg";
import donationbox from "../assets/donationbox.png"
import student from "../assets/student-removebg.png"
import cardimg1 from "../assets/cardimg1.jpg"
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import students from "../assets/students.jpg"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import PetsIcon from '@material-ui/icons/Pets';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { Avatar } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
} from "react-share";
import EventCard from "./EventCard";
import alanBtn from "@alan-ai/alan-sdk-web"

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  heroContent: {
    // backgroundColor: "#FEFFFF",
    padding: theme.spacing(10, 0, 4),
    backgroundColor: "#ffaa00",
    backgroundImage: `url(${liquidCheese})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  header: {
    height: "85vh",
    backgroundSize: "cover",
    backgroundPosition: "65% 50%",
    // backgroundImage: `url(${cover})`,
    // backgroundSize: "cover",
    // backgroundPosition: "65% 50%",
    // backgroundImage: `url(${liquidCheese})`,
    // backgroundColor: "#ffaa00"
  },
  heroDesign: {
    // border: "2px solid red",
    backgroundColor: "#af0d24",
    width: "150px",
    height: "150px",
    // marginTop: "-10%",
    // position: "absolute",
    "&:before": {
      content: "''",
      display: "block",
      width: "170px",
      height: "150px",
      // backgroundColor: "black",
      background: `linear-gradient(90deg, white 5px, transparent 1%) center, 
                  linear-gradient(white 5px, transparent 1%) center, grey`,
      backgroundSize: "6px 6px",
      marginTop: "20px",
      position: "absolute",
      zIndex: "-1"
    },
  },
  heroTextContainer: {
    // margin: "0 10% 0 10%",
    color: "black",
    padding: "0 10% !important",
    position: "relative",
    zIndex: "1",
  },
  heroText: {
    // borderLeft: "3px solid #dfdfdf",
    padding: theme.spacing(6),
    // "& h3": {
    //   color: "grey",
    //   textTransform: "lowercase",
    //   fontWeight: "bold",
    //   // letterSpacing: "1px",
    // },
  },
  heroImageItem: {
    display: "grid",
    placeItems: "center",
  },
  heroImageDiv: {
    width: "30vw",
    height: "30vw",
    border: "2px solid black",
    borderRadius: "50%",
    overflow: "hidden",
    zIndex: 1
  },
  heroImage: {
    width: "60vw",
    marginLeft: "-30vw",
    marginTop: "10%",
  },
  heroText: {
    // margin: "0 10% 0 10%",
    color: "black",
  },
  halfCircle: {
    height: "75vh",
    width: "75vh",
    border: "2px solid black",
    borderRadius: "50%",
    position: "absolute",
    marginLeft: "calc(100vw - 37.5vh)",
    marginTop: "5vh",
  },
  cardGrid: {
    backgroundColor: "#FEFFFF",
    // paddingBottom: theme.spacing(8),
    padding: theme.spacing(8, 16),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
    alignItems: "center",
  },
  heading: {
    width: "100%",
    fontSize: 30,
    fontWeight: "500",
    // textDecoration: "underline",
  },
  card: {
    backgroundColor: "white",
    height: "100%",
    boxShadow: "5px 5px 5px 5px lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    "&:hover": {
      boxShadow: "0 3px 12px darkgrey",
    },
  },
  cardMedia: {
    margin: "2%",
    paddingTop: "56.25%",
    borderRadius: "0.25rem",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
  },
  carousel: {
    width: "100%",
  },
  carouselItemContainer: {
    display: "flex",
    gap: "5%",
    paddingTop: "1rem",
  },
  carouselItem: {
    backgroundColor: "white",
    height: "100%",
    boxShadow: "0 3px 10px lightgrey",
    display: "flex",
    flexDirection: "column",
    padding: "4%",
    "&:hover": {
      boxShadow: "0 3px 12px darkgrey",
    },
    width: "250px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

function Home({ history }) {
  const classes = useStyles();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Header /> */}
      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="xl">
            <Grid container alignItems="center" className={classes.header}>
              <Grid xs={12} md={6} lg={4} item className={classes.heroText} style={{ marginLeft: "50px", marginRight: "30px" }}>
                <Typography variant="h3" gutterBottom style={{ fontStyle: "bold" }}>
                  <span style={{ color: "#f75f00" }}><strong>Trusted</strong></span> and <span style={{ color: "#f75f00" }}><strong>Transparent</strong></span> Crowdfunding Platform
                </Typography>
                <br />
                <div style={{ display: "flex" }}>
                  <div style={{ marginRight: "10px" }}>
                    <AddShoppingCartIcon style={{ marginLeft: "30px", fontSize: "50px" }} /><h3 style={{ textAlign: "center" }}>Rs. 150Cr.+</h3><p style={{ textAlign: "center" }}>Worth Donations</p>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <SupervisorAccountIcon style={{ marginLeft: "30px", fontSize: "50px" }} /><h3 style={{ textAlign: "center" }}>5 Lakhs +</h3><p style={{ textAlign: "center" }}>Unique Donors</p>
                  </div>
                  <div style={{ marginRight: "10px" }}>
                    <HomeIcon style={{ marginLeft: "30px", fontSize: "50px" }} /><h3 style={{ textAlign: "center" }}>1000+</h3><p style={{ textAlign: "center" }}>NGOs impacted</p>
                  </div>
                </div>
                {/* <Typography variant="h6" gutterBottom>
                  Learn How To Build Websites & Apps Write A Code Or Start A
                  Business

                </Typography> */}
                <br />
                {!userInfo ? (
                  <Link
                    to={"/signup"}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <Button style={{ width: "250px", borderRadius: "999px", backgroundColor: "#03ab14", color: "white" }} variant="contained">
                      Join Us
                    </Button>
                  </Link>
                ) : ("")}
              </Grid>
              {/* <ReactFlow elements={elements} /> */}
              <Grid xs={12} md={6} lg={6} item className={classes.heroText} style={{ marginLeft: "50px" }}>
                <img src={donationbox} alt='img' width="90%" />
                {/* <Typography variant="h4" gutterBottom>
                  Learn HTML , CSS , Web Apps & More
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Learn How To Build Websites & Apps Write A Code Or Start A
                  Business

                </Typography> */}
              </Grid>

            </Grid>

          </Container>

        </div>
        <br />
        <br />
        <br />
        {/* Card and search bar */}

        <Grid container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Card style={{ width: "70%", borderRadius: "30px", boxShadow: "5px 5px 25px 5px black" }}>
            <Grid container style={{ padding: "10px" }}>
              <Grid item lg={4} md={4} sm={4}>
                <br />
                <img style={{ width: "300px", borderRadius: "30px", padding: "10px" }} src={students} alt="img" />
              </Grid>
              <Grid lg={8} md={8} sm={8}>
                <h2>Join hands with SANKALP to educate thousands of poor kids and give them a bright future.</h2>
                <p>NGO works tirelessly to give education to the poor and underpreviledged and give them the life they deserve.</p>
                <Button variant="contained" color="primary">Donate Now</Button>

              </Grid>
            </Grid>
          </Card>
          <br />
          <Paper style={{ margin: "20px", border: "4px #f75f00 solid", width: "60%" }} component="form" className={classes.root}>
            {/* <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton> */}
            <InputBase
              className={classes.input}
              style={{ width: "120%" }}
              placeholder="Search by Campaign Title Or NGO name    "
              inputProps={{ 'aria-label': 'Search for NGOs' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
              <DirectionsIcon />
            </IconButton>
          </Paper>
        </Grid>
        {/* CATEGORIES */}
        <div style={{ backgroundColor: "#dbf2ff", paddingLeft: "10%", paddingRight: "10%", paddingTop: "3%", paddingBottom: "3%" }}>
          <h2>Categories</h2>
          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >

              <Tab label={<><NotificationImportantIcon />Urgent</>} />
              <Tab label={<><PetsIcon />Animals</>} />
              <Tab label={<><CastForEducationIcon />Education</>} />
              <Tab label={<><PersonIcon />Elderly</>} />
              <Tab label={<><LocalHospitalIcon />Medical</>} />
              <Tab label={<><HomeIcon />Disaster Relief</>} />
            </Tabs>
          </Paper>
          {/* EVENT CARDS */}
          <br />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
        {/* Text with GIFS */}
        {/* <Container className={classes.cardGrid}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature1}
                  // image="https://jana-sa.com/image/about-us/e762bf4b8cbc5ee9e70e7e087f99e5c3.gif"
                  image="https://cdn.dribbble.com/users/2514124/screenshots/5439070/girl_3.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Life Time Access
                  </Typography>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature2}
                  image="https://i.pinimg.com/originals/16/9c/11/169c11293f5c08a325ee1bbc8a0d4cb8.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Low Cost
                  </Typography>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  // image={feature3}
                  // image="https://mintbook.com/assetsNew/img/university.gif"
                  image="https://www.excelsisdeo.com/images/AlphaTestersAnimation_60.gif"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h" component="h2">
                    Learning at your Finger Tips
                  </Typography>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container> */}
        {/* Fetching courses */}
        {/* <Container className={classes.cardGrid} maxWidth="xl">
          {courses.map((course) => (
            <div>
              <br />
              <Typography className={classes.heading} gutterBottom>
                {course.title}
              </Typography>
              <br />
              <Carousel autoPlay={false} animation="slide" className={classes.carousel} >
                {carouselItems(course.data)}
              </Carousel>
              <br />
            </div>
          ))}
        </Container> */}
        {/* <Container className={classes.cardGrid} maxWidth="xl">
          {courses.map((course) => (
            <div>
              <br />
              <Typography className={classes.heading} gutterBottom>
                {course.title}
              </Typography>
              <br />
              <Grid container spacing={8}>
                {course.data.map((particularCourse, index) => (
                  <Grid item key={index} xs={12} sm={6} md={3}>
                    <Link
                      to={`/course/${particularCourse._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={particularCourse.image}
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h" component="h2">
                          //  Heading 
                            {particularCourse.name}
                          </Typography>
                          <Typography>
                            {particularCourse.description}
                         //  This is a media card. You can use this section to
                         //   describe the content. 
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Grid>
                ))}
              </Grid>
              <br />
            </div>
          ))}
        </Container> */}

      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;