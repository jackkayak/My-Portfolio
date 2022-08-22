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
        width: 500,
       


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
            <CardContent >
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
        title: "Blog App",
        description:
          "Be on the lookout for this project as I intend to create a bit more of an ambitious web app.",
        
        tags: ["React.js", "Node.js"],
        links: [
          {
            icon: GitHubIcon,
            href: "/",
          },
        ],
      },
    {
      title: "Jammmer Spotify App",
      description:
        "I Was interested in learning how to pull an API like spotify's. I used class components in React so I could master that skill, but for now on I will be using React Function components. Designed only for desktop, the design is minimalistic and calming color scheme to it. Still have to fix a bug within the Spotify API request.",
      imageUrl:
        "/Jammer.png",
      imageAlt: "Music App",
      tags: ["React.js", "Spotify API"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/jackkayak/Jammer",
        },
      ],
    },

    {
        title: "React Task Tracker",
        description:
          "This app cleared up a bit of React for me. I knew the basics and fundementals of React, but after completing this I learned how to use setState. The app allows users to add their tasks and delete them. Users can also double click to make a task important. Credit to Traversy Media for the tutorial",
        imageUrl:
          "/DailyTasks.png",
        imageAlt: "Task Tracker UI",
        tags: ["React.js"],
        links: [
          {
            icon: GitHubIcon,
            href: "https://github.com/jackkayak/Task-Manager",
          },
          {
            icon: OpenInNewIcon,
            href: "/",
          },
        ],
      },

      {
        title: "My Website",
        description:
          "I honestly really like having components rather than vanilla HTML,CSS,JS pages, I decided to try out Gatsby and material UI after hearing about them in Reddit. Having a background in webflow helped me a bit understanding their documentations for the material UI components. For a static website, Gatsby is great to work with.",
        
        imageAlt: "Project 1 Image",
        tags: ["React.js", "Material-UI", "Gatsby.js"],
        links: [
          {
            icon: GitHubIcon,
            href: "https://github.com/jackkayak/My-Portfolio",
          },
          {
            icon: OpenInNewIcon,
            href: "/",
          },
        ],
      },

      {
        title: "N. Brereton Medical Technologies",
        description:
          "Originally a graphic design intern position, then led to me having full control of the site design and development. Prior and during my internship I was taking UI/UX classes at my university, so I was not too intimidated. But as time went on the startup went through a bit of troubles, I was promised a contract, but was not given the time to review it with the ceo, so I decided to just stop my work with them. Their website domain went down for unknown reasons, but I still have the free domain webflow provided.",
        
        imageAlt: "HomePage",
        tags: ["Webflow", "MemberStack"],
        links: [
          {
            icon: OpenInNewIcon,
            href: "https://n-brereton-medical.webflow.io/",
          },
        ],
      },



]