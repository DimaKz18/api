import React from "react";
import "./FormControls.css";

export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
  return (
    <div>
      <div className={'form-control' + ' ' + (hasError ? 'error' : '')}>
        <textarea {...input} {...props} />
      </div>
        {hasError ? <span className={'error'}>{meta.error}</span> : ''}
    </div>
  );
};
