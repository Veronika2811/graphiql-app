import React from 'react';

export const onErrorCardMedia = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  image: string
) => {
  const target = event.target as HTMLImageElement;
  target.onerror = null;
  target.src = image;
};
