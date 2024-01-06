import { Grid } from '@mui/material';
import { GetAboutProjectElements } from 'utils/get-about-project-elements';

import { AboutProjectLayout } from '../welcome-about-project-layout';

export const AboutProjectList = () => {
  const aboutProjectList = GetAboutProjectElements();

  return (
    <Grid container rowGap={5}>
      {aboutProjectList.map((el, index) => (
        <AboutProjectLayout
          key={el.title}
          position={index % 2 ? 'row-reverse' : 'row'}
          title={el.title}
          image={el.image}
        >
          {el.description}
        </AboutProjectLayout>
      ))}
    </Grid>
  );
};
