const paramValue = (param) => {
  const { hash } = window.location;
  const regex = RegExp(`${param}=([0-9]*)`);
  const [, value] = hash.match(regex);
  // TODO: handle non-number
  // if (isNaN(value) === true) return value;
  return Number(value);
};

export default paramValue;
