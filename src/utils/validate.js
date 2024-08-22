export const validate = ({
  values,
  value,
  required = false,
  type,
  min = 0,
  max = 100,
  ref,
}) => {
  if (required && !value) {
    return "This field is required";
  }
  if (min && value.length < min) {
    return `This field must be at least ${min} characters`;
  }
  if (max && value.length > max) {
    return `This field must be at most ${max} characters`;
  }
  if (type) {
    switch (type) {
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Invalid email";
        }
        break;
      case "password":
        if (value.length < min || value.length > max) {
          return `Password must be between ${min} and ${max} characters`;
        }
        break;
      case "compare":
        if (value !== values[ref]) {
          return "Password does not match";
        }
        break;
      case "number":
        if (typeof value !== "number") {
          return "This field must be a number";
        }
        break;
      case "string":
        if (typeof value !== "string") {
          return "This field must be a string";
        }
        break;
      default:
        break;
    }
  }
  return undefined;
};
