import Validator from "../types/Validator";
import { useState } from "react";
import {title} from "../utils/string";

export interface UseFormOptions<T extends {}> {
  fields: {
    [key in keyof T]: Array<Validator<T[key]>>;
  };
  onSubmit: (data: T) => void;
}

type Errors<T extends {}> = {
  [key in keyof T]?: Array<string>;
};

interface Form<T extends {}> {
  errors: Errors<T>;
  submit(data: T): void;
}

function useForm<T>(options: UseFormOptions<T>) {
  const [errors, setErrors] = useState<Errors<T>>({});

  const form: Form<T> = {
    errors,
    submit(data: T) {
      let isValid = true;
      const errors: Errors<T> = {};
      for (const [fieldName, validators] of Object.entries<Array<Validator<any>>>(
        options.fields
      )) {
        const field = fieldName as keyof T;
        const value = data[field];
        errors[field] = [];
        for (const validator of validators) {
          let validationError = validator(value);
          if (validationError) {
            validationError = validationError.replaceAll('{field}', fieldName);
            validationError = validationError.replaceAll('{field.title}', title(fieldName))
            errors[field]!.push(validationError);
            isValid = false;
          }
        }
      }
      if (isValid) {
        options.onSubmit(data);
        setErrors({});
      } else {
        setErrors(errors);
      }
    },
  };

  return form;
}

export default useForm;
