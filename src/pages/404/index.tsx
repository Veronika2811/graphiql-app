import { Box } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';

const NotFoundPage = () => {
  const { translation } = useLocale();

  return <Box component="div">{translation.not_found_page}</Box>;
};

export default NotFoundPage;
