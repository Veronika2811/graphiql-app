import { ReactNode } from 'react';
import { CardMedia, Grid, Typography } from '@mui/material';

import { aboutProjectSx } from './styles';

const LayoutAboutProject = ({
  position,
  title,
  image,
  imageError,
  children,
}: {
  position: 'row' | 'row-reverse';
  title: string;
  image: string;
  imageError: string;
  children: ReactNode;
}) => (
  <Grid container spacing={5} alignItems="center" flexDirection={position}>
    <Grid
      item
      xs={12}
      md={6}
      display="flex"
      flexDirection="column"
      gap={2}
      zeroMinWidth
    >
      <Typography align="left" variant="h4" component="h3">
        {title}
      </Typography>
      <Typography
        variant="body1"
        align="left"
        paragraph
        sx={aboutProjectSx.subtitle}
      >
        {children}
      </Typography>
    </Grid>
    <Grid item xs={12} md={6} zeroMinWidth>
      <CardMedia
        component="img"
        image={image}
        alt={`Section image ${title}`}
        loading="lazy"
        sx={aboutProjectSx.img}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = imageError;
        }}
      />
    </Grid>
  </Grid>
);

export default LayoutAboutProject;
