import aboutImage1 from 'assets/images/jpg/aboutImage1.jpg';
import aboutImage2 from 'assets/images/jpg/aboutImage2.jpg';
import aboutRsschool from 'assets/images/jpg/aboutRsschool.jpg';
import { useLocale } from 'internationalization/useLocale';

export const GetAboutProjectElements = () => {
  const { translation } = useLocale();

  return [
    {
      image: aboutImage1,
      title: translation.about_project_title_1,
      description: translation.about_project_subtitle_1,
    },
    {
      image: aboutImage2,
      title: translation.about_project_title_2,
      description: translation.about_project_subtitle_2,
    },
    {
      image: aboutRsschool,
      title: translation.about_project_title_3,
      description: translation.about_project_subtitle_3,
    },
  ];
};
