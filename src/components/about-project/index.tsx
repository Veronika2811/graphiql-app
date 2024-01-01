import { Grid } from '@mui/material';
import aboutImage1 from 'assets/images/jpg/aboutImage1.jpg';
import aboutImage2 from 'assets/images/jpg/aboutImage2.jpg';
import aboutRsschool from 'assets/images/jpg/aboutRsschool.jpg';
import { useLocale } from 'context/hook';

import LayoutAboutProject from '../layout-about-project';

export const AboutProject = () => {
  const { translation } = useLocale();

  return (
    <Grid container rowGap={5}>
      <LayoutAboutProject
        position="row"
        title={translation.about_project_title_1}
        image={aboutImage1}
      >
        {translation.about_project_subtitle_1}
      </LayoutAboutProject>

      <LayoutAboutProject
        position="row-reverse"
        title={translation.about_project_title_2}
        image={aboutImage2}
      >
        {translation.about_project_subtitle_2}
      </LayoutAboutProject>
      <LayoutAboutProject
        position="row"
        title={translation.about_project_title_3}
        image={aboutRsschool}
      >
        {translation.about_project_subtitle_3}
      </LayoutAboutProject>
    </Grid>
  );
};
