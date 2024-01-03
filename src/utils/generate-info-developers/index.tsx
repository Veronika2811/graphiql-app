import girl from 'assets/images/svg/girl.svg';
import man from 'assets/images/svg/man.svg';
import { useLocale } from 'internationalization/useLocale';

export const GenerateInformationAboutDeveloper = () => {
  const { translation } = useLocale();

  return [
    {
      name: translation.konstantin,
      photo: man,
      socialMedia: [
        {
          type: 'github',
          url: 'https://github.com/KikinovK',
        },
        {
          type: 'linkedIn',
          url: 'https://www.linkedin.com/in/kostiantyn-kikinov-505387b3/',
        },
        {
          type: 'telegram',
          url: 'https://t.me/KonstantinKikinov',
        },
      ],
    },
    {
      name: translation.veranika,
      photo: girl,
      socialMedia: [
        {
          type: 'github',
          url: 'https://github.com/Veronika2811',
        },
        {
          type: 'linkedIn',
          url: 'https://www.linkedin.com/in/veranika-smiayun-9a2297235/',
        },
        {
          type: 'telegram',
          url: 'https://t.me/nika_2811',
        },
      ],
    },
    {
      name: translation.artem,
      photo: man,
      socialMedia: [
        {
          type: 'github',
          url: 'https://github.com/Arterixs',
        },
        {
          type: 'linkedIn',
          url: 'https://www.linkedin.com/in/artem-ivanov-49ba35255/',
        },
        {
          type: 'telegram',
          url: 'https://t.me/arteminder',
        },
      ],
    },
  ];
};
