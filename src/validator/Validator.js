export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required";
};

export const maxLength30 = (values) => {
  if (values && values.length >= 30) return "Max length is 30 symbols";
  return undefined;
};
export const minLength2 = (values) => {
  if (values && values.length <= 2) return "Min length is 2 symbols";
  return undefined;
};
