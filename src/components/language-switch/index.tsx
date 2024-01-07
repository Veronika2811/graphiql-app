import { Box, Switch, Typography } from '@mui/material';
import { REGIONS } from 'internationalization/locale';
import { useLocale } from 'internationalization/useLocale';

import { languageSwitchSx } from './styles';

export const LanguageSwitch = () => {
  const { language, setLanguage } = useLocale();

  const onChangeLanguages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.checked ? REGIONS.EN : REGIONS.RU;
    setLanguage(lang);
  };

  return (
    <Box component="div" display="flex" alignItems="center" gap={1}>
      <Typography variant="button" color="primary.main">
        {REGIONS.RU}
      </Typography>
      <Switch
        sx={languageSwitchSx.switch}
        inputProps={{ 'aria-label': 'controlled', role: 'switch' }}
        checked={language === REGIONS.EN}
        onChange={onChangeLanguages}
      />
      <Typography variant="button" color="primary.main">
        {REGIONS.EN}
      </Typography>
    </Box>
  );
};
