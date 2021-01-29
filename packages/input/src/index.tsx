import { FC, InputHTMLAttributes } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  isFluid?: boolean;
};

export const Input: FC<InputProps> = (props) => {
  return <input {...props} />;
};
