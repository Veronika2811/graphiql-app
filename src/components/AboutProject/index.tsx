import { Grid } from '@mui/material';
import aboutImage1 from 'assets/images/jpg/aboutImage1.jpg';
import aboutImage2 from 'assets/images/jpg/aboutImage2.jpg';
import aboutRsschool from 'assets/images/jpg/aboutRsschool.jpg';

import LayoutAboutProject from './LayoutAboutProject';

export const AboutProject = () => (
  <Grid container rowGap={5}>
    <LayoutAboutProject
      position="row"
      title="A query language for your API"
      image={aboutImage1}
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
    >
      Send a GraphQL query to your API and get exactly what you need, nothing
      more and nothing less. GraphQL queries always return predictable results.
      Apps using GraphQL are fast and stable because they control the data they
      get, not the server.
    </LayoutAboutProject>
    <LayoutAboutProject
      position="row"
      title="About the RS School"
      image={aboutRsschool}
    >
      RS School is free-of-charge and community-based education program
      conducted by The Rolling Scopes developer community since 2013. Everyone
      can study at RS School, regardless of age, professional employment, or
      place of residence. The mentors and trainers of school are front-end and
      javascript developers from different companies and countries.
    </LayoutAboutProject>
  </Grid>
);
