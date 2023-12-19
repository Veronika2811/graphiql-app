import { CardMedia, Grid, Stack, Typography } from '@mui/material';

import img1 from '../../assets/images/jpg/img1.jpg';
import img2 from '../../assets/images/jpg/img2.jpg';

import { styles } from './styles';

export const AboutProject = () => (
  <Grid container spacing={5} columnSpacing={5} wrap="wrap">
    <Grid container item xs={12} md={6} alignItems="center" zeroMinWidth>
      <Stack direction="column" spacing={2}>
        <Typography align="left" variant="h4" component="h3">
          A query language for your API
        </Typography>
        <Typography
          variant="body1"
          align="left"
          paragraph
          sx={styles['about-subtitle']}
        >
          GraphQL is a query language for APIs and a runtime for fulfilling
          those queries with your existing data. GraphQL provides a complete and
          understandable description of the data in your API, gives clients the
          power to ask for exactly what they need and nothing more, makes it
          easier to evolve APIs over time, and enables powerful developer tools.
        </Typography>
      </Stack>
    </Grid>
    <Grid container item xs={12} md={6} zeroMinWidth>
      <CardMedia component="img" image={img1} alt="img1" sx={styles.img} />
    </Grid>
    <Grid container item xs={12} md={6} zeroMinWidth>
      <CardMedia component="img" image={img2} alt="img2" sx={styles.img} />
    </Grid>
    <Grid container item xs={12} md={6} alignItems="center" zeroMinWidth>
      <Stack direction="column" spacing={2}>
        <Typography align="left" variant="h4" component="h3">
          Ask for what you need,get exactly that
        </Typography>
        <Typography
          variant="body1"
          align="left"
          paragraph
          sx={styles['about-subtitle']}
        >
          Send a GraphQL query to your API and get exactly what you need,
          nothing more and nothing less. GraphQL queries always return
          predictable results. Apps using GraphQL are fast and stable because
          they control the data they get, not the server.
        </Typography>
      </Stack>
    </Grid>
  </Grid>
);
