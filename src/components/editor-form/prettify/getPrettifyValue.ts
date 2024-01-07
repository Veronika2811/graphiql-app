import { getDefineSpaceString } from './getDefineSpaceString';
import { getStringWithoutExtraSpaces } from './getStringWithoutExtraSpaces';

export const getPrettifyValue = (parseArray: string[]) => {
  let nesting = 0;
  let prettifyString = '';
  const LINE_BREAKS = '\n';
  const SPACE = ' ';
  parseArray.forEach((line, index, currentArray) => {
    const updateLine = line.replace(/\n/g, SPACE).trim();
    if (!updateLine || updateLine === '(' || updateLine === ')') {
      return;
    }

    if (updateLine === '{') {
      nesting += 1;
      prettifyString = prettifyString.slice(0, -1);
      prettifyString += ` ${updateLine}${LINE_BREAKS}`;
      return;
    }

    if (updateLine === '}') {
      nesting -= 1;
      const stringOfSpaces = getDefineSpaceString(nesting);
      prettifyString += `${stringOfSpaces}${updateLine}${LINE_BREAKS}`;
      return;
    }

    const prevSymbol = currentArray[index - 1];
    const nextSymbol = currentArray[index + 1];

    if (prevSymbol === '(' && nextSymbol === ')') {
      const modifyString = updateLine.replace(/\s/g, '');
      prettifyString = prettifyString.slice(0, -1);
      prettifyString += `(${modifyString})${LINE_BREAKS}`;
      return;
    }

    if (prevSymbol === '{' && nextSymbol === '}') {
      const parseArraySpace = updateLine.split(SPACE);
      const isLargeArray = parseArraySpace.length > 1;

      if (isLargeArray) {
        const stringOfSpaces = getDefineSpaceString(nesting);

        const prettifyArrayLine = parseArraySpace
          .filter((item) => item)
          .map((item) => `${stringOfSpaces}${item}`);

        const convertedStringFromArray = prettifyArrayLine.join(LINE_BREAKS);
        prettifyString += `${convertedStringFromArray}${LINE_BREAKS}`;
        return;
      }
    }

    const stringOfSpaces = getDefineSpaceString(nesting);
    const stringWithoutExtraSpaces = getStringWithoutExtraSpaces(updateLine);
    prettifyString += `${stringOfSpaces}${stringWithoutExtraSpaces}${LINE_BREAKS}`;
  });

  return prettifyString;
};
