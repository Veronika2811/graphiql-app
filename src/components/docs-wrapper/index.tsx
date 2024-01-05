import { useState } from 'react';
import { IntrospectionType } from 'graphql';

import { DocsDscr } from 'components/docs-dscr';
import { DocsInitial } from 'components/docs-initial';

interface DocsInitialProps {
  links: IntrospectionType[] | null;
  root: string | null;
}

export const DocsWrapper = (props: DocsInitialProps) => {
  const [queryDocs, setQueryDocs] = useState<string | null>(null);

  const switchQuery = (query: string | null) => {
    setQueryDocs(query);
  };

  const isAdvancedQuery = Boolean(queryDocs);
  return (
    <>
      {!isAdvancedQuery && (
        <DocsInitial
          links={props.links ?? null}
          root={props.root}
          changeQueryDocs={switchQuery}
        />
      )}
      {isAdvancedQuery && (
        <DocsDscr
          links={props.links ?? null}
          dscr={queryDocs}
          changeValue={switchQuery}
        />
      )}
    </>
  );
};
