import { useState } from 'react';
import { IntrospectionType } from 'graphql';

import { DocsDscr } from 'components/docs-dscr';
import { DocsInitial } from 'components/docs-initial';

interface DocsInitialProps {
  links: IntrospectionType[] | null;
  root: string | null;
}

export const DocsWrapper = ({ links, root }: DocsInitialProps) => {
  const [queryDocs, setQueryDocs] = useState<string | null>(null);

  const switchQuery = (query: string | null) => setQueryDocs(query);

  const isAdvancedQuery = Boolean(queryDocs);

  return (
    <>
      {!isAdvancedQuery && (
        <DocsInitial
          links={links ?? null}
          root={root}
          changeQueryDocs={switchQuery}
        />
      )}
      {isAdvancedQuery && (
        <DocsDscr
          links={links ?? null}
          description={queryDocs}
          changeValue={switchQuery}
        />
      )}
    </>
  );
};
