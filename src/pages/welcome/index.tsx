import { useAuthState } from 'react-firebase-hooks/auth';
import { Grid, Stack, Typography } from '@mui/material';
import { auth } from 'api/initFirebase';
import { useLocale } from 'internationalization/useLocale';
import { GetDevelopersInfo } from 'utils/get-developers-info';

import { DeveloperCard } from 'components/developer-card';
import { AboutProjectList } from 'components/welcome-about-project-list';
import { WelcomeLinkAuthorization } from 'components/welcome-link-authorization';
import { WelcomeLinkEditor } from 'components/welcome-link-editor';
import { WelcomeTitle } from 'components/welcome-title';

const WelcomePage = () => {
  const [user] = useAuthState(auth);
  const { translation } = useLocale();

  const developersInfo = GetDevelopersInfo();

  return (
    <Stack spacing={{ xs: 5, sm: 7 }} direction="column" useFlexGap>
      {user ? <WelcomeLinkEditor /> : <WelcomeLinkAuthorization />}

      <WelcomeTitle />

      <AboutProjectList />

      <Typography variant="h2" component="h2" align="center" color="secondary">
        {translation.team}
      </Typography>

      <Grid container spacing={5} columnSpacing={5} wrap="wrap">
        {developersInfo.map((developer) => (
          <Grid
            item
            xs={12}
            lg={4}
            key={developer.name}
            display="flex"
            justifyContent="center"
          >
            <DeveloperCard
              name={developer.name}
              photo={developer.photo}
              socialMedia={developer.socialMedia}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default WelcomePage;
