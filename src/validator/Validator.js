export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLengthCreator = (maxLength) => (values) => {
  if (values && values.length >= maxLength)
    return `Max length is ${maxLength} symbols`;
  return undefined;
};
export const minLengthCreator = (minLength) => (values) => {
  if (values && values.length <= minLength)
    return `Min length is ${minLength} symbols`;
  return undefined;
};
