const queryCreator = (queryObject) => {
  return Object.entries(queryObject).reduce((acc, [property, value]) => {
    return `${acc}${property}=${value}&`;
  }, "?");
};

export default queryCreator;
