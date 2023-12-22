import { Grid, Stack, Typography } from '@mui/material';
import { INFORMATION_ABOUT_DEVELOPERS } from 'constants/informationAboutDevelopers';

import { AboutProject } from 'components/AboutProject';
import { TeamCard } from 'components/TeamCard';
import WelcomeLinkAuthorization from 'components/WelcomeLinkAuthorization';
import WelcomeLinkEditor from 'components/WelcomeLinkEditor';
import { WelcomeTitle } from 'components/WelcomeTitle';

const WelcomePage = () => (
  <Stack spacing={{ xs: 5, sm: 7 }} direction="column" useFlexGap padding={3}>
    <WelcomeTitle />

    {localStorage.getItem('auth') ? (
      <WelcomeLinkEditor />
    ) : (
      <WelcomeLinkAuthorization />
    )}

    <AboutProject />

    <Typography variant="h2" component="h2" align="center" color="secondary">
      Team
    </Typography>

    <Grid container spacing={5} columnSpacing={5} wrap="wrap">
      {INFORMATION_ABOUT_DEVELOPERS.map((developer) => (
        <Grid
          item
          xs={12}
          lg={4}
          key={developer.name}
          display="flex"
          justifyContent="center"
        >
          <TeamCard
            name={developer.name}
            photo={developer.photo}
            socialMedia={developer.socialMedia}
          />
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default WelcomePage;
