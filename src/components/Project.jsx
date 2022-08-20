import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import  Typography  from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import IconButton  from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles((theme) =>({
    CardMedia: {
        width: 180,
       


    },

    Card: {
        display: "flex",
        
    },

    links: {
        marginRight: "auto",
    },

    tag: {
        marginRight: 5,
        marginBottom: 5,
    },
}));


function TagsContainer({tags}){
    const styles = useStyles()
    return (
        <div>
            {tags.map((tag) => (
                    <Chip
                    className={styles.tag} 
                    label={tag} variant="outlined"
                    key={tag}
                    ></Chip>
                ))}
        </div>
    )
}


// destructure array
function Project({ title, description, imageUrl, tags, links }) {
    const styles = useStyles()
    return ( 
        <Grid item>
        <Card className={styles.Card}>
            <div>
            <CardContent>
            <Typography variant="h5" paragraph>{title}</Typography>
            <Typography variant="subtitle1" paragraph>
                {description}
            </Typography>
            <Hidden mdUp>
                <TagsContainer tags={tags} />
            </Hidden>
            </CardContent>
            
            <CardActions>
            <div className={styles.links}>
                {links.map((linkItem) => (
                <IconButton href={linkItem.href} key={linkItem.href}>
                <linkItem.icon />
                </IconButton>
                ))}
            </div>
            <Hidden smDown>
                <TagsContainer tags={tags} />
            </Hidden>
            </CardActions>
            </div>
            <Hidden xsDown>
            <CardMedia 
             className={styles.CardMedia}
             image={imageUrl}
             ></CardMedia>
            </Hidden>
        </Card>
        </Grid>
    );
}

export default function Projects() {
  return (
    <Container maxWidth="md" id="projects">
        <Box pt={8} mb={2}>
        <Typography variant="h4">Projects</Typography>

        </Box>
        
        
        <Grid container direction="column" spacing={4}>
        {projectsData.map((data) => (
          <Project {...data} /> 
    ))}
        </Grid>
    </Container>
    
  )
}


const projectsData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      imageUrl:
        "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
      imageAlt: "Project 1 Image",
      tags: ["React.js", "Material-UI", "Gatsby.js"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://www.github.com",
        },
        {
          icon: OpenInNewIcon,
          href: "https://www.jackkay6.com",
        },
      ],
    },

    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        imageUrl:
          "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        imageAlt: "Project 1 Image",
        tags: ["React.js", "Material-UI", "Gatsby.js"],
        links: [
          {
            icon: GitHubIcon,
            href: "",
          },
          {
            icon: OpenInNewIcon,
            href: "",
          },
        ],
      },

      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing ",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        imageUrl:
          "https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80",
        imageAlt: "Project 1 Image",
        tags: ["React.js", "Material-UI", "Gatsby.js"],
        links: [
          {
            icon: GitHubIcon,
            href: "",
          },
          {
            icon: OpenInNewIcon,
            href: "",
          },
        ],
      },



]