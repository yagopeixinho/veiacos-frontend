import { useField } from "formik";

export default function InputTextForm({ classes = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <input className={classes} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="input-error-message">{meta.error}</div>
      ) : null}
    </>
  );
}
