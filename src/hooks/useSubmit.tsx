import { useState } from 'react';

export const useSubmit = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);

  return { submitDisabled, setSubmitDisabled };
};
