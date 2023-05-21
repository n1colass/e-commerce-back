export const toFormatSearch = (str: string): string => {
  str = str.replace(/\s{2,}/g, " ");
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return str;
};
