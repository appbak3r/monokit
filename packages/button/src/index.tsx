import { FC, HTMLAttributes } from "react";
import { StyledButton } from "./styles";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  isFluid?: boolean;
};

export const Button: FC<ButtonProps> = ({ isFluid = false, ...props }) => {
  return <StyledButton {...props} $isFluid={isFluid} />;
};
