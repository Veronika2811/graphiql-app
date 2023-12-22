import { DefaulSocialIcon } from 'ui/icons/socialIcons/DefaulSocialIcon';
import { GithubIcon } from 'ui/icons/socialIcons/GitHubIcon';
import { LinkedInIcon } from 'ui/icons/socialIcons/LinkedInIcon';
import { TelegramIcon } from 'ui/icons/socialIcons/TelegramIcon';

export const socialMediaController = (typeSocialMedia: string) => {
  switch (typeSocialMedia) {
    case 'github': {
      return <GithubIcon fontSize="large" />;
    }
    case 'linkedIn': {
      return <LinkedInIcon fontSize="large" />;
    }
    case 'telegram': {
      return <TelegramIcon fontSize="large" />;
    }
    default:
      return <DefaulSocialIcon fontSize="large" />;
  }
};
