export const toFormatSearch = (str: string): string => {
  str = str.replace(/\s/g, "");
  str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return str;
};
