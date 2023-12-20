import { Link as RouterLink } from 'react-router-dom';
import { Grid, Link, Stack, Typography } from '@mui/material';
import { INFORMATION_ABOUT_DEVELOPERS } from 'constants/informationAboutDevelopers';

import { AboutProject } from 'components/AboutProject';
import { TeamCard } from 'components/TeamCard';

const WelcomePage = () => {
  const auth = '';

  return (
    <Stack spacing={{ xs: 5, sm: 7 }} direction="column" useFlexGap padding={3}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h1" align="center" color="secondary">
          The Best IDE for GraphQL Requests
        </Typography>
        <Typography variant="subtitle1" component="p" align="center">
          The app is the result of completing the final task of RS School React
          Course.
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
        {INFORMATION_ABOUT_DEVELOPERS.map((developer) => (
          <Grid
            container
            item
            xs={12}
            lg={4}
            justifyContent="center"
            key={developer.id}
          >
            <TeamCard
              name={developer.name}
              github={developer.github}
              linkedIn={developer.linkedIn}
              telegram={developer.telegram}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default WelcomePage;
