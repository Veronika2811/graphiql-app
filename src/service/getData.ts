export const getData = async (
  endpoint: string,
  query: string,
  variables: string,
  headers: string
) => {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        ...JSON.parse(headers || '{}'),
      },
      body: JSON.stringify({
        query,
        variables: variables ? JSON.parse(variables) : {},
      }),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return error; // FIXME: SnackBar Error: 'Nothing found'
  }
};
