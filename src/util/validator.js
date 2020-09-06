
/**
 * Validates url using a regex pattern to determine if it is valid and returns a boolean
 * @param {string} url - a string representing a URL inputed from the user
 */
const validateUrl = (url) => {
  const regexPattern = /^(https:\/\/www.)(linkedin).com\/in\//;
  return regexPattern.test(url);
};

export default validateUrl;