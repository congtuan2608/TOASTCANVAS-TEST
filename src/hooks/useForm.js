import { useCallback, useMemo, useState } from "react";
import { validate } from "../utils/validate";

export const useForm = (initialState, validation) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const onFocus = (key) => {
    setErrors((pre) => ({
      ...pre,
      [key]: "",
    }));
  };
  const onBlur = (key) => {
    setErrors((pre) => ({
      ...pre,
      [key]: validate({ ...validation[key], value: values[key], values }) ?? "",
    }));
  };
  const onChange = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const reset = useCallback(() => {
    setValues(initialState);
    setErrors({});
  }, [initialState]);

  const onSubmit = async (callback) => {
    const errs = Object.entries(values).filter(([key, value]) => {
      setErrors((pre) => ({
        ...pre,
        [key]: validate({ ...validation[key], value, values }) ?? "",
      }));
      return Boolean(validate({ ...validation[key], value, values }));
    });
    if (errs.length > 0) return;
    await callback?.(values);
  };

  const isValid = useMemo(
    () =>
      Object.entries(values).filter(([key, value]) =>
        Boolean(validate({ ...validation[key], value, values }))
      ).length > 0,
    [errors]
  );

  return {
    values,
    errors,
    isValid,
    onFocus,
    onBlur,
    onChange,
    reset,
    onSubmit,
  };
};
