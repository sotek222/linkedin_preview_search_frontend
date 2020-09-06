function validateUrl(url){
  const regexPattern = /^(https:\/\/www.)(linkedin).com\/in\//;
  return regexPattern.test(url);
};

export default validateUrl;