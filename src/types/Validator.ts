export type ValidationError = string;

type Validator<T> = (value: T) => ValidationError;

export default Validator;