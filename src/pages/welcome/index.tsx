import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Stack, Typography } from '@mui/material';

import { AboutProject } from '../../components/AboutProject';
import { TeamCard } from '../../components/TeamCard';

import styles from './WelcomePage.styles';

const WelcomePage = () => {
  const auth = '';

  return (
    <Stack
      spacing={{ xs: 5, sm: 7 }}
      direction="column"
      useFlexGap
      sx={styles.container}
    >
      <Stack direction="column" spacing={2}>
        <Typography variant="h1" align="center" color="secondary">
          The Best IDE for GraphQL Requests
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          created within RSSchool
        </Typography>
      </Stack>
      {auth ? (
        <Typography variant="h3" component="h2" align="center">
          Query and Explore GraphQL API with&nbsp;
          <Link
            component={RouterLink}
            to="/editor"
            color="secondary"
            underline="always"
          >
            GraphiQL IDE
          </Link>
        </Typography>
      ) : (
        <Typography variant="h3" component="h2" align="center">
          <Link
            component={RouterLink}
            to="/authorization"
            color="secondary"
            underline="always"
          >
            Sign In
          </Link>
          &nbsp;to get started
        </Typography>
      )}

      <AboutProject />

      <Typography variant="h1" component="h2" align="center" color="secondary">
        Team
      </Typography>

      <Grid container spacing={5} columnSpacing={5} wrap="wrap">
        <Grid container item xs={12} md={4} justifyContent="center">
          <TeamCard
            name="Konstantin"
            github="https://github.com/KikinovK"
            linkedIn="https://www.linkedin.com/in/kostiantyn-kikinov-505387b3/"
            telegram="https://t.me/KonstantinKikinov"
          />
        </Grid>
        <Grid container item xs={12} md={4} justifyContent="center">
          <TeamCard
            name="Veranika"
            github="https://github.com/Veronika2811"
            linkedIn="https://www.linkedin.com/in/veranika-smiayun-9a2297235/"
            telegram="https://t.me/nika_2811"
          />
        </Grid>
        <Grid container item xs={12} md={4} justifyContent="center">
          <TeamCard
            name="Artem"
            github="https://github.com/Arterixs"
            linkedIn=""
            telegram="https://t.me/arteminder"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default WelcomePage;
