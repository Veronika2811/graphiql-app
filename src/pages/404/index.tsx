import { Box } from '@mui/material';
import { useLocale } from 'context/hook';

const NotFound = () => {
  const { translation } = useLocale();

  return <Box component="div">{translation.not_found_page}</Box>;
};

export default NotFound;
