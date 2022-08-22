import React from 'react';
import CoffeeIcon from '@mui/icons-material/Coffee';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';



const socialItems = [
    {icon: GitHubIcon, url:"https://github.com/jackkayak"},
    {icon: LinkedInIcon, url: "https://www.linkedin.com/in/jacktkay/"},
    {icon: CoffeeIcon, url:"https://www.buymeacoffee.com/jacktkay62"}
]



export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row" } spacing={2}>
        {socialItems.map((item) => (
            <Grid item>
                <Link href={item.url}>
                    <IconButton>
                        <item.icon />
                    </IconButton>
                </Link>
            </Grid>
        ))}
    </Grid>
  )
}
