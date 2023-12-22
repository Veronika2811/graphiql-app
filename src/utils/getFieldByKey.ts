export const getFieldByKey = (obj: Record<string, string>, key: string) =>
  obj[key] || obj.default;
