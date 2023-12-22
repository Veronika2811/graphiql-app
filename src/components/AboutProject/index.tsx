import { Grid } from '@mui/material';
import aboutImage1 from 'assets/images/jpg/aboutImage1.jpg';
import aboutImage2 from 'assets/images/jpg/aboutImage2.jpg';
import aboutImage3 from 'assets/images/jpg/aboutImage3.jpg';
import aboutImage4 from 'assets/images/jpg/aboutImage4.jpg';

import LayoutAboutProject from './LayoutAboutProject';

export const AboutProject = () => (
  <Grid container rowGap={5}>
    <LayoutAboutProject
      position="row"
      title="A query language for your API"
      image={aboutImage1}
      imageError={aboutImage3}
    >
      GraphQL is a query language for APIs and a runtime for fulfilling those
      queries with your existing data. GraphQL provides a complete and
      understandable description of the data in your API, gives clients the
      power to ask for exactly what they need and nothing more, makes it easier
      to evolve APIs over time, and enables powerful developer tools.
    </LayoutAboutProject>

    <LayoutAboutProject
      position="row-reverse"
      title="Ask for what you need,get exactly that"
      image={aboutImage2}
      imageError={aboutImage4}
    >
      Send a GraphQL query to your API and get exactly what you need, nothing
      more and nothing less. GraphQL queries always return predictable results.
      Apps using GraphQL are fast and stable because they control the data they
      get, not the server.
    </LayoutAboutProject>
  </Grid>
);
