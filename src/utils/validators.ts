import Validator, {ValidationError} from "../types/Validator";

export function minLengthValidator(minLength: number): Validator<string> {
  return (value: string): ValidationError => {
    if (value.length >= minLength) {
      return "";
    } else {
      return `{field.title} must be at least ${minLength} characters.`;
    }
  };
}

export function maxLengthValidator(maxLength: number): Validator<string> {
  return (value: string): ValidationError => {
    if (value.length <= maxLength) {
      return "";
    } else {
      return `{field.title} must be no more than ${maxLength} characters.`;
    }
  };
}
