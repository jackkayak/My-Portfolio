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
    backgroundImage: "url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)",
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
                    <Typography  component="h1"  variant="h3">Hi, my name is Jack Kay and I am a junior front end developer based in Vancouver, WA.</Typography>
                    <Typography  component="h2" variant="h5">My goal is to help companies stand out in the digital era. We can learn a thing or two from eachother and ultimately design an interface that is cutting-edge yet accessible to all. </Typography>
                    <Box my={4}>
                    <Button 
                    href="mailto:jacktkay6@gmail.com" 
                    variant="outlined" 
                    

                color="secondary"
                    >
                        Get in Touch!
                    </Button>
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
