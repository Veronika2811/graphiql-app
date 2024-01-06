import { Typography } from '@mui/material';
import { useLocale } from 'internationalization/useLocale';
import { useAppSelector } from 'store/hooks';
import { selectSchema } from 'store/selectors';

const DocsWrapper = () => {
  const { translation } = useLocale();
  const docsInfo = useAppSelector(selectSchema);
  const docsInfoArr = docsInfo?.split('\n');

  return (
    <>
      <Typography variant="subtitle1">{translation.docs}</Typography>
      {docsInfoArr?.map((el, i) => {
        const key = `${el} ${i}`;

        if (el[el.length - 1] === '{') {
          return (
            <Typography key={key} variant="subtitle2" component="span">
              <Typography
                variant="subtitle2"
                component="span"
                color="custom.blue"
              >
                {`${el.slice(0, -1)}`}
              </Typography>
              {'{\n'}
            </Typography>
          );
        }
        if (el.includes(`"`))
          return (
            <Typography
              key={key}
              variant="subtitle2"
              sx={{ fontStyle: 'italic' }}
              component="span"
            >
              {el.replace(/"/g, '')}
            </Typography>
          );

        if (el === '}')
          return (
            <Typography key={key} variant="subtitle2" component="span">
              {el}
            </Typography>
          );

        return (
          <Typography
            key={key}
            variant="subtitle2"
            component="span"
            color="secondary.main"
          >
            {el}
          </Typography>
        );
      })}
    </>
  );
};

export default DocsWrapper;
