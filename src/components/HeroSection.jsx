import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Social from './Social';
import Hidden from '@material-ui/core/Hidden';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
section: {
    height: "90vh",
    backgroundImage: "url(https://images.unsplash.com/photo-1510057622795-5c8122c2c665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)",
    backgroundSize: "cover",
    position: 'relative',
},
content: {
    height: "100%",
},

container: {
    height: "100%"
},
}));

export default function HeroSection() {
  const styles = useStyles();
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => setShouldShow(true), []);
    return (
    <Paper className={styles.section} id="about">
        <Container className={styles.container} maxWidth="md">
            <Grid className={styles.content} container justifyContent='space-between' alignItems="center">


                <Zoom in={shouldShow}>
                <Grid item sm={8}>
                    <Typography component="h1"  variant="h3">Hi, my name is Jack Kay and I am a junior front end developer based in Vancouver, WA.</Typography>
                    <Typography component="h2" variant="h5">I design and build responsive websites and I am currently looking for employment</Typography>
                    <Box my={3}>
                    <Button href="mailto:jacktkay6@gmail.com" variant="outlined" color="secondary">Get in Touch!</Button>
                    </Box>                
                </Grid>
                </Zoom>
                
                <Hidden xsDown>
                <Grid item>
                    <Social direction="column" />
                </Grid>

                </Hidden>
                
            </Grid>
            
        </Container>
        
    </Paper>
  )
}
