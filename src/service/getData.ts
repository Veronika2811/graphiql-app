export const getData = async (
  endpoint: string,
  query: string,
  variables?: string
) => {
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: variables ? JSON.parse(variables) : {},
      }),
    });
    const data = await res.json();

    return data;
  } catch (error) {
    return error;
  }
};
