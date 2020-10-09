export const hashtags = (text) => {
  const words = text.split(" ");
  const result = words.filter((item) => {
    if (item[0] === "#") {
      return item;
    }
  });
  return result;
}