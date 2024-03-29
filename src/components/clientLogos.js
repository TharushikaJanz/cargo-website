import { Box, Grid, Paper } from '@mui/material';
import genesis from "../assets/genesis.png";
import reuss from "../assets/reuss.png";
import integrio from "../assets/interago.png";
import brainbiz from "../assets/brainbiz.png";
import zikzag from "../assets/zikzag.png";

const logos = [
  { alt: 'REUSS SEO Company', src: reuss},
  { alt: 'GENESIS', src: genesis },
  { alt: 'INTEGRIO.CORP', src: integrio },
  { alt: 'BRAINBIZ Digital Agency', src: brainbiz },
  { alt: 'ZIK ZAG', src: zikzag },
];

const LogoBar = () => {
  return (
    <Paper
      elevation={0} 
      sx={{ 
        paddingY: 12,
        paddingX: 10,
        margin: 'auto', 
        maxWidth: '100%',
        backgroundColor: 'transparent', 
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {logos.map((logo, index) => (
          <Grid item key={index} xs={6} sm={4} md>
            <Box
              component="img"
              sx={{
                maxHeight: 85, 
                maxWidth: '100%',
                height: 'auto',
                display: 'block',
                margin: 'auto',
              }}
              src={logo.src}
              alt={logo.alt}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default LogoBar;
