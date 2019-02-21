module.exports = function tilapia(string) {
  if (typeof string !== "string") throw new TypeError("Tilapia wants a string!");
  return string.replace(/\s/g, "");
};