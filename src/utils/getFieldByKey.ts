export const getFieldByKey = (obj: Record<string, string>, key: string) =>
  obj[key] != null ? obj[key] : obj.default;
