import { List, ListItem } from '@mui/material';
import { GetDevelopersInfo } from 'utils/get-developers-info';

import SocialMediaIcon from 'components/social-media-icon';

import { gitHubDeveloperLinksSx } from './styles';

export const GitHubDeveloperLinks = () => {
  const developersInfo = GetDevelopersInfo();

  return (
    <List sx={gitHubDeveloperLinksSx.list}>
      {developersInfo.map((item) => {
        const { type, url } = item.socialMedia.find(
          (el) => el.type === 'github'
        )!;

        return (
          <ListItem key={item.name} disableGutters>
            <SocialMediaIcon name={item.name} type={type} url={url} />
          </ListItem>
        );
      })}
    </List>
  );
};
