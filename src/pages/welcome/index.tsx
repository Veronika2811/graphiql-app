import { Grid, Stack, Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { GenerateInformationAboutDeveloper } from 'utils/generate-info-developers';

import { AboutProject } from 'components/about-project';
import { TeamCard } from 'components/team-card';
import WelcomeLinkAuthorization from 'components/welcome-link-authorization';
import WelcomeLinkEditor from 'components/welcome-link-editor';
import { WelcomeTitle } from 'components/welcome-title';

const WelcomePage = () => {
  const { translation } = useLocale();

  return (
    <Stack spacing={{ xs: 5, sm: 7 }} direction="column" useFlexGap>
      <WelcomeTitle />

      {localStorage.getItem('auth') ? (
        <WelcomeLinkEditor />
      ) : (
        <WelcomeLinkAuthorization />
      )}

      <AboutProject />

      <Typography variant="h2" component="h2" align="center" color="secondary">
        {translation.team}
      </Typography>

      <Grid container spacing={5} columnSpacing={5} wrap="wrap">
        {GenerateInformationAboutDeveloper().map((developer) => (
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
};

export default WelcomePage;
